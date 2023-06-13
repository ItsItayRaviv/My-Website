import { Component, Renderer2, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {
  private circles: Array<HTMLElement> = [];
  private content!: HTMLElement;
  private moveReady: boolean = true;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit()
  {
    this.circles = [
      document.getElementById('circle1'),
      document.getElementById('circle2'),
    ].filter(el => el) as HTMLElement[];
    this.circles.forEach(el => {console.log(el);});

    const contentBox = document.getElementById('contentBox');
    if (contentBox)
    {
      this.content = contentBox;
      fromEvent<MouseEvent>(this.content, 'mousemove')
      .subscribe( (event: MouseEvent) =>
        { this.onMouseMove(event);  } )
    }
  }

  onMouseMove(e: MouseEvent) {
    if (this.moveReady) {
      //console.log('mouse move');
        this.circles.forEach(circle => {
        this.renderer.setStyle(circle, 'top', `${e.clientY - this.content.offsetTop}px`);
        this.renderer.setStyle(circle, 'left', `${e.clientX - this.content.offsetLeft}px`);
        this.moveReady = false;
        setTimeout(() => this.moveReady = true, 50)
      });
    }
    else{
      //console.log('mouse move not ready');
    }
  }

  onMouseLeave() {
    //console.log('mouse leave');
    this.circles.forEach((circle) => {
      const height = this.content.clientHeight;
      const width = this.content.clientWidth;
      this.renderer.setStyle(circle, 'background-color' , '#377');
      switch (circle.id) {
        case 'circle1':
          this.renderer.setStyle(circle, 'top', `${height * 0.015}px`);
          this.renderer.setStyle(circle, 'left', `${width * 0.167}px`);
          break;
        case 'circle2':
          this.renderer.setStyle(circle, 'top', `${height * 0.533}px`);
          this.renderer.setStyle(circle, 'left', `${width * 0.662}px`);
          break;
      }
    });
  }
  onMouseEnter() {
    //console.log('mouse enter');
    this.circles.forEach(circle => {
      this.renderer.setStyle(circle, 'background-color' , 'white');
    });
  }
}