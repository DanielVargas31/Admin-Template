import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Settings } from 'src/app/models/settings';
import { DatatableDataValues } from 'src/app/shared/datatable/datatable.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  @ViewChild('actionsTemplate', { static: true }) actionsTemplate: TemplateRef<any> = {} as TemplateRef<any>;
  @ViewChild('stateTemplate', { static: true }) stateTemplate: TemplateRef<any> = {} as TemplateRef<any>;

  public bsConfig: Partial<BsDatepickerConfig> = new BsDatepickerConfig();
  dataValues: Array<DatatableDataValues> = [];
  JSONdata: Array<Settings> = [];
  modalTitle: string = '';
  modalRef?: BsModalRef;
  modalConfig = {
    ignoreBackdropClick: true,
    class: 'modal-lg',
    keyboard: false
  };
  submitted: boolean = false;
  bsOptions: Partial<BsDatepickerConfig> = { dateInputFormat: 'DD/MM/YYYY', maxDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1) };
  constructor(

    private modalService: BsModalService,
    ) { }

  ngOnInit(): void {
    this.initializeDatatable();
  }

  initializeDatatable() {
    this.dataValues = [
      { header: '', template: this.actionsTemplate },
      { id: '', header: 'Canal' },
      { id: '', header: 'Fecha Inicial', date: true },
      { id: '', header: 'Estado', template: this.stateTemplate },
    ];
  }


  openModal(template: TemplateRef<any>, isEditable: boolean, id?: any) {
    this.modalRef = this.modalService.show(template, this.modalConfig);

  }
}
