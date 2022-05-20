import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropDown } from 'src/app/models/drop-down';

@Component({
  selector: 'custom-select-search',
  templateUrl: './custom-select-search.component.html',
  styleUrls: ['./custom-select-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectSearchComponent),
      multi: true
    }
  ]
})
export class CustomSelectSearchComponent implements OnInit {

  @Input() dataOptions: Array<DropDown> = [];
  @Input() customIcon: string = 'icon-Contact';
  @Input() activeIndex: number = 0;
  @Input() title: string = 'Seleccione';

  @Output() private valueChange = new EventEmitter();
  value: DropDown = {
    key: '',
    value: ''
  };

  @Output() private onActive = new EventEmitter();

  @ViewChild('selectionArea') selectionArea: ElementRef | undefined = undefined;
  @ViewChild('buttonSelect') buttonSelect: ElementRef | undefined = undefined;
  @ViewChild('inputSearchBar') inputSearchBar: ElementRef | undefined = undefined;
  onChange = (_: any) => { }
  onTouch = () => { }

  hasValue: boolean = false;
  isActive: boolean = false;
  isDisabled: boolean = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {

      if (e.target !== this.selectionArea?.nativeElement && e.target !== this.buttonSelect?.nativeElement) {
        this.isActive = false;
        this.onActive.emit(this.isActive);
      }
    });
  }
  activateSelect() {
    this.isActive = !this.isActive;
    this.onActive.emit(this.isActive);
    setTimeout(() => this.inputSearchBar?.nativeElement.focus());
  }

  selectItem(key: any) {

    this.isActive = false;
    this.onActive.emit(this.isActive);

    this.value = this.dataOptions.find(x => x.key == key)!;

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