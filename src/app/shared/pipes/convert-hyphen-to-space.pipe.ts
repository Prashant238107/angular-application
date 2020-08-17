import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertHyphenToSpaces',
})
export class ConvertHyphenToSpaces implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
