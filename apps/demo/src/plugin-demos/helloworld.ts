import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedHelloworld } from '@demo/shared';
import { } from '@dieover/helloworld';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedHelloworld {
	
}
