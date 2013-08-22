
/**
 * Module exports.
 */

module.exports = Event;

/**
 * Constants.
 */

var NONE = 0;
var CAPTURING_PHASE = 1;
var AT_TARGET = 2;
var BUBBLING_PHASE = 3;

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
 * Expose constants.
 */

Event.NONE = Event.prototype.NONE = NONE;
Event.CAPTURING_PHASE = Event.prototype.CAPTURING_PHASE = CAPTURING_PHASE;
Event.AT_TARGET = Event.prototype.AT_TARGET = AT_TARGET;
Event.BUBBLING_PHASE = Event.prototype.BUBBLING_PHASE = BUBBLING_PHASE;

/**
 * Initializes the `type`, `bubbles`, and `cancelable` properties
 * for this Event instance.
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
