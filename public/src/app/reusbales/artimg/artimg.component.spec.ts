import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtimgComponent } from './artimg.component';

describe('ArtimgComponent', () => {
  let component: ArtimgComponent;
  let fixture: ComponentFixture<ArtimgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtimgComponent]
    });
    fixture = TestBed.createComponent(ArtimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
