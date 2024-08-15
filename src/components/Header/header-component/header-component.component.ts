import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent {
  public mobileMenuVisible = false;
  constructor() {}
  public toggleMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }
}
