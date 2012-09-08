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
 * Класс базового события событийной модели объектов реализующих интерфейс
 * <code>events.IEventDispatcher</code>.
 *
 * @see events.IEventDispatcher
 * @see events.EventDispatcher
 * @constructor
 * @param {!events.IEventDispatcher} target Объект, событие которого
 *        произошло.
 * @param {string} type Тип события.
 * @param {boolean=} opt_isBubbling Флаг использования баблинга.
 */
events.Event = function(target, type, opt_isBubbling) {

  /**
   * Объект событие которого произошло.
   *
   * @protected
   * @type {!events.IEventDispatcher}
   */
  this._target = target;

  /**
   * Тип события.
   *
   * @protected
   * @type {string}
   */
  this._type = type;

  /**
   * Флаг использования баблинга.
   *
   * @protected
   * @type {boolean}
   */
  this._isBubbling = !!opt_isBubbling;

  /**
   * Флаг остановки действие по-умолчанию.
   *
   * @see events.Event#preventDefault
   * @see events.Event#isDefaultPrevented
   * @protected
   * @type {boolean}
   */
  this._isCanceled = false;

  /**
   * Флаг остановки распространения события баблингом.
   *
   * @see events.Event#stopPropagation
   * @see events.Event#isPropagationStopped
   * @protected
   * @type {boolean}
   */
  this._isStopped = false;

  /**
   * Флаг полной остановки обработки события.
   *
   * @see events.Event#stopImmediatePropagation
   * @see events.Event#isImmediatePropagationStopped
   * @protected
   * @type {boolean}
   */
  this._isImmediateStopped = false;
};


/**
 * Возврвщение объекта, с которым произошло событие.
 *
 * @return {!events.IEventDispatcher} Объект с которым произошло событие.
 */
events.Event.prototype.getTarget = function() {
  return this._target;
};


/**
 * Возвращение типа события.
 *
 * @return {string} Тип события.
 */
events.Event.prototype.getType = function() {
  return this._type;
};


/**
 * Используется ли баблинг для данного события.
 *
 * @return {boolean} Флаг использования баблинга.
 */
events.Event.prototype.isBubbling = function() {
  return this._isBubbling;
};


/**
 * Отмена обработки события по-умолчанию.
 */
events.Event.prototype.preventDefault = function() {
  this._isCanceled = true;
};


/**
 * Отменена ли обработка события по-умолчанию.
 *
 * @return {boolean} Флаг отмены обработки по-умолчанию.
 */
events.Event.prototype.isDefaultPrevented = function() {
  return this._isCanceled;
};


/**
 * Полная остановка обработки события.
 *
 * Полная остановка означает, что ни один обработчик данного события не будет
 * вызван.
 */
events.Event.prototype.stopImmediatePropagation = function() {
  this._isImmediateStopped = true;
};


/**
 * Остановлена ли полностью обработка события.
 *
 * @return {boolean} Флаг полной остановки обработки события.
 */
events.Event.prototype.isImmediatePropagationStopped = function() {
  return this._isImmediateStopped;
};


/**
 * Остановка баблинга события.
 *
 * Обработчики находящиеся выше по иерархии растпростанения вызваны не будут.
 */
events.Event.prototype.stopPropagation = function() {
  this._isStopped = true;
};


/**
 * Остановлен ли баблинг события.
 *
 * @return {boolean} Флаг остановки баблинга.
 */
events.Event.prototype.isPropagationStopped = function() {
  return this._isImmediateStopped || this._isStopped;
};
