import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiComponent } from './certifi.component';

describe('CertifiComponent', () => {
  let component: CertifiComponent;
  let fixture: ComponentFixture<CertifiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertifiComponent]
    });
    fixture = TestBed.createComponent(CertifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
