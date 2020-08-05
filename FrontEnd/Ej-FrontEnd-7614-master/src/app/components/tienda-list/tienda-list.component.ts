import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/models/tienda';
import { TiendaService } from 'src/app/services/tienda.service';
import { faPlus, faEye, faPencilAlt, faTrash, faListAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tienda-list',
  templateUrl: './tienda-list.component.html',
  styleUrls: ['./tienda-list.component.css']
})
export class TiendaListComponent implements OnInit {

  faEye = faEye;
  faPlus = faPlus;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faListAlt = faListAlt;

  tiendas : Tienda[];

  constructor(private tiendaService : TiendaService) { }

  ngOnInit(): void {
    this.list();
  }

  list() : void {
    this.tiendaService.list().subscribe(result => this.tiendas = result);
  }

  
  delete(a:Tienda) :void {
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + a.Nombre + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.tiendaService.delete(a).subscribe(
          result => {
            console.log(result);
            this.list();
          }
        )
      }
    })
  }


}
