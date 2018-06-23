import { Component, OnInit, Input } from '@angular/core';
import { Mascota } from '../../clases/mascota';
import { Turno } from '../../clases/turno';
import { TurnoService } from '../../servicios/turno.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.component.html',
  styleUrls: ['./turno.component.css']
})
export class TurnoComponent implements OnInit {

  @Input() unaMascota: Mascota;

  constructor(private miTurno: Turno, private miServicioTurno: TurnoService) { }

  ngOnInit() {
  }

}
