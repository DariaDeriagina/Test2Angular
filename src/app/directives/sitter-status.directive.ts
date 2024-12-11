import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appSitterStatus]'
})
export class SitterStatusDirective implements OnChanges {
  @Input('appSitterStatus') available!: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.updateStatus();
  }

  private updateStatus() {
    this.renderer.setStyle(this.el.nativeElement, 'padding', '0.2rem 0.5rem');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#fff');

    if (this.available) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
      this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Available');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
      this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Unavailable');
    }
  }
}
