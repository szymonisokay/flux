import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() searchTerm: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(e: HTMLInputElement) {
    this.searchChange.emit(e.value);
  }
}
