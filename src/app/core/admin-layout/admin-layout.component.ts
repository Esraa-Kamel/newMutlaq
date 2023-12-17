import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from 'src/app/admin/core/services/communication.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  result = false
  isLoggedIn=false
  constructor(private communicationService: CommunicationService, private router: Router) {
    // if (this.storageService.isLoggedIn()) {
    //   this.isLoggedIn=true
    //   // this.roles = this.storageService.getUser().roles;
    // }
    // else{
    //   this.router.navigate(['/login']);
    //   this.isLoggedIn=false
    // }
    this.listenToButtonClicks(); // Never forget to call the subscribing function in the constructor, and unsubscribe OnDestroy to prevent memory leak
  }

  listenToButtonClicks() {
    this.communicationService.getData().subscribe((res) => {
      // console.log(res); 
      this.result = res// Check if you're getting the data
      // Do whatever you need to do here with the shared data
      // this.toggleSidenave(); // Call the function that toggles the Sidenav
    })
  }
}
