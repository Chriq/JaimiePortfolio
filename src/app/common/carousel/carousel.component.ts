import { Component, contentChild, input, signal, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [NgTemplateOutlet, MatButtonModule, MatIconModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
    items = input.required<unknown[]>();
    slideTemplate = contentChild.required(TemplateRef);

    current = signal(0);

    next() {
        const n = this.items().length;
        if (n) this.current.update(i => (i + 1) % n);
    }

    prev() {
        const n = this.items().length;
        if (n) this.current.update(i => (i - 1 + n) % n);
    }

    goTo(index: number) {
        this.current.set(index);
    }

    private touchStartX = 0;

    onTouchStart(e: TouchEvent) {
        this.touchStartX = e.changedTouches[0].clientX;
    }

    onTouchEnd(e: TouchEvent) {
        const delta = e.changedTouches[0].clientX - this.touchStartX;
        const threshold = 50;
        if (delta > threshold) this.prev();
        else if (delta < -threshold) this.next();
    }
}