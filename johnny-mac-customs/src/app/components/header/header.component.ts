import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

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

}
