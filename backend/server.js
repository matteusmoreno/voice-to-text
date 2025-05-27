// server.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const { OpenAI } = require('openai');

const app = express();
app.use(cors());
const upload = multer({ dest: 'uploads/' });

const openai = new OpenAI({
  apiKey: 'SUA_CHAVE_API_OPENAI'
});

app.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const transcript = await openai.audio.transcriptions.create({
      file: fs.createReadStream(req.file.path),
      model: "whisper-1"
    });

    fs.unlinkSync(req.file.path); // remove o arquivo após processar
    res.json({ text: transcript.text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro na transcrição' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
