const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para o callback do OAuth2
app.get('/callback', (req, res) => {
    const code = req.query.code;
    if (code) {
        console.log('Código recebido:', code);
        // Aqui você pode processar o código, trocá-lo por um token, etc.
        res.send('Login bem-sucedido! Você pode fechar esta página.');
    } else {
        res.status(400).send('Erro ao realizar login.');
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
