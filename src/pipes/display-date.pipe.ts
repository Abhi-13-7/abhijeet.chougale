import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'DisplayDate',
})
export class DisplayDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value?: Date): string {
    const today = new Date();
    if (value?.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
      return 'Today';
    } else {
      return this.datePipe.transform(value, 'MMM yy') || '';
    }
  }
}
