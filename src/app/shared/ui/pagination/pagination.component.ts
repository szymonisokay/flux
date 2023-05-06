import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { pageSizeOptions } from '../../../../config/pagination.config';

@Component({
  selector: 'shared-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() total: number = 1;
  @Input() pageSize: number = 10;

  @Output() pageChanged = new EventEmitter<number>();

  pageSizeOptions = pageSizeOptions;

  onPageChange(page: number) {
    this.pageChanged.emit(page);

    document
      .querySelector('.content')
      ?.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
