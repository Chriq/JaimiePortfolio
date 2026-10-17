import { Component, OnInit } from '@angular/core';
import { SwipeRevealDirective } from '../../directives/swipe-reveal.directive';
import { CarouselComponent } from '../../common/carousel/carousel.component';
import { ProjectService } from '../../services/project.service';
import { Testimonial } from '../../interfaces/media';

@Component({
    selector: 'app-testimonials',
    imports: [SwipeRevealDirective, CarouselComponent],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
    constructor(
        private projectService: ProjectService
    ) { }

    testimonials: Testimonial[];

    ngOnInit() {
        this.projectService.loadTestimonials().subscribe((result) => {
            this.testimonials = result;
        })
    }
}
