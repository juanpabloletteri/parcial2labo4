import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Turno } from '../clases/turno';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private miHttp: MiHttpService, private miTurno: Turno) { }

  /////////////////////////
  setIdTurno(data) {
    this.miTurno.id_turno = data;
  }
  setIdMascota(data) {
    this.miTurno.id_mascota = data;
  }
  setFecha(data) {
    this.miTurno.fecha = data;
  }
  setObservaciones(data) {
    this.miTurno.observaciones = data;
  }
  /////////////////////////
  getIdTurno() {
    return this.miTurno.id_turno;
  }
  getIdMascota() {
    return this.miTurno.id_mascota;
  }
  getFecha() {
    return this.miTurno.fecha;
  }
  getObservaciones() {
    return this.miTurno.observaciones;
  }
  ///////////////////////////////
  traerTodosLosTurnos(): Promise<any> {
    return this.miHttp.httpGetP('traerTodosLosTurnos')
      .then(data => {
        console.log(data);
        return data;
      })
  }
  agregarTurno(data): Promise<any> {
    return this.miHttp.httpPostP('agregarTurno', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerTurnoPorIdDuenio(data): Promise<any> {
    return this.miHttp.httpPostP('traerTurnoPorIdDuenio', { id: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerTurnosPorMascota(data): Promise<any> {
    return this.miHttp.httpPostP('traerTurnosPorMascota', { id: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  traerTurnosPorTipoDeMascota(data): Promise<any> {
    return this.miHttp.httpPostP('traerTurnosPorTipoDeMascota', { tipo: data })
      .then(data => {
        console.log(data);
        return data;
      })
  }
  modificarTurno(data): Promise<any> {
    return this.miHttp.httpPostP('modificarTurno', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }
  borrarTurno(data): Promise<any> {
    return this.miHttp.httpPostP('borrarTurno', data)
      .then(data => {
        console.log(data);
        return data;
      })
  }

}
