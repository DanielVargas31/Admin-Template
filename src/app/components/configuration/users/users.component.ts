import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { DatatableDataValues } from 'src/app/shared/datatable/datatable.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Roles } from 'src/app/models/role';

import { States } from 'src/app/models/drop-down';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild('actionsTemplate', { static: true }) actionsTemplate: TemplateRef<any> = {} as TemplateRef<any>;


  states: Array<States> = [
    { key: true, value: 'Activo' },
    { key: false, value: 'Inactivo' }
  ]

  dataValues: Array<DatatableDataValues> = [];
  JSONdata: Array<User> = [];
  onEdit: boolean = false;
  modalTitle: string = '';
  modalRef?: BsModalRef;
  modalConfig = {
    ignoreBackdropClick: true,
    class: 'modal-lg'
  };
  submitted: boolean = false;


  constructor(
    private modalService: BsModalService,
    ) { }

  ngOnInit(): void {
    this.initializeDatatable();
    
  }

  initializeDatatable() {
    this.dataValues = [
      { header: '', template: this.actionsTemplate },
      { id: '', header: 'Usuario' },
      { id: '', header: 'Nombre' },
      { id: '', header: 'Estado', boolean: true },
    ];
  }

  openModal(template: TemplateRef<any>, isEditable: boolean, id?: any) {
    
    this.modalTitle = isEditable ? 'Editar Usuario' : 'Crear usuario';
    this.onEdit = isEditable;

    if (!isEditable) {
      this.modalRef = this.modalService.show(template, this.modalConfig);
    } 
  }

}
