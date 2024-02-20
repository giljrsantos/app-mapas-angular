import { PlacesService } from '../src/app/maps/services/places.service';
import { TestBed } from '@angular/core/testing';

describe('PlacesService', () => {
  let service: PlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
