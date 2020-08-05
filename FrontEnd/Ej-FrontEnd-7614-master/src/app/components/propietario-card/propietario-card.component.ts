import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/services/propietario.service';
import { ActivatedRoute } from '@angular/router';
import { faListAlt, faUser, faFileAlt, faHashtag, faBriefcase, faUserTie  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-propietario-card',
  templateUrl: './propietario-card.component.html',
  styleUrls: ['./propietario-card.component.css']
})
export class PropietarioCardComponent implements OnInit {

  faUser = faUser;
  faFileAlt = faFileAlt;
  faHashtag  = faHashtag ;
  faBriefcase = faBriefcase;
  faUserTie = faUserTie;
  faListAlt = faListAlt;

  propietario : Propietario = new Propietario();

  constructor(private propietarioService : PropietarioService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.propietarioService.retrieve(params['id']).subscribe(
            result => this.propietario = result
          )
        }
      }
    );
  }

}

