import { Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2 } from '@angular/core';
import { isDbFormat, toDMY } from '../utils/dateUtil';
import { messages } from '../constants/messages';

@Directive({
  selector: '[appFormatValue]',
  standalone: true,
})
export class FormatValue implements OnChanges {
  @Input('appFormatValue') value!: Date | string | number | null | undefined;
  @Input('appFormatvalueType') valueType: 'boolean' | 'object' | 'string' | any;

  @HostBinding('textContent') textContent: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges() {
    if (this.value === null || this.value === undefined) {
      this.textContent = '-';
      return;
    }
    switch (this.valueType) {
      case 'boolean':
        this.handleBooleanValue();
        break;
      case 'object':
      case 'string':
        this.handleDateOrText();
        break;
      default:
        this.handleDefaultValue();
    }
  }

  private handleBooleanValue() {
    this.textContent = this.value ? messages.YES : messages.NO;
  }

  private handleDateOrText() {
    const stringValue = this.value!.toString();
    this.textContent = isDbFormat(stringValue) ? toDMY(stringValue) : stringValue;
  }

  private handleDefaultValue() {
    this.textContent = this.value?.toString() || '';
  }
}
