import { Component, Input } from '@angular/core';

type SplitRatio = 'split-50' | 'split-33' | 'split-25' | 'split-75' | 'split-66';
type SplitDirection = 'horizontal' | 'vertical';

@Component({
  selector: 'app-split-card',
  templateUrl: './split-card.component.html',
  styleUrls: ['./split-card.component.scss']
})
export class SplitCardComponent {
  @Input() public splitRatio: SplitRatio = 'split-50';
  @Input() public splitDirection: SplitDirection = 'horizontal';

  get splitClass(): string {
    return `${this.splitRatio}-${this.splitDirection}`;
  }
}
