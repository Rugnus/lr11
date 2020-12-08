import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Detector } from './shared/models/detector.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  // title = 'Lab1';
  // myNumber = 10;
  // flag = true;
  // buttonEnabled = false;

  // blockx = 0;
  // blocky = 0;

  // fontSize = 15;

  // someArray: string[] = [
  //   'Первый', 'Второй', 'Третий'
  // ]

  dets: Detector[];

  // dets = new Detector();

  // inputValue = '';

  // @ViewChild('someInput')
  // someInputName: ElementRef;

  constructor() {
    // setTimeout(() => {
    //   this.buttonEnabled = true;
    //   this.fontSize = 20;
    // }, 1000);
  }


  // ngOnInit() {
  //   console.log(this.someInputName);
  // }

  // ngAfterViewInit() {
  //   console.log(this.someInputName);
  // }

  // getCoords(e: MouseEvent) {
  //   this.blockx = e.offsetX;
  //   this.blocky = e.offsetY;
  // }

  // getData(elm: HTMLInputElement) {
  //   console.log(this.someInputName.nativeElement.value);
  // }
}
