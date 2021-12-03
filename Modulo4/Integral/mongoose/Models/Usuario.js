const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  usuario: String,
  password: String,
  nombre: { type: String, default: "TestDesdeSchema" },
  apellido: String,
  edad: Number,
  eliminado: Boolean,
  fechaNac: Date,
});

const UsuarioModel = mongoose.model("usuarios", usuarioSchema);

const getUsuarios = () => {
  const usuarios = UsuarioModel.find();
  return usuarios;
};

const getUsuarioById = (idU) => {
  const usuario = UsuarioModel.findOne({ _id: idU });
  return usuario;
};
const getUsuarioByNombre = (nombreU) => {
  const usuario = UsuarioModel.find({ nombre: nombreU });
  return usuario;
};

const getUsuarioByUsuario = (usuarioU) => {
    const usuario = UsuarioModel.findOne({ usuario: usuarioU });
    return usuario;
  };

const createUsuario = async (data, pww) => {
  const { usuario, password, nombre, apellido, fechaNac, eliminado } = data;
  const nuevoU = {
    usuario,
    password: pww,
    nombre,
    apellido,
    edad: generarEdad(),
    fechaNac,
    eliminado: eliminado || false,
  };
  let resultado = await UsuarioModel.create(nuevoU);
  return resultado;
};

const generarEdad = () => {
  let aleatorio = Math.floor(Math.random() * 100);
  return aleatorio;
};

module.exports = {
  getUsuarios,
  getUsuarioById,
  getUsuarioByNombre,
  createUsuario,
  getUsuarioByUsuario
};
