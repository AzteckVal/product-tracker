import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductTrackerSharedLibsModule, ProductTrackerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProductTrackerSharedLibsModule, ProductTrackerSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProductTrackerSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductTrackerSharedModule {
  static forRoot() {
    return {
      ngModule: ProductTrackerSharedModule
    };
  }
}
