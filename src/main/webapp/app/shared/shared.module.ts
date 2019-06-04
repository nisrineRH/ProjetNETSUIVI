import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjetNetsuiviSharedLibsModule, ProjetNetsuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProjetNetsuiviSharedLibsModule, ProjetNetsuiviSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProjetNetsuiviSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjetNetsuiviSharedModule {
  static forRoot() {
    return {
      ngModule: ProjetNetsuiviSharedModule
    };
  }
}
