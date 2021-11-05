/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntendahtmlComponent } from './entendahtml.component';

describe('EntendahtmlComponent', () => {
  let component: EntendahtmlComponent;
  let fixture: ComponentFixture<EntendahtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntendahtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntendahtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
