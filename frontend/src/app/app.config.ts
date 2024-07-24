import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';


import { routes } from './app.routes';
import { LoginComponent } from './auth/login/login.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]

};
