import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [CustomButtonComponent, TooltipComponent],
  imports: [CommonModule],
  exports: [CustomButtonComponent, TooltipComponent],
})
export class ButtonModuleModule {}
