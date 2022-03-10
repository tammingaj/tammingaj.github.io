import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[soundscape]'
})
export class SoundscapeDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.audio.play();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.audio.pause();
  }

  @Input() soundscape = '';
  @Input() loop = '';

  private audio: any = new Audio();

  constructor() {}

  ngOnInit() {
    this.audio.src = this.soundscape;
    this.audio.load();
    this.audio.loop = this.loop || true;
  }

}
