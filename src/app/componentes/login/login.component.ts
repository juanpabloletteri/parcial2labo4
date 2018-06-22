import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: FormGroup;

  constructor(private fb: FormBuilder, private miUsuario: Usuario, private miServicioUsuario: UsuarioService, public rute: Router) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'mail': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit(value: string) {
    this.miUsuario.mail = this.userform.value.mail;
    this.miUsuario.password = this.userform.value.password;
    alert("hacer logica de login");
  }

}
