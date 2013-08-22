
/**
 * Module exports.
 */

module.exports = Event;

/**
 * Constants.
 */

var AT_TARGET = 2;
var BLUR = 8192;
var BUBBLING_PHASE = 3;
var CAPTURING_PHASE = 1;
var CHANGE = 32768;
var CLICK = 64;
var DBLCLICK = 128;
var DRAGDROP = 2048;
var FOCUS = 4096;
var KEYDOWN = 256;
var KEYPRESS = 1024;
var KEYUP = 512;
var MOUSEDOWN = 1;
var MOUSEDRAG = 32;
var MOUSEMOVE = 16;
var MOUSEOUT = 8;
var MOUSEOVER = 4;
var MOUSEUP = 2;
var NONE = 0;
var SELECT = 16384;

/**
 * `Event` constructor.
 *
 * @api public
 */

function Event (type) {
  if (!(this instanceof Event)) throw new TypeError('DOM object constructor cannot be called as a function.');
  if (0 == arguments.length) throw new TypeError('Not enough arguments');
  this.bubbles = false;
  this.cancelBubble = false;
  this.cancelable = false;
  this.currentTarget = null;
  this.defaultPrevented = false;
  this.eventPhase = NONE;
  this.returnValue = true;
  this.srcElement = null;
  this.target = null;
  this.timeStamp = +new Date();
  this.type = String(type);
}

/**
 * Initializes the `type`, `bubbles`, and `cancelable` args for this Event
 * instance.
 *
 * @api public
 */

function initEvent (type, bubbles, cancelable) {
  this.type = String(type);
  this.bubbles = Boolean(bubbles);
  this.cancelable = Boolean(cancelable);
}

/**
 * Cancels the event (if it is cancelable).
 *
 * @api public
 */

function preventDefault () {
  if (this.cancelable) {
    this.defaultPrevented = true;
  }
}

/**
 *
 */

function stopImmediatePropagation () {
}

/**
 *
 */

function stopPropagation () {
}

Event.prototype.initEvent = initEvent;
Event.prototype.preventDefault = preventDefault;
Event.prototype.stopImmediatePropagation = stopImmediatePropagation;
Event.prototype.stopPropagation = stopPropagation;
