import { Component } from '@angular/core';
import { certifications } from 'src/constants/certification.constants';
import { certificate } from 'src/models/certification.model';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
})
export class CertificationsComponent {
  cards: certificate[] = [];
  path = '../../assets/certifications/';

  constructor() {
    this.cards = certifications;
  }

  openURLInNewWindow(URL: string) {
    window.open(
      URL,
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400'
    );
    return false;
  }
}
