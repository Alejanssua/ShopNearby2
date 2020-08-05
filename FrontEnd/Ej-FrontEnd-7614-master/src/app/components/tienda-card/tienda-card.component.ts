import { Component, OnInit } from '@angular/core';
import { Tienda } from 'src/app/models/tienda';
import { TiendaService } from 'src/app/services/tienda.service';
import { ActivatedRoute } from '@angular/router';
import { faListAlt, faUser, faFileAlt, faHashtag, faBriefcase, faUserTie  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tienda-card',
  templateUrl: './tienda-card.component.html',
  styleUrls: ['./tienda-card.component.css']
})
export class TiendaCardComponent implements OnInit {

  faUser = faUser;
  faFileAlt = faFileAlt;
  faHashtag  = faHashtag ;
  faBriefcase = faBriefcase;
  faUserTie = faUserTie;
  faListAlt = faListAlt;

  tienda : Tienda = new Tienda();

  constructor(private tiendaService : TiendaService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.tiendaService.retrieve(params['id']).subscribe(
            result => this.tienda = result
          )
        }
      }
    );
  }

}

