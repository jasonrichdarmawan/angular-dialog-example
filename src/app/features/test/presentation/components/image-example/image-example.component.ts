import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-example',
  templateUrl: './image-example.component.html',
  styleUrls: ['./image-example.component.scss']
})
export class ImageExampleComponent implements OnInit {
  private oneOrZero: number = Math.round(Math.random());

  constructor() { }

  ngOnInit(): void {
  }

  getBank(): { logoUrl: string } | undefined {
    if (this.oneOrZero == 0) { return undefined }

    return { logoUrl: "favicon.ico" }
  }

}
