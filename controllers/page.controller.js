const daftarBuku = [
  { judul: 'Solo Player Who Like Revenge', tahun: 2019, kategori: 'Novel' },
  { judul: 'The Anchestor Heavenly Sect', tahun: 1950, kategori: 'Sejarah' },
  { judul: 'The Mentality Of Ayanokouji', tahun: 2020, kategori: 'Mindset' }
];

exports.getBeranda = (req, res) => {
  res.render('pages/home', { nama: 'Pembaca Yang Cerdas Dan Berwibawa!', total: daftarBuku.length });
};

exports.getTentang = (req, res) => res.render('pages/about');

exports.getKatalog = (req, res) => res.render('pages/katalog', { daftarBuku });

exports.getTambah = (req, res) => res.render('pages/tambah');

exports.postTambah = (req, res) => {
  console.log('[BACK-END] Menerima Payload POST:');
  console.log(req.body);

daftarBuku.push({
  judul: req.body.judul,
  tahun: Number(req.body.tahun),
  kategori: req.body.kategori});

  res.redirect('/katalog'); // Post-Redirect-Get
};
