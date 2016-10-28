const express = require('express');
const router = express.Router();
const path = require('path');
const multer  = require('multer');

var upload = multer({ dist: (path.join(__dirname, '../uploads')) });

router.post("/upload", upload.single("file"), (req,res) => {
  console.log(req.file);
  res.json({"size": req.file.size + " bytes",
            "type": req.file.mimetype,
            "ext": req.file.originalname.split('.')[1]
  })
});

router.get('/', (req, res) => {
  res.render('index', { title: 'File Microservice' });
});


module.exports = router;
