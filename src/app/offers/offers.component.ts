import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {
span1Content:string="عروض خاصة لفترة محدودة"
h2Content:string="باقات اكاديمية الذّكر"

constructor(private viewportScroller: ViewportScroller) {}

  scrollToTarget(target: string) {
    // Use the ViewportScroller to scroll to the target anchor
    const element = document.getElementById(target);
    if (element) {
      this.viewportScroller.scrollToAnchor(target);
    }}
}
