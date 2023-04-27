import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises.component';
import { authGuard } from '../../../shared/guards/auth.guard';

const routes: Route[] = [
  {
    path: 'exercises',
    component: ExercisesComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ExercisesRoutingModule {}
