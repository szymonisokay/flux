import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(e: HTMLInputElement) {
    this.searchChange.emit(e.value);
  }
}
