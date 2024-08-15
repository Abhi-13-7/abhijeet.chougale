import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent {
  @Input() buttonName: string = '';
  @Input() iconClass: string = '';
  @Input() disabled = false;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent): void {
    this.setPosition(event);
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut(event: MouseEvent): void {
    this.setPosition(event);
  }

  private setPosition(event: MouseEvent): void {
    const button = event.target as HTMLElement;
    const span = button.querySelector('span') as HTMLElement;
    const relX = event.offsetX;
    const relY = event.offsetY;
    span.style.top = `${relY}px`;
    span.style.left = `${relX}px`;
  }
}
