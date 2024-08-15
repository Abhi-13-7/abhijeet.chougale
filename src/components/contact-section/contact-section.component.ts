import { Component, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent {
  year = new Date();
  isMobileView: boolean = false;
  screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.getScreenSize();
  }

  private getScreenSize() {
    this.screenWidth = window.innerWidth;
    this.screenWidth < 615
      ? (this.isMobileView = true)
      : (this.isMobileView = false);
  }

  public sendEmail(contactForm: NgForm) {
    if (contactForm.valid) {
      const emailParams = {
        from_name: contactForm.value.from_name,
        message: contactForm.value.message,
        reply_to: contactForm.value.reply_to,
        user_email: 'abhichougale13.7@gmail.com',
      };

      emailjs
        .send(
          'service_v6yhnjw',
          'template_84zohb3',
          emailParams,
          'EPiLssGape70ZtUjK'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            alert('Email sent successfully!');
            contactForm.reset();
          },
          (error) => {
            console.log(error.text);
            alert('There was an error sending the email.');
          }
        );
    }
    return false;
  }
}
