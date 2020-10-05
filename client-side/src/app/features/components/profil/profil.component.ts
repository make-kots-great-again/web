import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  myPorfile = {
    username: 'Toto',
    nom: 'Foo',
    prenom: 'Bar',
    email: 'foo.bar@gmail.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
