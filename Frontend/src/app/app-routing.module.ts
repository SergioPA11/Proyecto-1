import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-alumno',
    loadChildren: () => import('./add-alumno/add-alumno.module').then( m => m.AddAlumnoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'edit-datos',
    loadChildren: () => import('./edit-datos/edit-datos.module').then( m => m.EditDatosPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./datos/datos.module').then( m => m.DatosPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'modal-school',
    loadChildren: () => import('./modal-school/modal-school.module').then( m => m.ModalSchoolPageModule)
  },
  {
    path: 'modal-course',
    loadChildren: () => import('./modal-course/modal-course.module').then( m => m.ModalCoursePageModule)
  },
  {
    path: 'tabs-navigator',
    loadChildren: () => import('./tabs-navigator/tabs-navigator.module').then( m => m.TabsNavigatorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
