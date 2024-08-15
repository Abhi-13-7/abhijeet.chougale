import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponentComponent } from 'src/components/Header/header-component/header-component.component';
import { BioComponentComponent } from 'src/components/bio-component/bio-component.component';
import { CommonModule, DatePipe } from '@angular/common';
import { DisplayDatePipe } from 'src/pipes/display-date.pipe';
import { ButtonModuleModule } from 'src/modules/buttonmodule/button-module/button-module.module';
import { SocialMediaIconsComponent } from 'src/containers/social-media-icons/social-media-icons.component';
import { EmploymentDetailsComponent } from 'src/components/employment-details/employment-details.component';
import { TechStackComponent } from 'src/containers/tech-stack/tech-stack.component';
import { FormsModule } from '@angular/forms';
import { ContactSectionComponent } from 'src/components/contact-section/contact-section.component';
import { CertificationsComponent } from 'src/components/certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BioComponentComponent,
    SocialMediaIconsComponent,
    EmploymentDetailsComponent,
    TechStackComponent,
    ContactSectionComponent,
    CertificationsComponent,
    DisplayDatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    ButtonModuleModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
