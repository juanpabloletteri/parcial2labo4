import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miHttp: MiHttpService, private miUsuario: Usuario) { }

  /////////////////////////
  setIdUsuario() {
    this.miUsuario.id_usuario;
  }
  setMail(data) {
    this.miUsuario.mail = data;
  }
  setPassword(data) {
    this.miUsuario.password = data;
  }
  setNombre(data) {
    this.miUsuario.nombre = data;
  }
  setApellido(data) {
    this.miUsuario.apellido = data;
  }
  setTipo(data) {
    this.miUsuario.tipo = data;
  }
  /////////////////////////
  getIdUsuario() {
    return this.miUsuario.mail;
  }
  getMail() {
    return this.miUsuario.mail;
  }
  getPassword() {
    return this.miUsuario.password;
  }
  getNombre() {
    return this.miUsuario.nombre;
  }
  getApellido() {
    return this.miUsuario.apellido;
  }
  getTipo() {
    return this.miUsuario.tipo;
  }
  ///////////////////////////////
  traerTodosLosUsuarios(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosUsuarios')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  agregarUsuario(data): Promise<any> {
    return this.miHttp.httpPostP('agregarUsuario', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerUsuarioPorId(data): Promise<any> {
    return this.miHttp.httpPostP('traerUsuarioPorId', { id: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  modificarUsuario(data): Promise<any> {
    return this.miHttp.httpPostP('modificarUsuario', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  borrarUsuario(data): Promise<any> {
    return this.miHttp.httpPostP('borrarUsuario', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }

}
