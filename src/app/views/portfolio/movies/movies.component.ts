import { Component } from '@angular/core';

interface Poster {
    file: string;
    title: string;
    year?: number;
    role?: string;
    description?: string;
}

@Component({
    selector: 'app-movies',
    imports: [],
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.scss',
})
export class MoviesComponent {
    posters: Poster[] = [
        { file: '_Lunar_Clips_Ambient_Soundscapes_Montage_Pack_Cover_Art.jpg', title: 'Lunar Clips Ambient Soundscapes Montage Pack', year: 2024, description: "Test Desc" },
        { file: '_Maharlika_Montage_Pack_Cover_Art.jpg', title: 'Maharlika Montage Pack' },
        { file: 'Change Can Dunk.webp', title: 'Change Can Dunk' },
        { file: 'Connection (with Credits).jpg', title: 'Connection' },
        { file: 'Ganito Ganyan Ganoon (This, That and Everything in Between).jpg', title: 'Ganito Ganyan Ganoon' },
        { file: 'Hypnotic.png', title: 'Hypnotic' },
        { file: 'July 4th.png', title: 'July 4th' },
        { file: 'Kilig_Poster_Laurels.png', title: 'Kilig' },
        { file: 'MASARU Poster 24x36_Ru_Final_V4.jpg', title: 'Masaru' },
        { file: 'Afterlife.jpg', title: 'Afterlife' },
        { file: 'Nurse Unseen.jpg', title: 'Nurse Unseen' },
        { file: 'VS.png', title: 'VS' },
    ];
}
