import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scroll-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './scroll-button.component.html',
  styleUrl: './scroll-button.component.scss',
})
export class ScrollButtonComponent {
  constructor(
    private router: Router,
    private scroller: ViewportScroller
  ) {}

  navigateTo() {
     this.router.navigate(['/home']);
      this.scroller.scrollToPosition([0, 0]); 
  }
}
