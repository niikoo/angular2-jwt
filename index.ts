import { NgModule, ModuleWithProviders } from '@angular/core';
import { JwtInterceptor } from './src/jwt.interceptor';
import { JwtHelperService } from './src/jwthelper.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWT_OPTIONS } from './src/jwtoptions.token';

export { JwtInterceptor } from './src/jwt.interceptor';
export { JwtHelperService } from './src/jwthelper.service';
export { JWT_OPTIONS } from './src/jwtoptions.token';


@NgModule({
  providers: [
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class JwtModule {

  constructor() {
  }
  static forRoot(options: JWT_OPTIONS = new JWT_OPTIONS()): ModuleWithProviders {
    return {
      ngModule: JwtModule,
      providers: [
        { provide: JWT_OPTIONS, useExisting: options }
      ]
    };
  }
}
