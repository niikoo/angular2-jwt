import { Injectable } from '@angular/core';

@Injectable()
export class JWT_OPTIONS {
    config?: {
      tokenGetter?: () => string | Promise<string>;
      headerName?: string;
      authScheme?: string;
      whitelistedDomains?: Array<string | RegExp>;
      throwNoTokenError?: boolean;
      skipWhenExpired?: boolean;
    }
  }