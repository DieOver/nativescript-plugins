import { Utils } from '@nativescript/core';
import { HelloworldCommon } from './common';

export class Helloworld extends HelloworldCommon {

  static getBatteryLevel() {
    console.log('getBatteryLevel Android');
    const bm = Utils.android.getApplicationContext().getSystemService(android.content.Context.BATTERY_SERVICE);
    const batLevel = bm.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);
    alert(`The Battery Level is: ${batLevel}%`)
  }

}
