import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDialog } from './example.dialog';

describe('ExampleDialog', () => {
  let component: ExampleDialog;
  let fixture: ComponentFixture<ExampleDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
