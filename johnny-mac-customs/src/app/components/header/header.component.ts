import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() hasToggled = new EventEmitter<boolean>();

  instagram = faInstagram;
  facebook = faFacebook;
  linkedIn = faLinkedin;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  openSocialMediaLink(platform: string) {
    switch (platform) {
      case 'IG':
        window.open('https://www.instagram.com/johnnymackcustoms/?hl=en', '_blank');
        break;
      case 'FB':
        window.open('https://www.facebook.com/JohnnyMack-Customs-2019200038391253/', '_blank');
        break;
      case 'LI':
        window.open('https://www.linkedin.com/in/johnny-mack-customs-66b186169/', '_blank');
        break;
    }
  }

  toggleMenu() {
    this.sidenavService.toggle();
  }

}
