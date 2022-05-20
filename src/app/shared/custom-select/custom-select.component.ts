import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true
    }
  ]
})
export class CustomSelectComponent implements OnInit {

  @Input() dataOptions: Array<any> = [];
  @Input() customIcon: string = 'icon-Contact';
  @Input() activeIndex: number = 0;
  @Input() title: string = 'Seleccione';

  @Output() private valueChange = new EventEmitter();
  value: dropDown = {
    key: '',
    value: ''
  };

  @ViewChild('selectionArea') selectionArea: ElementRef = {} as ElementRef;
  @ViewChild('buttonSelect') buttonSelect: ElementRef = {} as ElementRef;
  onChange = (_: any) => { }
  onTouch = () => { }


  hasValue: boolean = false;
  isActive: boolean = false;
  isDisabled: boolean = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {

      if (e.target !== this.selectionArea.nativeElement && e.target !== this.buttonSelect.nativeElement) {
        this.isActive = false;
      }
    });
  }
  activateSelect() {
    this.isActive = !this.isActive;
  }

  selectItem(index: any) {

    this.isActive = false;
    this.value = {
      key: this.dataOptions[index].key,
      value: this.dataOptions[index].value
    };

    this.hasValue = true;
    this.onTouch();
    this.onChange(this.value.key);
    this.valueChange.emit(this.value.key);
  }

  writeValue(value: string): void {
    if (value) {
      const index = this.dataOptions.findIndex(x => x.key == value);
      this.selectItem(index);
    } else {
      this.hasValue = false;
      this.value = {
        key: '',
        value: '',
      };
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  ngOnInit(): void {
  }
}

export interface dropDown {
  key: any;
  value: any;
}
