import { Component, NgZone } from '@angular/core';
import { DemoSharedHelloworld } from '@demo/shared';
import { } from '@dieover/helloworld';

@Component({
	selector: 'demo-helloworld',
	templateUrl: 'helloworld.component.html',
})
export class HelloworldComponent {
  
  demoShared: DemoSharedHelloworld;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedHelloworld();
  }

}