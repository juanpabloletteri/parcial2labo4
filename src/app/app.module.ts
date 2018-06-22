import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//SERVICIO HTTP PERSONALIZADO
import { MiHttpService } from './servicios/mi-http.service';
import { HttpModule } from '@angular/http';
//CLASES
import { Mascota } from './clases/mascota';
import { Usuario } from './clases/usuario';
//SERVICIOS
import { MascotaService } from './servicios/mascota.service';
import { UsuarioService } from './servicios/usuario.service';
//MODULO PRIME NG
import { PrimengModule } from './modulos/primeng/primeng.module';
//MODULO ROUTEO
import { RouterModule, Route, Routes } from '@angular/router';
//MODULO AUTENTICACION
import { AutenticacionService } from './servicios/autenticacion.service';
import { AppComponent } from './app.component';
//ROUTEO
const config: Routes = [
  {
    path: '',
    component: AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(config),
    HttpModule
  ],
  providers: [
    MiHttpService,
    AutenticacionService,
    Mascota,
    MascotaService,
    Usuario,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
