import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { SocialLinksComponent } from '../social-links/social-links.component';


@Component({
    selector: 'app-header',
    imports: [MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule, MatMenuModule, OverlayModule, SocialLinksComponent],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor(private router: Router) { }

    menuOpen = false;

    menuOptions: string[] = [
        "Portfolio",
        "Testimonials",
        "About",
        "Contact"
    ];

    p = "Portfolio";

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    closeMenu() {
        this.menuOpen = false;
    }

    navigateTo(route: string, option?: string) {
        const id = route.toLowerCase();

        this.router
        .navigate(['/'], {
            queryParams: option ? { filters: [option] } : {},
            fragment: id,
        })
        .then(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }));
    }
}
