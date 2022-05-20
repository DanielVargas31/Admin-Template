import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { DatatableDataValues } from 'src/app/shared/datatable/datatable.component';

@Component({
  selector: 'app-responsabilities',
  templateUrl: './responsabilities.component.html',
  styleUrls: ['./responsabilities.component.scss']
})
export class ResponsabilitiesComponent implements OnInit {

  @ViewChild('actionsTemplate', { static: true }) actionsTemplate: TemplateRef<any> = {} as TemplateRef<any>;
  title?: string;
  JSONdata: Array<any> = [];
  dataValues: Array<DatatableDataValues> = [];
  onEdit: boolean = false;
  onSwitch: boolean = false;
  submitted: boolean = false;

  constructor( public bsModalRef: BsModalRef ) { }

  ngOnInit(): void {
    this.initializeDatatable();
  }

  initializeDatatable() {
    this.dataValues = [
      { id: '', header: 'Descripción' },
    ];
  }

}
