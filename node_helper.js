'use strict'

/* Magic Mirror
 * Module: mmm-suncalc
 * 
 * MIT Licensed
*/

const NodeHelper = require('node_helper');
const SunCalc = require('suncalc');

module.exports = NodeHelper.create({
  start: function(){
    console.log("Starting node_helper for mmm-suncalc: ");
  },
  socketNotificationReceived: function(notification, payload) {
    const self = this;
    if (notification == "SET_CONFIG"){
      this.config = payload;
      this.sendSunCalc();
      setInterval( function(){
        self.sendSunCalc();
      }, this.config.updateInterval);
    }
  },
  sendSunCalc: function(){
    var times = SunCalc.getTimes(new Date(), this.config.latitude, this.config.longitude);
    this.sendSocketNotification("SUNCALC_CALC", times);
  }
});
