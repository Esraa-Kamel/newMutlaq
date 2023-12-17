import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  result = false
  constructor(private communicationService: CommunicationService) {
    this.listenToButtonClicks(); // Never forget to call the subscribing function in the constructor, and unsubscribe OnDestroy to prevent memory leak
  }

  listenToButtonClicks() {
    this.communicationService.getData().subscribe((res) => {
      console.log(res); 
      this.result = res// Check if you're getting the data
      // Do whatever you need to do here with the shared data
      // this.toggleSidenave(); // Call the function that toggles the Sidenav
    })
  }
}
