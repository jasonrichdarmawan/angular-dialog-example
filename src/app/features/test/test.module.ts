import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { DialogPageComponent } from './presentation/pages/dialog-page/dialog-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OverviewComponent } from './presentation/components/overview/overview.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogExampleComponent } from './presentation/components/dialog-example/dialog-example.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BankdetailComponent } from './presentation/components/bankdetail/bankdetail.component';
import { ImageExampleComponent } from './presentation/components/image-example/image-example.component';

@NgModule({
  declarations: [
    DialogPageComponent,
    OverviewComponent,
    DialogExampleComponent,
    BankdetailComponent,
    ImageExampleComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule,

    // TODO: standalone component in Angular 14 for DialogPageComponent
    MatSlideToggleModule,
    MatIconModule,

    // TODO: standalone component in Angular 14 for DialogExampleComponent and OverviewComponent
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule, // for css and action (without this dialog will not close when (click) or [mat-dialog-close])
    FormsModule,
    MatButtonModule, // for css
  ]
})
export class TestModule { }
