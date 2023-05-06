import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'shared-loading-cards',
  templateUrl: './loading-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingCardsComponent {
  @Input() set numberOfCards(card: number) {
    const cards = [];

    for (let i = 0; i < card; i++) {
      cards.push(i);
    }

    this.cards$.next(cards);
  }

  cards$ = new BehaviorSubject<number[]>([]);
}
