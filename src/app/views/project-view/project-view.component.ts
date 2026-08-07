import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/media';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project-view',
    imports: [CommonModule],
    templateUrl: './project-view.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent implements OnInit {
    constructor(
        private projectService: ProjectService,
        private router: Router
    ) { }

    project: Project;
    embedUrl: string;

    ngOnInit() {
        let id = this.router.url.replace("/portfolio/", "");
        this.projectService.getProjectById(id).subscribe((response) => {
            this.project = response;
        });
    }
}
