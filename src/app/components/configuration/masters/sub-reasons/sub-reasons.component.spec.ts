import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MasterService } from 'src/app/api-services/master.service';

import { SubReasonsComponent } from './sub-reasons.component';

describe('SubReasonsComponent', () => {
  let component: SubReasonsComponent;
  let fixture: ComponentFixture<SubReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [SubReasonsComponent],
      providers: [
        BsModalRef,
        MasterService,
        DialogService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
