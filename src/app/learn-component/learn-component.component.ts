import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-learn-component',
  templateUrl: './learn-component.component.html',
  styleUrls: ['./learn-component.component.css']
})
export class LearnComponentComponent{

  @Input() public parentData: any;
  @Output() public childEvent = new EventEmitter();
  
  public name = "Yusril Mahendri";
  public nama = '';
  public names ='belajar pipes';
  public textId = "1800018397";
  public textSuccess = "textGreen";
  public buah = "jes";
  public buahKu = ["anggur", "melon", "anggur", "appel"];
  public isError = true;
  public isBold= true;
  public displayText = false;
 
  // nginx clas 
  public messageText = {
    "textGreen": this.isError,
    "textRed": this.isError,
    "textBold": this.isBold
  }

  // style binding 
  textGreen = 'green';
  public textStyle = {
    color: 'orange',
    fontStyle: 'italic',
  }

  constructor() { }
  
  getUser(){
    return 'Hallo' + this.name;
  }

  // event bindings
  onClick(event?: any){
    console.info('hi, how do yo do');
    console.log(event);
    this.name = "Yusril mahendri";
  }

  // references variabel 
  onInput(value: string): void{
   console.log(value);
   this.name = value;
  }

  // evenet emitters
  sendEvent(){
    this.childEvent.emit("event from child component this learn-component-learn-component");
  }


}
