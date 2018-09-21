import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupcontactsComponent } from './groupcontacts.component';

describe('GroupcontactsComponent', () => {
  let component: GroupcontactsComponent;
  let fixture: ComponentFixture<GroupcontactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupcontactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
