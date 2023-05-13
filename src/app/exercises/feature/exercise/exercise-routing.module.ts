import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ExerciseComponent } from './exercise.component';
import { authGuard } from '../../../shared/guards/auth.guard';

const routes: Route[] = [
  {
    path: 'exercises/:id',
    component: ExerciseComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ExerciseRoutingModule {}
