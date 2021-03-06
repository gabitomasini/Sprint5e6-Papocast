/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PythonComponent } from './python.component';

describe('PythonComponent', () => {
  let component: PythonComponent;
  let fixture: ComponentFixture<PythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
