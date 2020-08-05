import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/services/propietario.service';
import { faPlus, faEye, faPencilAlt, faTrash, faListAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-propietario-list',
  templateUrl: './propietario-list.component.html',
  styleUrls: ['./propietario-list.component.css']
})
export class PropietarioListComponent implements OnInit {

  faEye = faEye;
  faPlus = faPlus;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faListAlt = faListAlt;

  propietarios : Propietario[];

  constructor(private propietarioService : PropietarioService) { }

  ngOnInit(): void {
    this.list();
  }

  list() : void {
    this.propietarioService.list().subscribe(result => this.propietarios = result);
  }

  
  delete(a:Propietario) :void {
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El registro de " + a.Nombres + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.propietarioService.delete(a).subscribe(
          result => {
            console.log(result);
            this.list();
          }
        )
      }
    })
  }


}
