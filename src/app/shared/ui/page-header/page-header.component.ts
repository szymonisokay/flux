import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-page-header',
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input() title: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  onGoBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
