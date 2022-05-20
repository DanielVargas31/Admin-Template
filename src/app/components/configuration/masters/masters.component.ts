import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ReasonsComponent } from './reasons/reasons.component';
import { ResponsabilitiesComponent } from './responsabilities/responsabilities.component';
import { SubReasonsComponent } from './sub-reasons/sub-reasons.component';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  bsModalRef?: BsModalRef;
  components: any = {
    reasons: ReasonsComponent,
    subreasons: SubReasonsComponent,
    responsabilities: ResponsabilitiesComponent
  }

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  openModalWithComponent(component: string, title: string) {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title
      },
      ignoreBackdropClick: true,
      class: 'modal-lg'
    };
    this.bsModalRef = this.modalService.show(component, initialState);
  }

}
