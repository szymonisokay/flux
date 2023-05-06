import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-pagination-meta-data',
  templateUrl: './pagination-meta-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationMetaDataComponent {
  @Input() total: number;
}
