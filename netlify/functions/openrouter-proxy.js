// netlify/functions/openrouter-proxy.js
const fetch = require('node-fetch'); // Ferramenta para o ajudante fazer chamadas na internet

exports.handler = async (event) => {
    // Pega a chave secreta que guardamos no Netlify (ver passo 5)
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
        return { statusCode: 500, body: 'Erro: Chave secreta não configurada no Netlify!' };
    }

    // Pega a mensagem que o Auri enviou para o ajudante
    const requestBody = JSON.parse(event.body);

    try {
        // O ajudante fala com o OpenRouter, usando a chave secreta
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` // AQUI ele usa a chave secreta!
            },
            body: JSON.stringify(requestBody) // Envia o que o Auri pediu
        });

        const data = await response.json();

        // O ajudante devolve a resposta do OpenRouter para o Auri
        return {
            statusCode: response.status,
            body: JSON.stringify(data),
            // Linhas importantes para o navegador deixar o Auri receber a resposta:
            headers: {
                'Access-Control-Allow-Origin': 'https://astonishing-alpaca-9b0654.netlify.app', // Permite que seu site acesse (idealmente troque '*' pela sua URL netlify depois)
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            }
        };
    } catch (error) {
        console.error("Erro no ajudante:", error);
        return { statusCode: 502, body: JSON.stringify({ error: 'Ajudante falhou ao falar com OpenRouter' }) };
    }
};

// Adiciona resposta para OPTIONS (necessário para o navegador)
exports.handler.options = async (event) => {
  return {
    statusCode: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://astonishing-alpaca-9b0654.netlify.app',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Allow': 'POST, OPTIONS'
    }
  };
};
