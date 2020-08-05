import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoMainComponent } from './components/alumno-main/alumno-main.component';
import { AlumnoCardComponent } from './components/alumno-card/alumno-card.component';
import { MateriaFormComponent } from './components/materia-form/materia-form.component';
import { MatriculaFormComponent } from './components/matricula-form/matricula-form.component';
import { MaquinariaListComponent } from './components/maquinaria-list/maquinaria-list.component';
import { MaquinariaCardComponent } from './components/maquinaria-card/maquinaria-card.component';
import { MaquinariaFormComponent } from './components/maquinaria-form/maquinaria-form.component';
import { VinculacionListComponent } from './components/vinculacion-list/vinculacion-list.component';
import { VinculacionCardComponent } from './components/vinculacion-card/vinculacion-card.component';
import { VinculacionFormComponent } from './components/vinculacion-form/vinculacion-form.component';
import { PropietarioListComponent } from './components/propietario-list/propietario-list.component';
import { PropietarioCardComponent } from './components/propietario-card/propietario-card.component';
import { PropietarioFormComponent } from './components/propietario-form/propietario-form.component';
import { TiendaListComponent } from './components/tienda-list/tienda-list.component';
import { TiendaCardComponent } from './components/tienda-card/tienda-card.component';
import { TiendaFormComponent } from './components/tienda-form/tienda-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'alumnos', component: AlumnoMainComponent},
  {path: 'alumnos/:id', component: AlumnoCardComponent},
  {path: 'materias', component: MateriaFormComponent},
  {path: 'materias/:id', component: MateriaFormComponent},
  {path: 'matriculas', component: MatriculaFormComponent},
  {path: 'maquinaria/form', component: MaquinariaFormComponent},
  {path: 'maquinaria/form/:id', component: MaquinariaFormComponent},
  {path: 'maquinaria/list', component: MaquinariaListComponent},
  {path: 'maquinaria/card/:id', component: MaquinariaCardComponent},
  {path: 'vinculacion/form', component: VinculacionFormComponent},
  {path: 'vinculacion/form/:id', component: VinculacionFormComponent},
  {path: 'vinculacion/list', component: VinculacionListComponent},
  {path: 'vinculacion/card/:id', component: VinculacionCardComponent},
  {path: 'propietario/form', component: PropietarioFormComponent},
  {path: 'propietario/form/:id', component: PropietarioFormComponent},
  {path: 'propietario/list', component: PropietarioListComponent},
  {path: 'propietario/card/:id', component: PropietarioCardComponent},
  {path: 'tienda/form', component: TiendaFormComponent},
  {path: 'tienda/form/:id', component: TiendaFormComponent},
  {path: 'tienda/list', component: TiendaListComponent},
  {path: 'tienda/card/:id', component: TiendaCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
