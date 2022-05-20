import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DatatableDataValues } from 'src/app/shared/datatable/datatable.component';


@Component({
  selector: 'app-sub-reasons',
  templateUrl: './sub-reasons.component.html',
  styleUrls: ['./sub-reasons.component.scss']
})
export class SubReasonsComponent implements OnInit {

  @ViewChild('actionsTemplate', { static: true }) actionsTemplate: TemplateRef<any> = {} as TemplateRef<any>;
  title?: string;
  JSONdata: Array<any> = [];
  dataValues: Array<DatatableDataValues> = [ ];

  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.initializeDatatable();
  }

  initializeDatatable() {
    this.dataValues = [
      { header: '', template: this.actionsTemplate },
      { id: '', header: 'Header - 1' },
      { id: '', header: 'Header - 2' }
    ];
  }
}
