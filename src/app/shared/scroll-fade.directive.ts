import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '.scrollFade'
})

export class ScrollFade {
  @HostBinding('style.display') componentDisplay = "box";
  @HostListener('document:scroll') onScroll() {
    this.componentDisplay = "none";
  }
}
