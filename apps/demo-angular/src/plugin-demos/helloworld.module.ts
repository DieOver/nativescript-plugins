import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { HelloworldComponent } from './helloworld.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: HelloworldComponent }])],
  declarations: [HelloworldComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class HelloworldModule {}
