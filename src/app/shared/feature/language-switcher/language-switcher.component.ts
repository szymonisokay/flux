import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NzSegmentedOption, NzSegmentedOptions } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'shared-language-switcher',
  templateUrl: './language-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent {
  @ViewChild('temp', { static: true, read: TemplateRef })
  templateRef!: TemplateRef<{
    $implicit: NzSegmentedOption;
    index: number;
  }>;

  languageOptions: NzSegmentedOptions = [
    {
      label: 'english',
      value: 'en',
      useTemplate: true,
    },
    {
      label: 'polish',
      value: 'pl',
      useTemplate: true,
    },
  ];

  @Input() currentLangIndex: number | null = 0;
  @Output() emitLanguge = new EventEmitter<number>();

  onLanguageChange(index: number) {
    this.emitLanguge.emit(index);
  }
}
