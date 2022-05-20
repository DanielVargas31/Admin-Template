import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomFilterPipe } from 'src/app/pipes/custom-filter.pipe';
import { CustomSelectSearchComponent } from './custom-select-search.component';

describe('CustomSelectSearchComponent', () => {
  let component: CustomSelectSearchComponent;
  let fixture: ComponentFixture<CustomSelectSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSelectSearchComponent, CustomFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSelectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
