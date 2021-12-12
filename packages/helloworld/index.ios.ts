import { HelloworldCommon } from './common';

export class Helloworld extends HelloworldCommon {

  static getBatteryLevel() {
    console.log('getBatteryLevel iOS');
    const batLevel = UIDevice.currentDevice.batteryLevel * 100 * -1
    alert(`The Battery Level is: ${batLevel}%`)
  }

}
