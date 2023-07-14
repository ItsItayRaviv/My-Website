import { Component, Input, AfterViewInit } from '@angular/core';
import artPreview from 'src/app/models/artPreview.model';

@Component({
  selector: 'artimg',
  templateUrl: './artimg.component.html',
  styleUrls: ['./artimg.component.css']
})
export class ArtimgComponent implements AfterViewInit {
  @Input() art?: artPreview ;
  videos: HTMLVideoElement[] = [];
  containers: HTMLElement[] = [];

  ngAfterViewInit() {
    this.videos = Array.from(document.querySelectorAll<HTMLVideoElement>('.preview-video'));
    this.containers = Array.from(document.querySelectorAll<HTMLElement>('.preview-container'));

    if (this.videos.length === this.containers.length) {
      for (let i = 0; i < this.videos.length; i++) {
        const video = this.videos[i];
        const container = this.containers[i];

        container.addEventListener('mouseover', () => {
          video.play();
        });

        container.addEventListener('mouseout', () => {
          video.pause();
          video.currentTime = 0;
        });
      }
    }
  }
}
