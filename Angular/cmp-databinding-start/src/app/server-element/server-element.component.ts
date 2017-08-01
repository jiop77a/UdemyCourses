import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called!')
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!')
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);

  }

  ngOnInit() {
    console.log('ngOnInit called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!')
  }
}
