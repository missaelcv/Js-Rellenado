var articulos = [

    {nombre: "Bicicleta",  costo: 3000},
    {nombre: "Television", costo:2500},
    {nombre: "Carro",      costo:21500},
    {nombre: "Celular",    costo:5500},
    {nombre: "Camara",     costo:6500},
    {nombre: "Gorra",      costo:500},
];


//Metodo Find 
var encuentraArticulo = articulos.find(function(articulo){
        return articulo.nombre === "Gorra"
});

//Metodo ForEach
articulos.forEach(function(articulo){
        console.log(articulo.nombre);
});

//Metodo Some, 
var articuloBaratos = articulos.some(function(articulo){
        return articulo.costo <= 700
});