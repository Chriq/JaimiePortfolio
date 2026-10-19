import { Injectable } from '@angular/core';
import { Project, Testimonial } from '../interfaces/media';
import { Observable, of, BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(private http: HttpClient) { }

    projectMap: BehaviorSubject<Map<string, Project>> = new BehaviorSubject(null);

    loadAllProjects(): Observable<Project[]> {
        let p: Project[] = require('../../data/projects.json');
        this.projectMap.next(this.toMap(p));
        return of(p);
    }

    getProjectById(id: string): Observable<Project> {
        this.loadAllProjects();
        return this.projectMap.pipe(
            map((response) => {
                return response.get(id);
            })
        )
    }

    private toMap(arr: Project[]): Map<string, Project> {
        let map: Map<string, Project> = new Map();
        for (let p of arr) {
            map.set(p.id, p);
        }

        return map;
    }

    loadTestimonials(): Observable<Testimonial[]> {
        let p: Testimonial[] = require('../../data/testimonials.json');
        return of(p);
    }
}
