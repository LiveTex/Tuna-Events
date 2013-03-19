var events = {};
events.VERSION = "0.0.1";
events.Event = function(target, type, opt_isBubbling) {
  this._target = target;
  this._type = type;
  this._isBubbling = !!opt_isBubbling;
  this._isCanceled = false;
  this._isStopped = false;
  this._isImmediateStopped = false
};
events.Event.prototype.getTarget = function() {
  return this._target
};
events.Event.prototype.getType = function() {
  return this._type
};
events.Event.prototype.isBubbling = function() {
  return this._isBubbling
};
events.Event.prototype.preventDefault = function() {
  this._isCanceled = true
};
events.Event.prototype.isDefaultPrevented = function() {
  return this._isCanceled
};
events.Event.prototype.stopImmediatePropagation = function() {
  this._isImmediateStopped = true
};
events.Event.prototype.isImmediatePropagationStopped = function() {
  return this._isImmediateStopped
};
events.Event.prototype.stopPropagation = function() {
  this._isStopped = true
};
events.Event.prototype.isPropagationStopped = function() {
  return this._isImmediateStopped || this._isStopped
};
events.IEventDispatcher = function() {
};
events.IEventDispatcher.prototype.dispatch = function(event, opt_data) {
};
events.IEventDispatcher.prototype.addEventListener = function(type, listener) {
};
events.IEventDispatcher.prototype.removeEventListener = function(type, listener) {
};
events.IEventDispatcher.prototype.hasEventListener = function(type, listener) {
};
events.EventDispatcher = function(opt_propagationParent) {
  this._propagationParent = opt_propagationParent || null;
  this._listeners = {}
};
events.EventDispatcher.prototype.dispatch = function(event, opt_data) {
  if(!(event instanceof events.Event)) {
    event = new events.Event(this, event)
  }
  var type = event.getType();
  if(this._listeners[type] !== undefined) {
    var i = 0, l = this._listeners[type].length;
    while(i < l) {
      this._listeners[type][i].call(this, event, opt_data);
      if(event.isImmediatePropagationStopped()) {
        break
      }
      i++
    }
    if(this._propagationParent !== null && event.isBubbling() && !event.isPropagationStopped()) {
      this._propagationParent.dispatch(event)
    }
  }
  return!event.isDefaultPrevented()
};
events.EventDispatcher.prototype.addEventListener = function(type, listener) {
  if(this._listeners[type] === undefined) {
    this._listeners[type] = [listener]
  }else {
    if(!this.hasEventListener(type, listener)) {
      this._listeners[type].push(listener)
    }
  }
};
events.EventDispatcher.prototype.removeEventListener = function(type, listener) {
  if(this._listeners[type] !== undefined) {
    var listenerIndex = util.indexOf(listener, this._listeners[type]);
    if(listenerIndex !== -1) {
      this._listeners[type].splice(listenerIndex, 1)
    }
  }
};
events.EventDispatcher.prototype.hasEventListener = function(type, listener) {
  if(this._listeners[type] !== undefined) {
    return util.indexOf(listener, this._listeners[type]) !== -1
  }
  return false
};

