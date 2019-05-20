import { NgModule } from '@angular/core';

import { ProductTrackerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ProductTrackerSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ProductTrackerSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProductTrackerSharedCommonModule {}
