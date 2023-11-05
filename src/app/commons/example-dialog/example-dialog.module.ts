import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDialog } from './presentation/components/example-dialog/example.dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    ExampleDialog
  ],
  imports: [
    CommonModule,

    // TODO: standalone component in Angular 14 for ExampleDialog and OverviewComponent
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule, // for css and action (without this dialog will not close when (click) or [mat-dialog-close])
    FormsModule,
    MatButtonModule, // for css

    // TODO: standalone component in Angular 14 for ExampleDialog
    MatCheckboxModule,
    NgSelectModule,
    FormsModule,
  ]
})
export class ExampleDialogModule { }
