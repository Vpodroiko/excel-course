import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '../../core/dom';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      subscribe: ['currentText'],
      ...options
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" id="formula" contenteditable spellcheck="false"></div>
    `;
  }

  init() {
    super.init();
    this.formula = this.$root.find('#formula');
    this.$on('table:select', ($cell) => this.formula.text($cell.data.value));
  }

  storeChanged(changes) {
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text());
  }

  onClick() {
  }

  onKeydown(event) {
    const KEYS = ['Enter', 'Tab'];

    const {key} = event;

    if (KEYS.includes(key)) {
      event.preventDefault();
      this.$emit('formula:done');
    }
  }
}
