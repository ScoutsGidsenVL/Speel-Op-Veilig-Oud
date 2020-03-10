import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColofonPage } from './colofon.page';

describe('ColofonPage', () => {
  let component: ColofonPage;
  let fixture: ComponentFixture<ColofonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColofonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColofonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
