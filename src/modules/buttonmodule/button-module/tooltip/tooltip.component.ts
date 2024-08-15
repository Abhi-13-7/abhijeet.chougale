import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent {
  @Input() tooltipText: string = '';
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'top';

  isVisible: boolean = false;
  private timeoutId: any;
  delay: number = 750;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.timeoutId = setTimeout(() => {
      this.isVisible = true;
    }, this.delay);
  }

  @HostListener('mouseleave') onMouseLeave() {
    clearTimeout(this.timeoutId);
    this.isVisible = false;
  }
}
