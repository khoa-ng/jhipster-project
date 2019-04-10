import { NgModule } from '@angular/core';

import { JihipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JihipsterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JihipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JihipsterSharedCommonModule {}
