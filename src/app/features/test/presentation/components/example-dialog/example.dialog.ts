import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogExampleModel as DialogExampleEntity } from '../../../domain/entities/dialog-example-model';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example.dialog.html',
  styleUrls: ['./example.dialog.scss']
})
export class ExampleDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogExampleEntity
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
