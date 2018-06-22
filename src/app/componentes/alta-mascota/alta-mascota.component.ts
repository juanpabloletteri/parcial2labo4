import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Mascota } from '../../clases/mascota';
import { MascotaService } from '../../servicios/mascota.service';
import { SelectItem } from 'primeng/api';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alta-mascota',
  templateUrl: './alta-mascota.component.html',
  styleUrls: ['./alta-mascota.component.css']
})
export class AltaMascotaComponent implements OnInit {

  userform: FormGroup;
  types: SelectItem[];

  constructor(private fb: FormBuilder, private miMascota: Mascota, private miServicioMascota: MascotaService) {
    this.types = [
      { label: 'Gato', value: 0, icon: 'fa fa-fw fa-cc-paypal' },
      { label: 'Perro', value: 1, icon: 'fa fa-fw fa-cc-visa' }
    ];
  }

  ngOnInit() {
    this.userform = this.fb.group({
      'nombre': new FormControl('', Validators.required),
      'raza': new FormControl('', Validators.required),
      'color': new FormControl('', Validators.required),
      'edad': new FormControl('', Validators.required),
      'tipo': new FormControl('', Validators.required)
    });
  }

  onSubmit(value: string) {
    this.miMascota.nombre = this.userform.value.nombre;
    this.miMascota.raza = this.userform.value.raza;
    this.miMascota.color = this.userform.value.color;
    this.miMascota.edad = this.userform.value.edad;
    this.miMascota.tipo = this.userform.value.tipo;
    console.log(this.miMascota);
  }

}