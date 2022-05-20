import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalService } from 'ngx-bootstrap/modal';
import { MasterService } from 'src/app/api-services/master.service';


import { DatatableViewComponent } from './datatable-view.component';

describe('SurveysComponent', () => {
  let component: DatatableViewComponent;
  let fixture: ComponentFixture<DatatableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [DatatableViewComponent],
      providers: [
        BsModalService,
        MasterService,
  
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
