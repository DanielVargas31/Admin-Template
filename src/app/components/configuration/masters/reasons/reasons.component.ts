import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Reasons } from 'src/app/models/reasons';
import { Responsabilities } from 'src/app/models/responsabilities';
import { DatatableDataValues } from 'src/app/shared/datatable/datatable.component';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent implements OnInit {

  title?: string;
  JSONdata: Array<any> = [];
  dataValues: Array<DatatableDataValues> = [];

  constructor( public bsModalRef: BsModalRef ) { }

  ngOnInit(): void {
    this.initializeDatatable();
  }

  initializeDatatable() {
    this.dataValues = [
      { id: '', header: 'Header' },
    ];
  }  
}
