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
 * @namespace
 */
var events = {};

/**
 * Версия библиотеки.
 *
 * @const
 * @type {string}
 */
events.VERSION = '0.0.1';

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
events.Event = function(target, type, opt_isBubbling) {};

/**
 * Возврвщение объекта, с которым произошло событие.
 *
 * @return {!events.IEventDispatcher} Объект с которым произошло событие.
 */
events.Event.prototype.getTarget = function() {};

/**
 * Возвращение типа события.
 *
 * @return {string} Тип события.
 */
events.Event.prototype.getType = function() {};

/**
 * Используется ли баблинг для данного события.
 *
 * @return {boolean} Флаг использования баблинга.
 */
events.Event.prototype.isBubbling = function() {};

/**
 * Отмена обработки события по-умолчанию.
 */
events.Event.prototype.preventDefault = function() {};

/**
 * Отменена ли обработка события по-умолчанию.
 *
 * @return {boolean} Флаг отмены обработки по-умолчанию.
 */
events.Event.prototype.isDefaultPrevented = function() {};

/**
 * Полная остановка обработки события.
 *
 * Полная остановка означает, что ни один обработчик данного события не будет
 * вызван.
 */
events.Event.prototype.stopImmediatePropagation = function() {};

/**
 * Остановлена ли полностью обработка события.
 *
 * @return {boolean} Флаг полной остановки обработки события.
 */
events.Event.prototype.isImmediatePropagationStopped = function() {};

/**
 * Остановка баблинга события.
 *
 * Обработчики находящиеся выше по иерархии растпростанения вызваны не будут.
 */
events.Event.prototype.stopPropagation = function() {};

/**
 * Остановлен ли баблинг события.
 *
 * @return {boolean} Флаг остановки баблинга.
 */
events.Event.prototype.isPropagationStopped = function() {};

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
 * Основной интерфейс классов генерирующих события и предоставляющих возможность
 * их обработки.
 *
 * @see events.Event
 * @see events.EventDispatcher
 * @interface
 */
events.IEventDispatcher = function() {};

/**
 * Оповещение слушателей о наступлении события.
 *
 * @see events.Event#preventDefault
 * @param {!events.Event|string} event Событие, о котором необходимо
 *        оповестить. В качестве данного аргумента может выступать либо объект
 *        события, либо тип события. В случае если передан тип события объект
 *        события должен быть создан автоматически.
 * @param {*=} opt_data Сопуствующие событию данные.
 * @return {boolean} Флаг отсутствия отмены обрабтки по-умолчанию.
 */
events.IEventDispatcher.prototype.dispatch = function(event, opt_data) {};

/**
 * Добавление обработчика события.
 *
 * Обработчиком события должна быть функция принимающая в качестве аргументов
 * объект события и сопуствующие ему данные. В случае, если сопутствующие данные
 * не были заданы в качестве данных передается <code>null</code>.
 *
 * По-умолчанию функция обработчик будет вызвана в контексте объекта который
 * оповестил о событии.
 *
 * @see events.IEventDispatcher#dispatch
 * @param {string} type Тип события который необходимо обрабатывать.
 * @param {!function(!events.Event, *=)} listener Функция-обработчик
 *        события.
 */
events.IEventDispatcher.prototype.addEventListener =
    function(type, listener) {};

/**
 * Удаление слушателя события.
 *
 * @see events.IEventDispatcher#addEventListener
 * @param {string} type Тип события который не нужно больше обрабатывать.
 * @param {!function(!events.Event, *=)} listener Функция-обработчик.
 */
events.IEventDispatcher.prototype.removeEventListener =
    function(type, listener) {};

/**
 * Проверка наличия обработчика события определенного типа.
 *
 * @param {string} type Тип события который, наличие обработчика которого
 *        следует определить.
 * @param {!function(!events.Event, *=)} listener Функция-обработчик.
 * @return {boolean} Результат проверки наличия обработчика.
 */
events.IEventDispatcher.prototype.hasEventListener =
    function(type, listener) {};

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
events.EventDispatcher = function(opt_propagationParent) {};

/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.dispatch = function(event, opt_data) {};

/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.addEventListener = function(type, listener) {};

/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.removeEventListener =
    function(type, listener) {};

/**
 * @inheritDoc
 */
events.EventDispatcher.prototype.hasEventListener = function(type, listener) {};


