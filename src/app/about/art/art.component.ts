import { Component } from '@angular/core';
import artPreview from 'src/app/models/artPreview.model';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent {
  art1 = new artPreview(
    '/assets/images/lake_sunset.JPG',
    '/assets/videos/lake_sunset_cut.mp4'
  )
  art2 = new artPreview(
    '/assets/images/ss_ocean_sunrise.png',
    '/assets/videos/ocean_sunrise.MP4'
  )
}
