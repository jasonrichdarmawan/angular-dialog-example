import { Component, OnInit } from '@angular/core';

interface FilterExampleEntity {
  name: string
}

@Component({
  selector: 'app-filter-example',
  templateUrl: './filter-example.component.html',
  styleUrls: ['./filter-example.component.scss']
})
export class FilterExampleComponent implements OnInit {
  a: FilterExampleEntity[];
  b: FilterExampleEntity[];


  constructor() {
    this.a = [ { name: "A" }, { name: "B" } ]
    this.b = [ { name: "A" } ]
  }

  ngOnInit(): void {
  }

  notExists(a: FilterExampleEntity[], b: FilterExampleEntity[]) {
    let result = a.filter(e1 => !b.find(e2 => e2 === e1));
    console.log(result);
    return result;
  }
}
