import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-pagination-meta-data',
  templateUrl: './pagination-meta-data.component.html',
})
export class PaginationMetaDataComponent {
  @Input() total: number;
}
