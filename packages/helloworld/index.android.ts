import { Utils } from '@nativescript/core';
import { HelloworldCommon } from './common';

export class Helloworld extends HelloworldCommon {

  static getBatteryLevel(): number {
    const bm = Utils.android.getApplicationContext().getSystemService(android.content.Context.BATTERY_SERVICE);
    return bm.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);
  }

}
