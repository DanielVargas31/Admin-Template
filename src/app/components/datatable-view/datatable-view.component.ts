import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DatatableDataValues } from 'src/app/shared/datatable/datatable.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-surveys',
  templateUrl: './datatable-view.component.html',
  styleUrls: ['./datatable-view.component.scss']
})
export class DatatableViewComponent implements OnInit {

  @ViewChild('actionsTemplate', { static: true }) actionsTemplate: TemplateRef<any> = {} as TemplateRef<any>;
  @ViewChild('stateTemplate', { static: true }) stateTemplate: TemplateRef<any> = {} as TemplateRef<any>;

  dataValues: Array<DatatableDataValues> = [];
  JSONdata: Array<any> = [];
  itemSelected: any = {};
  activeTabIndex: number = 0;
  modalRef?: BsModalRef;

  constructor
    (
      private modalService: BsModalService
    ) { }

  ngOnInit(): void {
    this.initializeDatatables();
  }

  initializeDatatables() {
    this.dataValues = [
      { id: '', header: 'Header' },
      { id: '', header: 'State Template', template: this.stateTemplate },
      { id: '', header: 'Date', date: true },
      { id: '', header: 'Hour', hour: true },
      { header: 'Template', template: this.actionsTemplate },
    ];
  }


}

