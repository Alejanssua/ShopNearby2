import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vinculacion } from 'src/app/models/vinculacion';
import { VinculacionService } from 'src/app/services/vinculacion.service';
import { faUser, faFileAlt, faHashtag, faBriefcase, faUserTie, faUserPlus, faSave, faTimes  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vinculacion-form',
  templateUrl: './vinculacion-form.component.html',
  styleUrls: ['./vinculacion-form.component.css']
})
export class VinculacionFormComponent implements OnInit {

  faUser = faUser;
  faFileAlt = faFileAlt;
  faHashtag  = faHashtag ;
  faBriefcase = faBriefcase;
  faUserTie = faUserTie;
  faUserPlus =faUserPlus;
  faSave = faSave;
  faTimes = faTimes;

  title = "Nuevo registro de vinculacion";

  vinculacion : Vinculacion = new Vinculacion();
  
  @Output() flagToReload = new EventEmitter<Boolean>();

  form: FormGroup;
  submitted: boolean = false;  
  
  constructor(private vinculacionService: VinculacionService, 
    private formBuilder: FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre_proyecto: ['', [Validators.required]],
      codigo_proyecto: ['', [Validators.required, Validators.minLength(4)]],
      entidad_beneficiaria: [''],      
      nombre_coordinador: [''],      
      nombre_estudiante: [''],      
    });  

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.vinculacionService.retrieve(params['id']).subscribe(
              result =>
              { 
                this.vinculacion = result;
                this.title = "Actualizando el registro de " + this.vinculacion.nombre_proyecto;
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

    console.log(this.vinculacion);

    this.vinculacionService.save(this.vinculacion).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.flagToReload.emit(true);   
        this.router.navigate(['vinculacion/list']);

      }
    );
  }

  onReset() : void {   
    this.submitted = false;
    this.form.reset();
    this.vinculacion = new Vinculacion();   
  }


}
