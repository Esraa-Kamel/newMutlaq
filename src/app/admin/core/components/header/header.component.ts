import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private communicationService: CommunicationService, private router: Router) {}
  status = false
  addToggle() {
    this.communicationService.sendData(this.status=!this.status);
  }
  logout(){
      // this.authService.logout();
      // this.storageService.clean();
        this.router.navigate(['/login']);
  }
  register(){
        this.router.navigate(['/login/register']);
  }
}
