import { Component, Renderer2, AfterViewInit, HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


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
        { this.moveCircles(event);  } )
    }

    const resize$ = fromEvent(window, 'resize').pipe(debounceTime(200));
    resize$.subscribe(() => this.resetCircles());
  }

  moveCircles(e: MouseEvent) {
    if (this.moveReady) {
        this.circles.forEach(circle => {
        this.renderer.setStyle(circle, 'top', `${e.clientY - this.content.offsetTop - 20}px`);
        this.renderer.setStyle(circle, 'left', `${e.clientX - this.content.offsetLeft - 20}px`);
        this.moveReady = false;
        setTimeout(() => this.moveReady = true, 50)
      });
    }
  }

  resetCircles() {
    //console.log('mouse leave');
    this.circles.forEach((circle) => {
      const height = this.content.clientHeight;
      const width = this.content.clientWidth;
      this.paintCircles('#377')
      switch (circle.id) {
        case 'circle1':
          this.renderer.setStyle(circle, 'top', `${height * 0.015}px`);
          this.renderer.setStyle(circle, 'left', `${width * 0.166}px`);
          break;
        case 'circle2':
          this.renderer.setStyle(circle, 'top', `${height * 0.502}px`);
          this.renderer.setStyle(circle, 'left', `${width * 0.665}px`);
          break;
      }
    });
  }
  paintCircles(color: string) {
    this.circles.forEach(circle => {
      this.renderer.setStyle(circle, 'background-color' , color);
    });
    console.log(color);
  }
}