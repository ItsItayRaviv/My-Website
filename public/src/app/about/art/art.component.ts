import { Component } from '@angular/core';
import artPreview from 'src/models/artPreview.model';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent {
  artArray: artPreview[] = [
    new artPreview(
      '/assets/videos/lake_sunset_cut.mp4',
      true, 'A Rocky Start',
      `<p>My first landscape drawing with ProCreate. consulting a tutorial by 
        <a href="https://www.youtube.com/@ArtwithFlo" target="_blank">Flo</a>. 
        May 2023
      </p>`
    ),
    new artPreview(
      '/assets/videos/ocean_sunrise.MP4',
      true, 'Ocean Sunrise',
      `A drawing I made refrencing a picture and a tutorial by&nbsp;
      <a href="https://www.youtube.com/@JamesJulier-Artist" target="_blank"> James Julier</a>. 
      June 2023`
    ),
    new artPreview(
      'assets/images/soccer_drawing.webp',
      false, 'The Final Shot',
      'My first digital painting. made during my army service; March 2022'
    ),
  ];
}
