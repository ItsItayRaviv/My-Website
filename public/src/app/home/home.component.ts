import { Component, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements AfterViewInit {
  links: {
    artist: string;
    code: string;
    language: string;
  } = {
    artist: "/about/art",
    code: "/about/code",
    language: "/about/language"
  };
  private circles: Array<HTMLElement> = [];
  private content!: HTMLElement;
  private moveReady = true;
  private inLinkArea = false;
  private height = 0;
  private width = 0;
  private linkAreaTop = 0.45;
  private linkAreaBot = 0.53;

  constructor(private renderer: Renderer2, private router: Router) {}

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

    this.height = this.content.clientHeight;
    this.width = this.content.clientWidth;

    const resize$ = fromEvent(window, 'resize').pipe(debounceTime(200));
    resize$.subscribe(() => this.resetCircles());

    this.resetCircles();
  }

  moveCircles(e: MouseEvent) {
    if (this.moveReady) {
      let topPos = e.clientY - this.content.offsetTop;
      let leftPos = e.clientX - this.content.offsetLeft;
      if (!this.inLinkArea && this.height * this.linkAreaTop < topPos && topPos < this.height * this.linkAreaBot){
        this.inLinkArea = true;
        this.linkEffect(true);
      }
      if (this.inLinkArea && (this.height * this.linkAreaTop > topPos || topPos > this.height * this.linkAreaBot)){
        this.inLinkArea = false;
        this.linkEffect(false);
      }
        this.circles.forEach(circle => {
        this.renderer.setStyle(circle, 'top', `${topPos - 20}px`);
        this.renderer.setStyle(circle, 'left', `${leftPos - 20}px`);
        this.moveReady = false;
        setTimeout(() => this.moveReady = true, 50)
      });
    }
  }

  resetCircles() {
    this.circles.forEach((circle) => {
      this.paintCircles('#377')
      this.renderer.setStyle(circle, 'transform' ,'scale(1)');
      this.height = this.content.clientHeight;
      this.width = this.content.clientWidth;
      switch (circle.id) {
        case 'circle1':
          this.renderer.setStyle(circle, 'top', `${this.height * 0.015}px`);
          this.renderer.setStyle(circle, 'left', `${this.width * 0.163}px`);
          break;
        case 'circle2':
          this.renderer.setStyle(circle, 'top', `${this.height * 0.538}px`);
          this.renderer.setStyle(circle, 'left', `${this.width * 0.665}px`);
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

  linkEffect(enter :boolean){
    this.renderer.setStyle
    (this.circles[0], 'background-color' ,
    enter ? '#477979' : '#fff');
    this.renderer.setStyle
    (this.circles[1], 'transform' ,
    enter ? 'scale(0.7)' : 'scale(1)');
  }

  clickToNav(e: MouseEvent){
    if (this.inLinkArea){
      let leftPos = e.clientX - this.content.offsetLeft;
      if (leftPos < this.width / 3){
        this.router.navigate([this.links.artist]);
        return;
      }
      if (leftPos < (this.width / 3) * 2){
        this.router.navigate([this.links.code]);
        return;
      }
      this.router.navigate([this.links.language]);
    }
  }
}