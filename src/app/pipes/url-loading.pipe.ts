import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlLoading'
})
export class UrlLoadingPipe implements PipeTransform {

  // helper function to hide url while loading
  transform(value:string): string {
    const urlEx = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    return urlEx.test(value) ? "" : value;
  }
}
