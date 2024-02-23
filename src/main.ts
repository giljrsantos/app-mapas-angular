import { AppModule } from './app/app.module';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { environment } from './environments/environment'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

Mapboxgl.accessToken = environment.apiKey;


// pk.eyJ1IjoiZ2lsanJzYW50b3MiLCJhIjoiY2xzdmtjMHkxMmwyeTJscDc1eXNtd3VnNiJ9.9sQJAtT505LAnxZgnJZ-rQ
if (!navigator.geolocation) {
  alert('O navegador não suporta Geolocalização');
  throw new Error('O navegador não suporta Geolocalização');
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
