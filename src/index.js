// Para ver un listado de chistes de Chuck
// line:3-4
// import { init } from "./js/chistes-page";
// init();

// Obtiene los usuarios por consola
// line:8-9
// import { obtenerChiste, obtenerUsuarios } from "./js/http-provider";
// obtenerUsuarios().then(console.log);

// Muestra una lista de usuarios como ejemplo con un id, email, nombre y foto
// line:13-14
// import { init } from "./js/usuarios-page";
// init();

// Ejercicios de CRUD
// Para obtener un usuario
// line:19-20
// import * as CRUD from "./js/crud-provider";
// CRUD.getUsuario(1).then(console.log);

// Ejercicios de CRUD
// Para crear un usuario
// line:26-30
// Temario:146
// import * as CRUD from "./js/crud-provider";
// CRUD.crearUsuario({
//   name: "Paco",
//   job: "Electrónico",
// }).then(console.log);

// Ejercicios de CRUD
// Para actualizar un usuario
// line:37-40
// Temario:147
// import * as CRUD from "./js/crud-provider";
// CRUD.actualizarUsuario(1, {
//   name: "Yaz",
//   job: "Integradora Social",
// }).then(console.log);

// Ejercicios de CRUD
// Para borrar un usuario
// line:37-40
// Temario:147
// import * as CRUD from "./js/crud-provider";
// CRUD.borrarUsuario(1).then(console.log);

// Ejercicio para subir imagenes y verlas
// line:52-
// Temario: 150
import { init } from "./js/archivos-page";
init();
