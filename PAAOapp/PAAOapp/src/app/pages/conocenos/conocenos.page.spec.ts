import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocenosPage } from './conocenos.page';

describe('ConocenosPage', () => {
  let component: ConocenosPage;
  let fixture: ComponentFixture<ConocenosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocenosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocenosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
