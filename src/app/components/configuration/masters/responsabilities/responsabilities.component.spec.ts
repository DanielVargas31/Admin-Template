import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MasterService } from 'src/app/api-services/master.service';

import { ResponsabilitiesComponent } from './responsabilities.component';

describe('ResponsabilitiesComponent', () => {
  let component: ResponsabilitiesComponent;
  let fixture: ComponentFixture<ResponsabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations: [ ResponsabilitiesComponent ],
      providers:[
        BsModalRef,
        MasterService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
