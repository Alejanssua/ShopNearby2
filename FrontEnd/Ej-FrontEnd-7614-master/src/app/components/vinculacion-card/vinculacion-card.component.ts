import { Component, OnInit } from '@angular/core';
import { Vinculacion } from 'src/app/models/vinculacion';
import { VinculacionService } from 'src/app/services/vinculacion.service';
import { ActivatedRoute } from '@angular/router';
import { faListAlt, faUser, faFileAlt, faHashtag, faBriefcase, faUserTie  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vinculacion-card',
  templateUrl: './vinculacion-card.component.html',
  styleUrls: ['./vinculacion-card.component.css']
})
export class VinculacionCardComponent implements OnInit {

  faUser = faUser;
  faFileAlt = faFileAlt;
  faHashtag  = faHashtag ;
  faBriefcase = faBriefcase;
  faUserTie = faUserTie;
  faListAlt = faListAlt;

  vinculacion : Vinculacion = new Vinculacion();

  constructor(private vinculacionService : VinculacionService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.vinculacionService.retrieve(params['id']).subscribe(
            result => this.vinculacion = result
          )
        }
      }
    );
  }

}

