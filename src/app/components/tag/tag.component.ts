import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {

  @Input() label: string
  @Input() color: string
  @Input() margin: string = 'left'
 
  constructor() { }

  ngOnInit() {}

}
