import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { AdvancedSearchModel } from '../../interfaces/advanced-search.interface';

@Component({
  selector: 'ui-advanced-search-tags',
  templateUrl: './advanced-search-tags.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvancedSearchTagsComponent {
  @Input() tags: AdvancedSearchModel[];

  @Output() removeSearchCriteria = new EventEmitter<AdvancedSearchModel>();

  onTagClose(tag: AdvancedSearchModel) {
    this.removeSearchCriteria.emit({ ...tag, value: '' });
  }
}
