import { LightningElement,track } from 'lwc';

export default class Hver extends LightningElement {


@track className='bar1';
  hoverHandler(event){
   /*  alert(event.target.value) */
   this.className='bar'+event.target.value;
  }
  leaveHandler(){
    /*  alert(event.target.value) */
    this.className='bar1';
   }
   selectHandler(){
    
   }
}