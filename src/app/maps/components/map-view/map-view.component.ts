import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';

import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor(private placesServices: PlacesService) {}

  ngAfterViewInit(): void {
    if (!this.placesServices.userLocation)
      throw Error('Não há placeService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.placesServices.userLocation,
      zoom: 14, // starting zoom
    });

    const popup = new Popup().setHTML(`
        <h6>Aqui estou</h6>
        <span>Estou neste lugar do mundo!</span>
      `);
    new Marker({ color: 'red' })
      .setLngLat(this.placesServices.userLocation)
      .setPopup(popup)
      .addTo(map);
  }
}
