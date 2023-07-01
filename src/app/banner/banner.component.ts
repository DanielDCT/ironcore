import { Component, EventEmitter, Output } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; // ng add @ng-bootstrap/ng-bootstrap

@Component({
selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  @Output() scrollEvent = new EventEmitter<string>();

  scrollToComponent(elementId: string): void {
    this.scrollEvent.emit(elementId);
  }
}
