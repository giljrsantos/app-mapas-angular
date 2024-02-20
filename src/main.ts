import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (!navigator.geolocation) {
  alert('O navegador não suporta Geolocalização')
  throw new Error('O navegador não suporta Geolocalização')
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
