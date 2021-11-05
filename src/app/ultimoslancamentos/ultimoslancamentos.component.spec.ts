/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UltimoslancamentosComponent } from './ultimoslancamentos.component';

describe('UltimoslancamentosComponent', () => {
  let component: UltimoslancamentosComponent;
  let fixture: ComponentFixture<UltimoslancamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimoslancamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimoslancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
