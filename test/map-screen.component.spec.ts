import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapScreenComponent } from '../src/app/maps/screens/map-screen/map-screen.component';

describe('MapScreenComponent', () => {
  let component: MapScreenComponent;
  let fixture: ComponentFixture<MapScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapScreenComponent]
    });
    fixture = TestBed.createComponent(MapScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
