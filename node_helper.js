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
    this.started = false;
  },
  socketNotificationReceived: function(notification, payload) {
    const self = this;
    if (notification == "SUNCALC_CONFIG" && this.started == false){
      this.config = payload;
    } else if (notification == "SUNCALC_CALC" ){
      var times = SunCalc.getTimes(, this.config.latitude, this.config.latitude);
      self.sendSocketNotification("SUNCALC_CALC", times);
    }
  }
});
