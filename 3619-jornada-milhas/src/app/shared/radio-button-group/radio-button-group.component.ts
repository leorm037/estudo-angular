import { Component, EventEmitter, forwardRef, Input, OnChanges, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioOption } from 'src/app/core/types/type';


@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonGroupComponent),
      multi: true
    }
  ]
})
export class RadioButtonGroupComponent implements ControlValueAccessor, OnChanges {
  @Input() options: RadioOption[] = [];

  @Input() defaultValue!: RadioOption;

  @Input() flexDirection: 'row' | 'column' = 'column';

  @Output() selectionChange = new EventEmitter<RadioOption>();

  radioOption!: RadioOption;
  onChange!: (value: RadioOption)=> void;
  onTouched!: ()=> void;
  disabled = false;

  ngOnChanges(): void {
    if (this.defaultValue) {
      this.onSelect(this.defaultValue);
    }
  }

  writeValue(value: RadioOption): void {
    this.radioOption = value;
  }

  registerOnChange(fn: (value: RadioOption)=> void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: ()=> void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelect(option: RadioOption): void {
    if (!this.disabled) {
      this.radioOption = option;

      if (this.onChange) {
        this.onChange(this.radioOption);
      }

      if (this.onTouched) {
        this.onTouched();
      }

      this.selectionChange.emit(this.radioOption);
    }
  }

  get flexGap(): string {
    return this.flexDirection === 'column' ? '10px' : '40px';
  }
}
