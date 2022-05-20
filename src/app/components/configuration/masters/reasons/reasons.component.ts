import { Component, OnInit} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
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
