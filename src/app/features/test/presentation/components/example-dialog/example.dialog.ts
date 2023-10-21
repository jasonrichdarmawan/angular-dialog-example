import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExampleEntity } from '../../../domain/entities/example.entity';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example.dialog.html',
  styleUrls: ['./example.dialog.scss']
})
export class ExampleDialog implements OnInit {
  selectedCar?: number;
  cars: { id: number, name: string }[]

  constructor(
    public dialogRef: MatDialogRef<ExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ExampleEntity
  ) {
    this.cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
    ]
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(data: ExampleEntity) {
    this.dialogRef.close(data);
  }
}
