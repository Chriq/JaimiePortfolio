import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SwipeRevealDirective } from '../../directives/swipe-reveal.directive';
import { AboutComponent } from '../about/about.component';

@Component({
    selector: 'app-home',
    imports: [PortfolioComponent, SwipeRevealDirective, AboutComponent],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    ngOnInit() {
        window.addEventListener('message', (e) => {
            if (e.data && e.data.type === 'resize' && e.data.height) {
                document.getElementById('reelcrafteriframe').style.height = e.data.height + 'px';
            }
        });
    }
}


