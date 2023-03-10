import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAddButtonComponent } from './footer-add-button.component';

describe('FooterAddButtonComponent', () => {
  let component: FooterAddButtonComponent;
  let fixture: ComponentFixture<FooterAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAddButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
