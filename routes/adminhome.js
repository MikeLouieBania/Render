var express = require('express');
var router = express.Router();

const {PrismaClient, Prisma} = require("@prisma/client")
var prisma = new PrismaClient

/* GET home page. */
router.get('/', async function(req, res, next) {
  var users = await prisma.User.findMany()

  res.render('admin', { title: 'Express', users: users });
});


module.exports = router;
