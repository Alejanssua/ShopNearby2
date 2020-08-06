import { Component, OnInit } from '@angular/core';
import { Lugar } from 'src/app/models/lugar';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mapa: mapboxgl.Map;
  lugares: Lugar[] = [];
  markersMapbox: { [id:string]: mapboxgl.Marker } = {}

  constructor() { }

  ngOnInit(): void {
    this.crearMapa();
  }


  crearMapa() {
    
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiYWxlamFuc3N1YSIsImEiOiJja2RocGZ4ZnQwMXp2MnVrNmYzbnUxdTJkIn0.np1HcfG5dj1yjbvPyQk7Xg';

    this.mapa = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-78.5999036,-1.0397173],
      zoom: 10
    });

    //  for( const [id, marcador] of Object.entries(this.lugares) ) {
    //      this.agregarMarcador( marcador );
    //  }

  }

  // agregarMarcador( marcador: Lugar ) {

  //   const h2 = document.createElement('h2');
  //   h2.innerText = marcador.nombre;

  //   const btnBorrar = document.createElement('button');
  //   btnBorrar.innerText = 'Borrar';

  //   const div = document.createElement('div');
  //   div.append(h2, btnBorrar);


  //   const customPopup = new mapboxgl.Popup({
  //     offset: 25,
  //     closeOnClick: false
  //   }).setDOMContent( div );

  //   const marker = new mapboxgl.Marker({
  //     draggable: true,
  //     color: marcador.color
  //   })
  //   .setLngLat([marcador.lng, marcador.lat])
  //   .setPopup( customPopup )
  //   .addTo( this.mapa );


  //   marker.on('drag', () => {
  //     const lngLat = marker.getLngLat();

  //     const nuevoMarcador = {
  //       id: marcador.id,
  //       ...lngLat
  //     }
  //   });

  //   btnBorrar.addEventListener( 'click', () => {
  //     marker.remove();
  //   });

  //   this.markersMapbox[ marcador.id ] = marker;

  // }

  // crearMarcador() {

  //   const customMarker: Lugar = {
  //     id: new Date().toISOString(),
  //     lng: -75.75512993582937, 
  //     lat: 45.349977429009954,
  //     nombre: 'Sin Nombre',
  //     color: '#' + Math.floor(Math.random()*16777215).toString(16) 
  //   }

  //   this.agregarMarcador( customMarker );

  //   // emitir marcador-nuevo
  //   //this.wsService.emit( 'marcador-nuevo', customMarker );

  // }
}
