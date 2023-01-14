import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfComponentComponent } from './if-component.component';

describe('IfComponentComponent', () => {
  let component: IfComponentComponent;
  let fixture: ComponentFixture<IfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
