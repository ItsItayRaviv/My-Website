import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {
  gmLogo = "https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png";
  insgLogo = "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png";
  gitLogo = "https://cdn-icons-png.flaticon.com/512/25/25231.png";

  private hoveredCards = new Set<Element>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    
    const cards: HTMLElement[] = this.el.nativeElement.querySelectorAll('.card');

    cards.forEach(card => {
      this.renderer.listen(card, 'mouseover', () => {
        if (!this.hoveredCards.has(card)) {
          const backImgContainer = card.querySelector('.back-img-container');
          const backLink = card.querySelector('.back-link');

          this.renderer.setStyle(backImgContainer, 'transition', '1s ease-in-out');
          this.renderer.setStyle(backImgContainer, 'transform', 'translate(100%, -50%)');
          this.renderer.setStyle(backImgContainer, 'width', '50px');

          this.renderer.setStyle(backLink, 'transition', '1s ease-in-out');
          this.renderer.setStyle(backLink, 'transform', 'translate(-70%, -50%)');

          this.hoveredCards.add(card);
        }
      });
    });
  }
}