import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExampleEntity } from '../../../domain/entities/example.entity';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example.dialog.html',
  styleUrls: ['./example.dialog.scss']
})
export class ExampleDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ExampleEntity
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
