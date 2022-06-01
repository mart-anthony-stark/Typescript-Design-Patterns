/**
 * Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.
 */
var iPhone7 = /** @class */ (function () {
    function iPhone7() {
    }
    iPhone7.prototype.useLightning = function () {
        console.log("Uses lightning port");
    };
    return iPhone7;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log("Uses micro USB");
    };
    return GooglePixel;
}());
var LightningToMicroUSBAdapter = /** @class */ (function () {
    function LightningToMicroUSBAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightningToMicroUSBAdapter.prototype.useMicroUSB = function () {
        console.log("Want to use micro USB, converting...");
        this.iphoneDevice.useLightning();
    };
    return LightningToMicroUSBAdapter;
}());
var iphone = new iPhone7();
var chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
chargeAdaptor.useMicroUSB();
