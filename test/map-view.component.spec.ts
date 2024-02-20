import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewComponent } from '../src/app/maps/components/map-view/map-view.component';

describe('MapViewComponent', () => {
  let component: MapViewComponent;
  let fixture: ComponentFixture<MapViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapViewComponent]
    });
    fixture = TestBed.createComponent(MapViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
