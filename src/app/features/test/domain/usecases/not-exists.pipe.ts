import { Pipe, PipeTransform } from '@angular/core';
import { FilterExampleEntity } from '../entities/filter-example.entity';

@Pipe({
  name: 'notExists'
})
export class NotExistsPipe implements PipeTransform {

  transform(a: FilterExampleEntity[], b: FilterExampleEntity[]): FilterExampleEntity[] {
    let result = a.filter(e1 => !b.find(e2 => e2 === e1));
    console.log('notExists Pipe');
    return result;
  }

}
