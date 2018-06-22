import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../clases/mascota';
import { MascotaService } from '../../servicios/mascota.service';
import { Usuario } from '../../clases/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  cols: any[];
  datosTabla: any = null;
  titulo: string;
  mascotaSeleccionada: Mascota;

  constructor(private miMascota: Mascota, private miServicioMascota: MascotaService,
    private miUsuario: Usuario, private miServicioUsuario: UsuarioService) { }

  ngOnInit() {
    this.miServicioMascota.traerTodasLasMascotas()
      .then(data => {
        this.datosTabla = data;
      })
    /////////
    this.titulo = 'MASCOTAS';
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'raza', header: 'Raza' },
      { field: 'color', header: 'Color' },
      { field: 'edad', header: 'Edad' },
      { field: 'tipo', header: 'Tipo' }
    ];
  }

  onRowSelect(event) {
    this.miServicioUsuario.traerUsuarioPorId(this.mascotaSeleccionada.id_duenio)
      .then(data => {
        //console.log("data: " + data)
        this.miUsuario = data[0];
      })

  }

}
