/* global Module */

/* Magic Mirror
 * Module: suncalc
 *
 * 
 * MIT Licensed.
 */

/* These keys will be replaced with calculated content in the text string. Time format is determined from the gobal language config
* 
* <solarNoon>
* <nadir>
* <sunrise>
* <sunset>
* <sunriseEnd>
* <sunsetStart>
* <dawn>
* <dusk>
* <nauticalDawn>
* <nauticalDusk>
* <nightEnd>
* <night>
* <goldenHourEnd>
* <goldenHour>
*/

Module.register("mmm-suncalc",{
  times: null,
  // Default module config.
  defaults: {
    latitude: 60.794533,
    longitude: 11.067998,
    updateInterval: 1 * 60 * 60 * 1000, // every 1 hour
    text: "The sun rises at <sunrise>, and sets at <sunset>",
  },
  start: function() {
    Log.info("Starting module: " + this.name);
    this.sendSocketNotification('SET_CONFIG', this.config);
    moment.locale(config.language);
    setInterval( function(){this.doCalculate();} , this.config.updateInterval);
  },
  getScripts: function(){
    return [ 'moment.js', ];
  },
  socketNotificationReceived: function(notification, payload) {
    if(notification == 'SUNCALC_CALC'){
      this.times = payload;
      this.updateDom();
    }
  },
  // Override dom generator.
  getDom: function() {
    var wrapper = document.createElement("div");
    if( this.times != null ){
      var res = this.config.text;
      for ( var time in this.times ){
        res = res.replace("<"+time+">", new moment(this.times[time]).format("LT"));
      }
      wrapper.innerHTML = res;
    } else {
      wrapper.innerHTML = "";
    }
    return wrapper;
  }
});
