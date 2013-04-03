/**
 * TUNA FRAMEWORK
 *
 * Copyright (c) 2012, Sergey Kononenko
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * * Names of contributors may be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL SERGEY KONONENKO BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



/**
 * Базовая реализация интерфейса <code>events.IEventDispatcher</code>.
 *
 * При необходимости добавить возможность генерировать события для любого
 * класса достаточно сделать его наследником данного класса. В случае, когда
 * наследование не возможно, на данный класс можно делегировать реализацию
 * <code>events.IEventDispatcher</code>.
 *
 * @constructor
 * @implements {events.IEventDispatcher}
 * @param {!events.IEventDispatcher=} opt_propagationParent Родительский
 *        объект иерархии распростанения (баблинга).
 */
events.EventDispatcher = function(opt_propagationParent) {

  /**
   * Родительский объект иерархии распростанения (баблинга).
   *
   * @type {events.IEventDispatcher}
   */
  this.__propagationParent = opt_propagationParent || null;

  /**
   * Таблица слушателей событий определенных типов.
   *
   * @type {!Object.<string, !Array.<function(events.Event, *)>>}
   */
  this.__listeners = {};
};


/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.dispatch = function(event, opt_data) {
  if (!(event instanceof events.Event)) {
    event = new events.Event(this, event);
  }

  var type = event.getType();

  if (this.__listeners[type] !== undefined) {
    var i = 0,
        l = this.__listeners[type].length;

    while (i < l) {
      this.__listeners[type][i].call(this, event, opt_data);

      if (event.isImmediatePropagationStopped()) {
        break;
      }

      i++;
    }

    if (this.__propagationParent !== null &&
        event.isBubbling() && !event.isPropagationStopped()) {

      this.__propagationParent.dispatch(event);
    }
  }

  return !event.isDefaultPrevented();
};


/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.addEventListener = function(type, listener) {
  if (this.__listeners[type] === undefined) {
    this.__listeners[type] = [listener];
  } else if (!this.hasEventListener(type, listener)) {
    this.__listeners[type].push(listener);
  }
};


/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.removeEventListener =
    function(type, listener) {

  if (this.__listeners[type] !== undefined) {
    var listenerIndex = util.indexOf(listener, this.__listeners[type]);
    if (listenerIndex !== -1) {
      this.__listeners[type].splice(listenerIndex, 1);
    }
  }
};


/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.hasEventListener = function(type, listener) {
  if (this.__listeners[type] !== undefined) {
    return util.indexOf(listener, this.__listeners[type]) !== -1;
  }

  return false;
};


/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.removeAllEventListeners = function(opt_type) {
  if (opt_type === undefined) {
    this.__listeners = {};
  } else {
    delete this.__listeners[opt_type];
  }
};
