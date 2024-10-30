import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPointDialogComponent } from './add-point-dialog.component';

describe('AddPointDialogComponent', () => {
  let component: AddPointDialogComponent;
  let fixture: ComponentFixture<AddPointDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPointDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPointDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
