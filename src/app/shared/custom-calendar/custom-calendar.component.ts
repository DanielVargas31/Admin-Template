import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomCalendarComponent),
      multi: true
    }
  ]
})
export class CustomCalendarComponent implements OnInit {

  JSONMonths: Array<MonthsType> = [
    { name: 'Ene' },
    { name: 'Feb' },
    { name: 'Mar' },
    { name: 'Abr' },
    { name: 'May' },
    { name: 'Jun' },
    { name: 'Jul' },
    { name: 'Ago' },
    { name: 'Sep' },
    { name: 'Oct' },
    { name: 'Nov' },
    { name: 'Dic' },
  ];
  today: Date = new Date();
  dateSelected: Date = new Date();
  activeMonth: number = 0;
  monthDisabled: number = 0;

  @Output() private valueChange = new EventEmitter();
  onChange = (_: any) => { }
  onTouch = () => { }
  value: DatesType = {
    dateStart: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
    dateEnd: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
  }
  isDisabled: boolean = false;

  constructor() {
    this.activeMonth = this.today.getMonth();
    this.monthDisabled = this.today.getMonth() + 1;
  }

  ngOnInit(): void {
  }

  selectMonth(index: number) {
    this.activeMonth = index;
    this.dateSelected = new Date(this.dateSelected.getFullYear(), this.activeMonth, 1);
    this.emitValue();
  }

  lastMonth() {

    this.dateSelected = new Date(this.dateSelected.getFullYear() - 1, 0, 1);
    if (this.dateSelected.getFullYear() == this.today.getFullYear()) {
      this.activeMonth = this.today.getMonth();
      this.monthDisabled = this.today.getMonth() + 1;
      this.dateSelected = new Date(this.dateSelected.getFullYear(), this.activeMonth, 1);
    } else {
      this.activeMonth = this.dateSelected.getMonth();
      this.monthDisabled = this.dateSelected.getMonth();
      this.dateSelected = new Date(this.dateSelected.getFullYear(), this.activeMonth, 1);
    }
    this.emitValue();
  }

  nextMonth() {
    this.dateSelected = new Date(this.dateSelected.getFullYear() + 1, 0, 1);
    if (this.dateSelected.getFullYear() == this.today.getFullYear()) {
      this.activeMonth = this.today.getMonth();
      this.monthDisabled = this.today.getMonth() + 1;
      this.dateSelected = new Date(this.dateSelected.getFullYear(), this.activeMonth, 1);
    } else {
      this.activeMonth = this.dateSelected.getMonth();
      this.monthDisabled = this.dateSelected.getMonth();
      this.dateSelected = new Date(this.dateSelected.getFullYear(), this.activeMonth, 1);
    }

    this.emitValue();
  }

  validateNext() {
    if ((this.dateSelected.getFullYear() + 1) > (this.today.getFullYear())) {
      return false;
    }
    return true;
  }

  emitValue() {

    this.value = {
      dateStart: new Date(this.dateSelected.getFullYear(), this.dateSelected.getMonth(), 1),
      dateEnd: new Date(this.dateSelected.getFullYear(), this.dateSelected.getMonth() + 1, 0),
    };

    this.onTouch();
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  writeValue(value: string): void {
    if (value) {
      this.emitValue();
    } else {

      this.value = {
        dateStart: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        dateEnd: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
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
}

export interface MonthsType {
  name: string;
}

export interface DatesType {
  dateStart: Date;
  dateEnd: Date;
}

