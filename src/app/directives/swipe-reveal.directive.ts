import { AfterViewInit, Directive, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';

@Directive({
    selector: '[swipeReveal]',
})
export class SwipeRevealDirective implements OnInit, OnDestroy {
    private el = inject<ElementRef<HTMLElement>>(ElementRef);
    private observer?: IntersectionObserver;

    ngOnInit() {
        const target = this.el.nativeElement;
        const watched = target.parentElement ?? target;

        this.observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(() => target.classList.add('revealed'));
                    // this.observer?.disconnect();
                } else {
                    requestAnimationFrame(() => target.classList.remove('revealed'));
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
        );
        this.observer.observe(watched);
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }
}
