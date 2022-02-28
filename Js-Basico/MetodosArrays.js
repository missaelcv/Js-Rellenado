var articulos = [

    {nombre: "Bicicleta",  costo: 3000},
    {nombre: "Television", costo:2500},
    {nombre: "Carro",      costo:21500},
    {nombre: "Celular",    costo:5500},
    {nombre: "Camara",     costo:6500},
    {nombre: "Gorra",      costo:500},
];

var articulosFiltrados = articulos.filter(function(articulo){
        return articulos.costo <= 500
});

var nombreArticulo = articulos.map(function(articulo){
        return articulo.nombreArticulo
});