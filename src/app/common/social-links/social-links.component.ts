import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-social-links',
    imports: [],
    standalone: true,
    templateUrl: './social-links.component.html',
    styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent implements OnInit {
    linkColor: string;

    ngOnInit() {
        const rootStyles = getComputedStyle(document.documentElement);
        this.linkColor = rootStyles.getPropertyValue('--text-secondary').trim().replaceAll("#", "");
    }
}
