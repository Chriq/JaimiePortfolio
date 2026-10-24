import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, inject, DestroyRef, ElementRef } from '@angular/core';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { SwipeRevealDirective } from '../../directives/swipe-reveal.directive';
import { AboutComponent } from '../about/about.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-home',
    imports: [PortfolioComponent, SwipeRevealDirective, AboutComponent, TestimonialsComponent, ContactComponent],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

    constructor(
        private host: ElementRef<HTMLElement>,
        private location: Location,
        private router: Router,
        private destroyRef: DestroyRef
    ) { }
    ngOnInit() {
        window.addEventListener('message', (e) => {
            if (e.data && e.data.type === 'resize' && e.data.height) {
                document.getElementById('reelcrafteriframe').style.height = e.data.height + 'px';
            }
        });
    }

    ngAfterViewInit() {
        const sections = this.host.nativeElement.querySelectorAll<HTMLElement>('section[id]');

        const observer = new IntersectionObserver(
            entries => {
                const hit = entries.find(e => e.isIntersecting);
                if (hit) this.setFragment(hit.target.id);
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );

        sections.forEach(s => observer.observe(s));
        this.destroyRef.onDestroy(() => observer.disconnect());
    }

    private setFragment(id: string) {
        const [path] = this.router.url.split('#');
        const current = this.router.url.split('#')[1];
        if (current === id) return;
        this.location.replaceState(`${path}#${id}`);
    }
}


