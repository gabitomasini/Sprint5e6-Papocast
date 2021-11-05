/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginapocastsComponent } from './paginapocasts.component';

describe('PaginapocastsComponent', () => {
  let component: PaginapocastsComponent;
  let fixture: ComponentFixture<PaginapocastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginapocastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginapocastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
