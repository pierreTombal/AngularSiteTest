import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapecolorComponent } from './shapecolor.component';

describe('ShapecolorComponent', () => {
  let component: ShapecolorComponent;
  let fixture: ComponentFixture<ShapecolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapecolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapecolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
