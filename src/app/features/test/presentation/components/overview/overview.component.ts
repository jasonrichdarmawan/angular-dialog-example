import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { DialogExampleModel } from '../../../domain/entities/dialog-example-model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {
    this.animal = "Dog"
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      data: { name: this.name, animal: this.animal } as DialogExampleModel,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (result === undefined) { return };

      this.animal = result;
    });
  }

}
