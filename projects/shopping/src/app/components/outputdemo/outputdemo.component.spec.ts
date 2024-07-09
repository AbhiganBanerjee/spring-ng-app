import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputdemoComponent } from './outputdemo.component';

describe('OutputdemoComponent', () => {
  let component: OutputdemoComponent;
  let fixture: ComponentFixture<OutputdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputdemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
