import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineerHomePageComponent } from './engineer-home-page/engineer-home-page.component';
import { ProgrammerHomePageComponent } from './programmer-home-page/programmer-home-page.component';
import { StudentHomePageComponent } from './student-home-page/student-home-page.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { from } from 'rxjs';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: BasicFormComponent
  },
  {
    path: 'engineer',
    component: EngineerHomePageComponent
  },
  {
    path: 'programmer',
    component: ProgrammerHomePageComponent
  },
  {
    path: 'student',
    component: StudentHomePageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
