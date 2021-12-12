import { DemoSharedBase } from '../utils';
import { Helloworld } from '@dieover/helloworld';

export class DemoSharedHelloworld extends DemoSharedBase {

  testIt() {
    console.log(`Battery Level: ${Helloworld.getBatteryLevel()}%`);
  }
}
