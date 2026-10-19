import { Router, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { ProjectViewComponent } from './views/project-view/project-view.component';
import { HomeComponent } from './views/home/home.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { inject } from '@angular/core';

const toSection = (id: string) => () => inject(Router).parseUrl(`/${id}`);

export const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'portfolio', redirectTo: toSection('portfolio') },
    { path: 'testimonials', redirectTo: toSection('testimonials') },
    { path: 'about', redirectTo: toSection('about') },
    { path: 'contact', redirectTo: toSection('contact') },
];

