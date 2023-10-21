import { Component, OnInit } from '@angular/core';
import { FilterExampleEntity } from '../../../domain/entities/filter-example.entity';

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
    this.b = [ this.a[0] ]
  }

  ngOnInit(): void {
  }

  /**
   * @deprecated use notExists pipe instead of notExists function
   */
  notExists(a: FilterExampleEntity[], b: FilterExampleEntity[]) {
    let result = a.filter(e1 => !b.find(e2 => e2 === e1));
    console.warn('deprecated notExists function called');
    return result;
  }
}
