import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ui-exercise-no-data',
  templateUrl: './exercise-no-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseNoDataComponent {
  @Input() showError: boolean = false;
  @Input() showNoData: boolean = false;
  @Input() fullHeight: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
