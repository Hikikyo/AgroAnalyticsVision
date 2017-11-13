var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {states:[{"id": {"$oid": "59867b535718ddc0b8efd98a"},"name": "Amazonas","name_abbr": "AM"},{"id": {"$oid": "59867b535718ddc0b8efd98b"},"name": "Roraima","name_abbr": "RR"},{"id": {"$oid": "59867b535718ddc0b8efd98c"},"name": "Amapá","name_abbr": "AP"},{"id": {"$oid": "59867b535718ddc0b8efd98d"},"name": "Pará","name_abbr": "PA"},{"id": {"$oid": "59867b535718ddc0b8efd98e"},"name": "Tocantins","name_abbr": "TO"},{"id": {"$oid": "59867b535718ddc0b8efd98f"},"name": "Rondônia","name_abbr": "RO"},{"id": {"$oid": "59867b535718ddc0b8efd990"},"name": "Acre","name_abbr": "AC"},{"id": {"$oid": "59867b535718ddc0b8efd991"},"name": "Maranhão","name_abbr": "MA"},{"id": {"$oid": "59867b535718ddc0b8efd992"},"name": "Piauí","name_abbr": "PI"},{"id": {"$oid": "59867b535718ddc0b8efd993"},"name": "Ceará","name_abbr": "CE"},{"id": {"$oid": "59867b535718ddc0b8efd994"},"name": "Rio Grande do Norte","name_abbr": "RN"},{"id": {"$oid": "59867b535718ddc0b8efd995"},"name": "Pernambuco","name_abbr": "PE"},{"id": {"$oid": "59867b535718ddc0b8efd996"},"name": "Paraíba","name_abbr": "PB"},{"id": {"$oid": "59867b535718ddc0b8efd997"},"name": "Sergipe","name_abbr": "SE"},{"id": {"$oid": "59867b535718ddc0b8efd998"},"name": "Alagoas","name_abbr": "AL"},{"id": {"$oid": "59867b535718ddc0b8efd999"},"name": "Bahia","name_abbr": "BA"},{"id": {"$oid": "59867b535718ddc0b8efd99a"},"name": "São Paulo","name_abbr": "SP"},{"id": {"$oid": "59867b535718ddc0b8efd99b"},"name": "Rio de Janeiro","name_abbr": "RJ"},{"id": {"$oid": "59867b535718ddc0b8efd99c"},"name": "Espírito Santo","name_abbr": "ES"},{"id": {"$oid": "59867b535718ddc0b8efd99d"},"name": "Minas Gerais","name_abbr": "MG"},{"id": {"$oid": "59867b535718ddc0b8efd99e"},"name": "Mato Grosso","name_abbr": "MT"},{"id": {"$oid": "59867b535718ddc0b8efd99f"},"name": "Mato Grosso do Sul","name_abbr": "MS"},{"id": {"$oid": "59867b535718ddc0b8efd9a0"},"name": "Goiás","name_abbr": "GO"},{"id": {"$oid": "59867b535718ddc0b8efd9a1"},"name": "Paraná","name_abbr": "PR"},{"id": {"$oid": "59867b535718ddc0b8efd9a2"},"name": "Rio Grande do Sul","name_abbr": "RS"},{"id": {"$oid": "59867b535718ddc0b8efd9a3"},"name": "Santa Catarina","name_abbr": "SC"},{"id": {"$oid": "59867b535718ddc0b8efd9a4"},"name": "Distrito Federal","name_abbr": "DF"}]});
});

router.get('/test', function(req, res, next) {
  res.render('test', {title:'any'});
});


module.exports = router;


/* PAGES ---------------------------------------------------------------------------------------- */