const express = require('express');
const app = express();
const PORT = 3000;
const pageRoutes = require('./routes/page.routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', pageRoutes);

app.use((req, res) => {
  res.status(404).send('<h1>404</h1><p>Halaman tidak ditemukan.</p>');
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`[SERVER] Aktif di http://localhost:${PORT}`);
});
