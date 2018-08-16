import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthHttpInterceptorService } from './auth-http-interceptor.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true },
];
