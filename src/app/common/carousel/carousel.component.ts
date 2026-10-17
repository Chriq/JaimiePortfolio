import { Component, contentChild, input, signal, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [NgTemplateOutlet],
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
}