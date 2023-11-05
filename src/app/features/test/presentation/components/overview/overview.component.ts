import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExampleEntity } from 'src/app/commons/example-dialog/domain/entities/example.entity';
import { ExampleDialog } from 'src/app/commons/example-dialog/presentation/components/example-dialog/example.dialog';

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
