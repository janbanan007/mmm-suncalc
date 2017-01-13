# mmm-suncalc
Magic Mirror Module display sunrise and sunset in text on your mirror

## Configuration
- latitude: Position
- longitude: Position
- updateInterval: How often should the calculations be done
- text: Configurable message displayed

### Valid values in the text display, to be replaced with actual calculated times

- \<sunrise\>
- \<sunset\>
- \<sunsetStart\>
- \<sunriseEnd\>
- \<dusk\>
- \<dawn\>
- \<nauticalDusk\>
- \<nauticalDawn\>
- \<night\>
- \<nightEnd\>
- \<goldenHourEnd\>
- \<goldenHour\>
- \<solarNoon\>
- \<nadir\>

## Installation

Go to your MagicMirror folder.

`cd MagicMirror`

Clone the repository

`git clone https://github.com/janbanan007/mmm-suncalc.git`

Install module

`npm install`

## Configuration

Add module configuration to config.js.

```js
{
  module: 'mmmm-suncalc',
    config: {
    latitude: 60.12345,
    longitude: 10.12345,
    text: 'Sunrise <sunrise>, sunset <sunset> solar noon <solarNoon>',
  },
},
```
