// Vercel Serverless Function - Telegram Bot Integration
// Security hardened version

const ALLOWED_ORIGINS = [
  'https://bta-awards.vercel.app',
  'https://bta-awards-2026.vercel.app'
];

// Rate limiting map (in production use Redis)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;
  
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }
  
  const requests = rateLimitMap.get(ip).filter(time => time > windowStart);
  requests.push(now);
  rateLimitMap.set(ip, requests);
  
  return requests.length <= RATE_LIMIT_MAX;
}

function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '')
    .substring(0, 1000);
}

function validateCSRFToken(token) {
  // Simple validation - in production use proper session-based tokens
  return token && token.length === 64 && /^[a-f0-9]+$/.test(token);
}

function formatMessage(formType, data, timestamp, ip) {
  const escapedData = {};
  for (const [key, value] of Object.entries(data)) {
    escapedData[key] = sanitizeInput(value);
  }

  let message = '';
  
  switch (formType) {
    case 'registration':
      message = `
🎉 <b>YANGI RO'YXATDAN O'TISH</b>

👤 <b>Ism:</b> ${escapedData.firstname || ''} ${escapedData.lastname || ''}
📞 <b>Telefon:</b> ${escapedData.phone || ''}
💬 <b>Telegram:</b> ${escapedData.telegram || 'Kiritilmagan'}
🎯 <b>Soha:</b> ${escapedData.field || ''}
🏢 <b>Kompaniya:</b> ${escapedData.company || 'Kiritilmagan'}

🌐 <b>IP:</b> ${ip}
⏰ <b>Sana:</b> ${timestamp}
`;
      break;
      
    case 'nomination':
      message = `
🏆 <b>YANGI NOMINATSIYA ARIZASI</b>

👤 <b>Ism:</b> ${escapedData.firstname || ''} ${escapedData.lastname || ''}
🎯 <b>Soha:</b> ${escapedData.field || ''}
📍 <b>Hudud:</b> ${escapedData.region || ''}
📞 <b>Telefon:</b> ${escapedData.phone || ''}
📧 <b>Email:</b> ${escapedData.email || ''}
🎓 <b>Ta'lim:</b> ${escapedData.education || ''}

💼 <b>Ish tajribasi:</b>
${escapedData.experience || ''}

🏅 <b>Yutuqlar:</b>
${escapedData.achievements || ''}

📝 <b>Motivatsiya:</b>
${escapedData.motivation || ''}

🌐 <b>IP:</b> ${ip}
⏰ <b>Sana:</b> ${timestamp}
`;
      break;
      
    case 'contact':
      message = `
📨 <b>YANGI ALOQA XABARI</b>

👤 <b>Ism:</b> ${escapedData.name || ''}
📞 <b>Telefon:</b> ${escapedData.phone || ''}
🎯 <b>Soha:</b> ${escapedData.field || ''}

💬 <b>Xabar:</b>
${escapedData.message || 'Kiritilmagan'}

🌐 <b>IP:</b> ${ip}
⏰ <b>Sana:</b> ${timestamp}
`;
      break;
      
    default:
      throw new Error('Unknown form type');
  }
  
  return message;
}

export default async function handler(req, res) {
  // CORS headers
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-CSRF-Token');
  res.setHeader('Access-Control-Max-Age', '86400');
  
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  // Rate limiting
  const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (!checkRateLimit(clientIP)) {
    return res.status(429).json({ error: 'Too many requests' });
  }
  
  // CSRF validation (relaxed for demo)
  const csrfToken = req.headers['x-csrf-token'];
  if (csrfToken && !validateCSRFToken(csrfToken)) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }
  
  const { formType, data } = req.body;
  
  if (!formType || !data || typeof data !== 'object') {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Missing Telegram configuration');
    return res.status(500).json({ error: 'Server configuration error' });
  }
  
  try {
    const timestamp = new Date().toLocaleString('uz-UZ', { 
      timeZone: 'Asia/Tashkent',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const message = formatMessage(formType, data, timestamp, clientIP);
    
    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });
    
    const result = await response.json();
    
    if (!result.ok) {
      console.error('Telegram API error:', result);
      return res.status(500).json({ error: 'Failed to send message' });
    }
    
    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
    
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
