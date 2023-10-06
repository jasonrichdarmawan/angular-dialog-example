import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExampleDialog } from '../example-dialog/example.dialog';
import { ExampleEntity } from '../../../domain/entities/example.entity';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  animal!: string;
  name!: string;
  isChecked: boolean;

  constructor(public dialog: MatDialog) {
    this.isChecked = true
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExampleDialog, {
      data:
        {
          name: this.name,
          animal: this.animal,
          isChecked: this.isChecked,
        } as ExampleEntity,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (result === undefined) { return };

      this.name = result.name
      this.animal = result.animal;
      this.isChecked = result.isChecked;
    });
  }

}
