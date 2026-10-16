import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SwipeRevealDirective } from '../../directives/swipe-reveal.directive';

@Component({
    selector: 'app-about',
    imports: [SwipeRevealDirective],
    templateUrl: './about.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './about.component.scss'
})
export class AboutComponent {

}
