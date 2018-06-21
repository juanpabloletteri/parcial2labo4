import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private miUsuario: Usuario) { }
}
