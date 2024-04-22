const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();

// Configuración multer para guardar la extension del archivo
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //myFile - fecha - extension
  }
})

const upload = multer({ storage: storage });

app.listen(8081, () => console.log('Server started on port 8081...'));

//upload endpoint
app.post('/upload', upload.single('myFileUpload'), (req, res) => { 
    console.log('File uploaded: ', req.file);
    res.sendStatus(200);
});