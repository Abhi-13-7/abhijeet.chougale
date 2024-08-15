import { Component, ElementRef } from '@angular/core';
import { companies } from 'src/constants/work-experience.constants';
import { Company } from 'src/models/work-experience.models';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css'],
})
export class EmploymentDetailsComponent {
  private myElement: HTMLElement;
  companies: Company[] = companies;
  expandedCompanies: { [key: string]: boolean } = {};
  expandedDescriptions: { [key: string]: boolean } = {};

  constructor(private elementRef: ElementRef) {
    this.myElement = this.elementRef.nativeElement;
  }

  toggleExpand(companyName: string) {
    this.expandedCompanies[companyName] = !this.expandedCompanies[companyName];
  }

  toggleDescription(projectTitle: string) {
    const element = document.getElementById('description-text');
    if (element) {
      element.style.webkitLineClamp = 'vertical';
      element.style.overflow = '';
    }
    this.expandedDescriptions[projectTitle] =
      !this.expandedDescriptions[projectTitle];
  }

  isCompanyExpanded(companyName: string): boolean {
    return !!this.expandedCompanies[companyName];
  }

  isDescriptionExpanded(projectTitle: string): boolean {
    return !!this.expandedDescriptions[projectTitle];
  }

  openURLInNewWindow(URL: string) {
    window.open(
      URL,
      '_blank',
      'toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400'
    );
  }
}
