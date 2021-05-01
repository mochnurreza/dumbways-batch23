var express = require('express');
var dbConn = require('../config/dbConfig')
var router = express.Router();

/* display course*/

router.get('/', function(req, res, next) {

  dbConn.query('SELECT * FROM course ORDER BY id desc', (err, rows) => {
    if(err) {
      req.flash('error', err);
      res.render('course', {data: ''});
    } else {
      res.render('course', {data:rows})
    }
  });
});

router.post('/add', function(req, res, next) {
  let nama = req.body.nama;
  let error = false;

  if(nama.length === 0) {
    error = true;

    req.flash('error', 'masukkan nama kursus dan pemateri');
    res.render('course/add', {
      nama: nama,
    });

  };

  if(!error) {
    var form = {
      nama: nama,
    }

    dbConn.query('INSERT INTO course SET ?', form, (err, results) => {
      if(err) {
        req.flash('error', err);
        res.render('course/add', {
          form: form.nama
        })
      } else {
        req.flash('success', results);
        res.redirect('/course');
      }
    })
  }
})

router.get('/edit/(:id)', (req, res) => {
  let id = req.params.id;

  dbConn.query('SELECT * FROM courses WHERE id = ' + id, (err, rows, fields) => {
      if(err) throw err;

      if(rows.length <= 0) {
        req.flash('error', 'course tidak ditemukan');
        res.redirect('/course');
      } else {
        res.render('course/edit', {
          nama: rows[0].nama,
          id: rows[0].id,
          deskripsi: rows[0].deskripsi
        })
      }
  })
})

router.post('/update/:id', (req, res) => {
  let id = req.params.id
  let nama = req.params.nama
  let deskripsi = req.params.deskripsi
  let error = false

  if(nama.length === 0) {
    error = true;
    req.flash('error', 'silahkan masukan nama course');
    res.render('course/edit', {
      id: req.params.id,
      nama: nama,
      deskripsi: deskripsi
    })
  } 

  if(!error) {
    var form_data = {
      nama: nama,
      deskripsi: deskripsi
    }

    dbConn.query('UPDATE course SET ? WHERE id = ?' + id, form_data, (err,result) => {
      if(err){
        req.flash('error', err.message);
        res.render('course/edit', {
          id: req.params.id,
          nama: form_data.nama,
          deskripsi: form_data.deskripsi
        })
      } else {
        req.flash('sukses', 'course berhasil di update');
        res.redirect('/course')
      }
    })
  }
})

router.get('/delete/(:id)', (req, res) => {
  let id = req.params.id;

  dbConn.query('DELETE FROM course WHERE id=' + id, (err, res) => {
    if(err) {
      req.flash('error', err)
      res.redirect('/course')
    } else {
      req.flash('success', 'course berhasil di hapus')
      res.redirect('/course')
    }
  })
})

module.exports = router;
