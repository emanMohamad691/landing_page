import { Component,HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isNavbarFixed=false
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isNavbarFixed = window.scrollY > 100;
  }
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToTarget(target: string) {
    // Use the ViewportScroller to scroll to the target anchor
    const element = document.getElementById(target);
    if (element) {
      this.viewportScroller.scrollToAnchor(target);
    }}

   
  
}
