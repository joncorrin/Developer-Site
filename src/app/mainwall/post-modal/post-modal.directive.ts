import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appPostModal]'
})
export class PostModalDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    console.log('btn clicked');
    this.isOpen = !this.isOpen;

  }
}
