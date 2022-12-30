import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforamationFormComponent } from './inforamation-form.component';

describe('InforamationFormComponent', () => {
  let component: InforamationFormComponent;
  let fixture: ComponentFixture<InforamationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforamationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforamationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
