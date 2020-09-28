import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.background = '#ffffff';//'linear-gradient(135deg, #ffffff, ' + '#979797' + ')';
    // document.body.getElementsByClassName('titleBlock').item(0)
  }

}
