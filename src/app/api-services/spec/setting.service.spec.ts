import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SettingService } from '../setting.service';

describe('ConfigurationService', () => {
  let service: SettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(SettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
