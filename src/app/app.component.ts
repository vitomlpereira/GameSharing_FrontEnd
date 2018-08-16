import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameSharing';
  showSideMenu:boolean = false;



  onResize(event){
    var screenWidth =event.target.innerWidth ;
  
    if(screenWidth < 480){
      this.showSideMenu=true;
    }else{
      this.showSideMenu=false;
    }

  }

}
