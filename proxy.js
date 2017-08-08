
var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nonodb');

app.use(express.static('www/lanani'));
app.use(express.bodyParser());
app.use(express.methodOverride());

var producto = mongoose.model('producto', {
  nombre: String,
  descripcion: String,
  precio: Number,
  img: Array,
  tag: Array
});

app.get('/catalogo/producto', function(req, res) {
  producto.findById("59811b938cda096fac4b8093", function(err, data) {
    if(err) {
      res.send(err);
    }
    res.json(data);
  });
});

app.post('/catalogo/producto', function(req, res) {
  var obj = {
    nombre: "Dinosaurio Teo",
    descripcion: "Un feroz dinosaurio llamado Teo, terrorificamente amoroso",
    descripcion_tecnica: "hecho a mano",
    precio: 15000,
    img: [
      {seq: 1, cln: "/img/teosaurio1_cln_300x300.png", bkg: "/img/teosaurio1_bkg_300x300.png"},
      {seq: 2, cln: "/img/teosaurio2_cln_300x300.png", bkg: ""}
    ],
    tag: [
      "dinosaurio",
      "amigurumis"
    ]
  };
  var obj2 = {
    nombre: "Muñeca cabezona",
    descripcion: "Exelente elección para regalar a tu mejor amiga",
    descripcion_tecnica: "hecho a mano",
    precio: 15000,
    img: [
      {seq: 1, cln: "/img/DSC01224_TMP_300x300.PNG", bkg: ""},
      {seq: 2, cln: "/img/DSC01226_TMP_300x300.PNG", bkg: ""},
      {seq: 3, cln: "/img/DSC01229_TMP_300x300.PNG", bkg: ""}
    ],
    tag: [
      "muñecas",
      "cabezonas",
      "amigurumis"
    ]
  };
  producto.create(obj, function(err1, data1) {
    if(err1) {
      res.send(err1);
    }
    producto.find(function(err2, data2) {
      if(err2) {
        res.send(err2);
      }
      res.json(data2);
    });
  });

  producto.create(obj2, function(err1, data1) {
    if(err1) {
      res.send(err1);
    }
    producto.find(function(err2, data2) {
      if(err2) {
        res.send(err2);
      }
      res.json(data2);
    });
  });
});

/*app.delete('/api/todos/:todo', function(req, res) {
  db.remove({
    _id:  req.params.todo
  }, function(err, todo) {
    if(err) {
      res.send(err);
    }
    db.find(function(err, todos) {
      if(err) {
        res.send(err);
      }
      res.json(todos);
    });
  });
});*/

app.get('*', function(req, res) {
  res.redirect('index.html');
});

app.listen(8080);


/*var colors = require('colors');
var connect = require('connect');
var http = require('http');
var httpProxy = require('http-proxy');
var open = require('open');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lanani');

var db = mongoose.model('nonodb', {
  text:String
});

app.get('/api/getProducto', function(req, res) {
    db.find(function(err, todos) {
        if(err) {
            res.send(err);
        }
        res.json(todos);
    });
});

var options = {
   //'weblogic': 'http://lablnx297:7011',
   'weblogic': 'http://localhost:7003', //apuntando a weasel
   'static': 'http://localhost:3001'
};

var API_URL_LOCAL = '/cuandoConsulteAUnRest';
var API_URL_SERVER = '/cuandoConsulteAUnRest';

var proxy = httpProxy.createProxyServer({});

var proxyApp = connect().use(function(req,res) {
    console.log(('request to node server: ' + req.url).green);

    var target = options.static;
    if(req.url.indexOf(API_URL_LOCAL) > -1) {
        target = options.weblogic;
        req.url = req.url.replace(API_URL_LOCAL, API_URL_SERVER);
        console.log(('request to rest api: ' + target + req.url).blue);
    }
    proxy.web(req, res, {
        target: target
    });
});

http.createServer(proxyApp).listen(8080);

var app = connect()
	.use(connect.static('www/lanani'))
	.use(connect.directory('www/lanani'))
  .use(connect.cookieParser())
  .use(connect.session({ secret: 'my secret here' }));

http.createServer(app).listen(3001, openBrowser);

function openBrowser(){
    console.log('Open browser'.green);
    //open('http://localhost:' + 8080);
    console.log('Running Web Server'.green);
}*/
