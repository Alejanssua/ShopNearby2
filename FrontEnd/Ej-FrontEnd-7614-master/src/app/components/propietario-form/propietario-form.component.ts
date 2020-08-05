import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Propietario } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/services/propietario.service';
import { faUser, faFileAlt, faHashtag, faBriefcase, faUserTie, faUserPlus, faSave, faTimes  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-propietario-form',
  templateUrl: './propietario-form.component.html',
  styleUrls: ['./propietario-form.component.css']
})
export class PropietarioFormComponent implements OnInit {

  faUser = faUser;
  faFileAlt = faFileAlt;
  faHashtag  = faHashtag ;
  faBriefcase = faBriefcase;
  faUserTie = faUserTie;
  faUserPlus =faUserPlus;
  faSave = faSave;
  faTimes = faTimes;

  title = "Nuevo registro de propietario";

  propietario : Propietario = new Propietario();
  
  @Output() flagToReload = new EventEmitter<Boolean>();

  form: FormGroup;
  submitted: boolean = false;  
  
  constructor(private propietarioService: PropietarioService, 
    private formBuilder: FormBuilder, 
    private activatedRoute : ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Nombres: ['', [Validators.required]],
      Apellidos: ['', [Validators.required]],
      Cedula: ['', [Validators.required, Validators.minLength(10)]],
      N_Telefono: [''],           
    });  

    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.propietarioService.retrieve(params['id']).subscribe(
              result =>
              { 
                this.propietario = result;
                this.title = "Actualizando el registro de " + this.propietario.Nombres;
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

    console.log(this.propietario);

    this.propietarioService.save(this.propietario).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.flagToReload.emit(true);   
        this.router.navigate(['propietario/list']);

      }
    );
  }

  onReset() : void {   
    this.submitted = false;
    this.form.reset();
    this.propietario = new Propietario();   
  }


}
