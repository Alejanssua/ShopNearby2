import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoService } from './services/alumno.service';
import { ServiceInterceptor } from './services/service.interceptor';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoListComponent } from './components/alumno-main/alumno-list/alumno-list.component';
import { AlumnoFormComponent } from './components/alumno-main/alumno-form/alumno-form.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MasmasPipe } from './shared/pipes/masmas.pipe';
import { SexdescPipe } from './shared/pipes/sexdesc.pipe';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { MaquinariaFormComponent } from './components/maquinaria-form/maquinaria-form.component';
import { MaquinariaCardComponent } from './components/maquinaria-card/maquinaria-card.component';
import { MaquinariaListComponent } from './components/maquinaria-list/maquinaria-list.component';
import { VinculacionCardComponent } from './components/vinculacion-card/vinculacion-card.component';
import { VinculacionFormComponent } from './components/vinculacion-form/vinculacion-form.component';
import { VinculacionListComponent } from './components/vinculacion-list/vinculacion-list.component';
import { PropietarioCardComponent } from './components/propietario-card/propietario-card.component';
import { PropietarioFormComponent } from './components/propietario-form/propietario-form.component';
import { PropietarioListComponent } from './components/propietario-list/propietario-list.component';
import { TiendaCardComponent } from './components/tienda-card/tienda-card.component';
import { TiendaFormComponent } from './components/tienda-form/tienda-form.component';
import { TiendaListComponent } from './components/tienda-list/tienda-list.component';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,    
    AlumnoMainComponent,
    AlumnoListComponent,
    AlumnoFormComponent,
    AlumnoCardComponent,
    MasmasPipe,
    SexdescPipe,
    MateriaFormComponent,
    MatriculaFormComponent,
    MaquinariaFormComponent,
    MaquinariaCardComponent,
    MaquinariaListComponent,
    VinculacionCardComponent,
    VinculacionFormComponent,
    VinculacionListComponent,    
    PropietarioCardComponent,
    PropietarioFormComponent,
    PropietarioListComponent,
    TiendaCardComponent,
    TiendaFormComponent,
    TiendaListComponent,
    InicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule   
  ],
  providers: [
    AlumnoService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue : 'es-EC'
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
