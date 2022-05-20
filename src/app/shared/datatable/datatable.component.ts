import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'ol-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() dataFilled: boolean = false;
  @Input() editable: boolean = false;
  @Input() JSONdata: Array<any> = [];
  @Input() dataValues: Array<DatatableDataValues> = [];
  @Input() itemsPerPage: number = 10;
  @Input() keyValue: string = '';
  @Input() paginatePosition: string = 'top';
  @Input() filter: boolean = false;
  searcherText: string = '';

  currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface DatatableDataValues {
  id?: string;
  header?: string;
  currency?: boolean;
  date?: boolean;
  hour?: boolean;
  template?: TemplateRef<any>;
  boolean?: boolean;
}
