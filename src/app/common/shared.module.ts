import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesFacadeModule } from './facade-services/facade-services.module';
import { HttpClientModule } from '@angular/common/http';
/**
 * Módulo que se exporta a el app.module, que lleva todo el facadeModule. La única clase que se exporta a
 * el app.module
 */
@NgModule({
  imports: [
    CommonModule,
    ServicesFacadeModule,

    HttpClientModule
  ],
  declarations: []
})
export class SharedModule { }
