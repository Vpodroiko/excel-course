import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.unsubsribers = [];
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.storeSub = null;

    this.prepare()
  }

  toHTML() {
    return '';
  }

  prepare() {

  }

  init() {
    this.initDOMListeners();
  }

  // Notify listeners about events

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubsribers.push(unsub);
  }

  storeChanged() {

  }

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubsribers.forEach((unsub) => unsub());
  }
}
