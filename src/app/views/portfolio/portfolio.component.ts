import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Project } from '../../interfaces/media';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MoviesComponent } from './movies/movies.component';
import { SwipeRevealDirective } from '../../directives/swipe-reveal.directive';

@Component({
    selector: 'app-portfolio',
    imports: [CommonModule, MatDividerModule, MatTabsModule, MoviesComponent, SwipeRevealDirective],
    templateUrl: './portfolio.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnChanges {

    constructor(
        private projectService: ProjectService,
        private router: Router
    ) {
        this.projectService.loadAllProjects().subscribe((response) => {
            this.allProjects = response;
            this.updateDisplayedProjects(this.filters);
        });
    }

    allProjects: Project[];
    displayedProjects: Project[];
    @Input() filters: string[];

    ngOnChanges() {
        this.updateDisplayedProjects(this.filters);
    }

    navigateTo(route: string) {
        this.router.navigate(['portfolio/', route]);
    }

    updateDisplayedProjects(filters: string[]) {
        this.displayedProjects = this.allProjects;
    }
}
