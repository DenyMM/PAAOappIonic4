import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiosPage } from './premios.page';

describe('PremiosPage', () => {
  let component: PremiosPage;
  let fixture: ComponentFixture<PremiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
