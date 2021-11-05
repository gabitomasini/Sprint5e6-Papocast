/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BatepaporestComponent } from './batepaporest.component';

describe('BatepaporestComponent', () => {
  let component: BatepaporestComponent;
  let fixture: ComponentFixture<BatepaporestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatepaporestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatepaporestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
