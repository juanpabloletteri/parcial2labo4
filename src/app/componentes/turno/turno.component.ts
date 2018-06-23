import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from '../../clases/mascota';
import { Turno } from '../../clases/turno';
import { TurnoService } from '../../servicios/turno.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  @Input() unaMascota: Mascota;
  date: Date;
  observaciones: string;
  constructor(private miTurno: Turno, private miServicioTurno: TurnoService) { }

  ngOnInit() {
  }

  confirmarTurno() {
    this.miTurno.fecha = this.date;
    this.miTurno.id_mascota = this.unaMascota.id_mascota;
    this.miTurno.observaciones = this.observaciones;

    this.miServicioTurno.agregarTurno(this.miTurno)
      .then(data => {
        swal(
          'Felicidades!',
          'Turno generado con exito para ' + this.unaMascota.nombre + "!",
          'success'
        )
      })
  }

}
