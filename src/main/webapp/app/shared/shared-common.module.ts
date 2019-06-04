import { NgModule } from '@angular/core';

import { ProjetNetsuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ProjetNetsuiviSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ProjetNetsuiviSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProjetNetsuiviSharedCommonModule {}
