import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMyLocationComponent } from '../src/app/maps/components/btn-my-location/btn-my-location.component';

describe('BtnMyLocationComponent', () => {
  let component: BtnMyLocationComponent;
  let fixture: ComponentFixture<BtnMyLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnMyLocationComponent]
    });
    fixture = TestBed.createComponent(BtnMyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
