import { Component, Input, AfterViewInit } from '@angular/core';
import artPreview from 'src/models/artPreview.model';

@Component({
  selector: 'artimg',
  templateUrl: './artimg.component.html',
  styleUrls: ['./artimg.component.css']
})
export class ArtimgComponent implements AfterViewInit {
  @Input() art?: artPreview ;
  videos: HTMLVideoElement[] = [];

  ngAfterViewInit() {
    this.videos = Array.from(document.querySelectorAll<HTMLVideoElement>('.preview-video'));

    for (let i = 0; i < this.videos.length; i++) {
      const video = this.videos[i];
      video.addEventListener('mouseover', () => {
        video.play();
      });
      video.addEventListener('mouseout', () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  }
}
