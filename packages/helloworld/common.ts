import { Observable } from '@nativescript/core';

export class HelloworldCommon extends Observable {

  static getBatteryLevel() {
    console.log('WEB doesn`t have battery level');
  }

}
