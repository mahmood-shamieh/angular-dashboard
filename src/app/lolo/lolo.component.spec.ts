import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoloComponent } from './lolo.component';

describe('LoloComponent', () => {
  let component: LoloComponent;
  let fixture: ComponentFixture<LoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
