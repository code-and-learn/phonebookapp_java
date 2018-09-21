import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewgroupComponent } from './addnewgroup.component';

describe('AddnewgroupComponent', () => {
  let component: AddnewgroupComponent;
  let fixture: ComponentFixture<AddnewgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
