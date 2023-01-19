import {Component} from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
    {name: 'mahmood', age: '27', job: 'designer'},
    {name: 'reza', age: '29', job: 'developer'},
    {name: 'sara', age: '15', job: 'manager'}
  ];
  header = [
    {key: 'name', value: 'Name'},
    {key: 'job', value: 'Job'},
    {key: 'age', value: 'Age'},
  ]
}
