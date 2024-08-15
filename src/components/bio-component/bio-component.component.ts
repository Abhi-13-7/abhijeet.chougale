import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio-component',
  templateUrl: './bio-component.component.html',
  styleUrls: ['./bio-component.component.css'],
})
export class BioComponentComponent implements OnInit {
  screenWidth: number = 0;
  isMobileView: boolean = false;

  ngOnInit() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.getScreenSize();
  }

  private getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenWidth < 600
      ? (this.isMobileView = true)
      : (this.isMobileView = false);
  }

  downloadResume() {
    //hardcoded resume download link from drive
    window.open(
      'https://drive.google.com/uc?export=download&id=1MNmtfXP40OEl-jBNin9aTneCoQVjtBI0'
    );
    return false;
  }
}
