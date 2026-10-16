import { Component } from '@angular/core';
import { SwipeRevealDirective } from '../../directives/swipe-reveal.directive';

@Component({
    selector: 'app-testimonials',
    imports: [SwipeRevealDirective],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {

}
