const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
  nombre: String,
  codigo: String,
  descripcion: String,
  stock:Number,
  eliminado: Boolean
});

const ProductoModel = mongoose.model('productos', productoSchema);

const getProductos = async () => {
    const productos = await ProductoModel.find();
    return productos;
}

const getProductoById = (idP) => {
    const producto = ProductoModel.findOne({_id:idP});
    return producto;
}
const getProductoByCodigo = (codigoP) => {
    const producto = ProductoModel.findOne({codigo:codigoP});
    return producto;
}

const createProducto = 
async (nombre, codigo, descripcion,stock, eliminado ) => {
    const nuevoP = {
        nombre,
        codigo,
        descripcion: 
        stock,
        eliminado
    }
    return ProductoModel.create(nuevoP);
}

const updateProducto = 
async (filtro, parametros) => {
    //bucamos codigo 0001 y reemplazamos nombre por Bonobon
    let prodActualizar = await ProductoModel.findOneAndUpdate(filter, parametros, {
        new: true
      });
    return prodActualizar;
}

const movimientoStock = 
async (tipoMovP, codigoP, cantidadP) =>
{
    let prod = await ProductoModel.findOne({codigo:codigoP});
    //true suma, false resta
    tipoMovP ? prod.stock += cantidadP : prod.stock -= cantidadP;
    let result = await ProductoModel.findOneAndUpdate({codigo:codigoP},{stock:prod.stock}, {new:true})
    return result;
}

module.exports = {getProductos, getProductoById, getProductoByCodigo, createProducto, updateProducto,movimientoStock}