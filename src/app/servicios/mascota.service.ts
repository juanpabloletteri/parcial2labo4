import { Injectable } from '@angular/core';
import { Mascota } from '../clases/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor(private miMascota: Mascota) { }
}
