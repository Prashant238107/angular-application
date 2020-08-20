import { ConvertHyphenToSpaces } from './pipes/convert-hyphen-to-space.pipe';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [StarComponent, ConvertHyphenToSpaces],
  exports: [StarComponent, CommonModule, FormsModule, ConvertHyphenToSpaces],
})
export class SharedModule {}
