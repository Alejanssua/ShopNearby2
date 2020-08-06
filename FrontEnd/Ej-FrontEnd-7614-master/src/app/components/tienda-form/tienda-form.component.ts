import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tienda } from 'src/app/models/tienda';
import { TiendaService } from 'src/app/services/tienda.service';
import { faListAlt, faClock, faGenderless, faMapMarkerAlt, faPhone, faStore, faIdCard, faUserPlus, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tienda-form',
  templateUrl: './tienda-form.component.html',
  styleUrls: ['./tienda-form.component.css']
})
export class TiendaFormComponent implements OnInit {

  faListAlt = faListAlt;
  faClock = faClock; 
  faGenderless = faGenderless;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faStore = faStore;
  faIdCard = faIdCard;
  faUserPlus = faUserPlus; 
  faSave = faSave;
  faTimes = faTimes; 

  title = "Nuevo registro de tienda";

  tienda : Tienda = new Tienda();

  @Output() flagToReload = new EventEmitter<Boolean>();

  form: FormGroup;
  submitted: boolean = false;  
  
  constructor(private tiendaService: TiendaService, 
    private formBuilder: FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Nombre: ['', [Validators.required]],
      R_Social: [''],
      N_Telefono: [''],
      Direccion: ['', [Validators.required]],
      Estado: [''],
      Horario: [''],     
    });  

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.tiendaService.retrieve(params['id']).subscribe(
              result =>
              { 
                this.tienda = result;
                this.title = "Actualizando el registro de " + this.tienda.Nombre;
              }
          )
        }
      }
    );
  
  }

  get f(){
    return this.form.controls;
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    console.log(this.tienda);

    this.tiendaService.save(this.tienda).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.flagToReload.emit(true);   
        this.router.navigate(['tienda/list']);

      }
    );
  }

  onReset() : void {   
    this.submitted = false;
    this.form.reset();
    this.tienda = new Tienda();   
  }


}
