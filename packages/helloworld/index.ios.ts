import { HelloworldCommon } from './common';

export class Helloworld extends HelloworldCommon {

  static getBatteryLevel(): number {
    return UIDevice.currentDevice.batteryLevel * 100 * -1;
  }

}
