import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  instagram = faInstagram;
  facebook = faFacebook;
  linkedIn = faLinkedin;

  constructor() { }

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

}
