import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/upload/curriculo/:id', (req, res) => {
  const id = req.params.id;
  const html = fs.readFileSync('./public/upload.html', 'utf8').replace('{{ID}}', id);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
