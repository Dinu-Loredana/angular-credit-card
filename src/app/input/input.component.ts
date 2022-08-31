import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl; // declaring without passing initial val; use ! to avoid TS err
  // use Input decorator to receive data from the parent via 'control' property
  constructor() {}

  ngOnInit(): void {}
}
