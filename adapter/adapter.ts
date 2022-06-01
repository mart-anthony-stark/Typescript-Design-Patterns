/**
 * Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.
 */

interface IPhone {
  useLightning();
}
interface Android {
  useMicroUSB();
}

class iPhone7 implements IPhone {
  useLightning() {
    console.log("Uses lightning port");
  }
}

class GooglePixel implements Android {
  useMicroUSB() {
    console.log("Uses micro USB");
  }
}

class LightningToMicroUSBAdapter implements Android {
  iphoneDevice: IPhone;

  constructor(iphone: IPhone) {
    this.iphoneDevice = iphone;
  }

  useMicroUSB() {
    console.log("Want to use micro USB, converting...");
    this.iphoneDevice.useLightning();
  }
}

let iphone = new iPhone7();
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);

chargeAdaptor.useMicroUSB();