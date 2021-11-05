/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ValecssComponent } from './valecss.component';

describe('ValecssComponent', () => {
  let component: ValecssComponent;
  let fixture: ComponentFixture<ValecssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValecssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValecssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
