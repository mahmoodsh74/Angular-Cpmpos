import {Component} from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
    {name: 'mahmood', age: '27', job: 'designer', employed: true},
    {name: 'reza', age: '29', job: 'developer', employed: true},
    {name: 'sara', age: '15', job: 'manager', employed: false}
  ];
  headers = [
    {key: 'name', value: 'Name', show: true},
    {key: 'job', value: 'Job', show: true},
    {key: 'age', value: 'Age', show: true},
    {key: 'employed', value: 'Employed', show: false},
  ]
}
