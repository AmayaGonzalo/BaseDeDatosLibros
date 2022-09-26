var readlineSync = require('readline-sync');
var pNombre = readlineSync.question("Indique el nombre del libro: ");
var pAutor = readlineSync.question("Indique el autor del libro: ");
var pAnio = readlineSync.questionInt("Indique el anio del libro: ");
var pEdicion = readlineSync.questionInt("Indique la edicion del libro: ");
var Libro = /** @class */ (function () {
    function Libro(pNombre, pAutor, pAnio, pEdicion) {
        this.nombre = pNombre;
        this.autor = pAutor;
        this.anio = pAnio;
        this.edicion = pEdicion;
    }
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    Libro.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.setAutor = function (pAutor) {
        this.autor = pAutor;
    };
    Libro.prototype.getAnio = function () {
        return this.anio;
    };
    Libro.prototype.setAnio = function (pAnio) {
        this.anio = pAnio;
    };
    Libro.prototype.getEdicion = function () {
        return this.edicion;
    };
    Libro.prototype.setEdicion = function (pEdicion) {
        this.edicion = pEdicion;
    };
    return Libro;
}());
var GestorLibros = /** @class */ (function () {
    function GestorLibros(pListaLibros) {
        this.listaLibros = pListaLibros;
    }
    GestorLibros.prototype.insertarLibro = function (pLibro) {
        this.listaLibros.push(pLibro);
        console.log(pLibro, "insertado");
    };
    GestorLibros.prototype.consultarLibro = function (pNombre) {
        for (var i = 0; i < this.listaLibros.length; i++) {
            if (pNombre === this.listaLibros[i].getNombre()) {
                console.log(this.listaLibros[i]);
            }
            else {
                console.log("El libro no se encuentra");
            }
        }
    };
    return GestorLibros;
}());
var primerLibro = new Libro(pNombre, pAutor, pAnio, pEdicion);
var segundoLibro = new Libro(pNombre, pAutor, pAnio, pEdicion);
var listaLibros = [primerLibro, segundoLibro];
var primerGestor = new GestorLibros(listaLibros);
primerGestor.insertarLibro(primerLibro);
console.log(listaLibros);
console.log(primerGestor);
