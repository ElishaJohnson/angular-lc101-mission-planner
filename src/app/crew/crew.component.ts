import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [];
  image: string = '';

  candidates: object[] = [
    { name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg' },
    { name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg' },
    { name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg' },
    { name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg' },
    { name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg' },
    { name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg' },
    { name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg' }
  ];

  constructor() { }

  ngOnInit() { }

  onCrew(name: string, clicked: boolean) { // clicked=true removes member from crew
    let alreadyOnCrew = false;
    for (let i = 0; i < this.crew.length; i++) {
      if (name === this.crew[i].name) {
        alreadyOnCrew = true;
        if (clicked) {
          this.crew.splice(i, 1);
        }
      }
    }
    return alreadyOnCrew;
  }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate) {
    if (!this.onCrew(candidate.name, true) && this.crew.length < 3) {
      this.crew.push(candidate);
    }
  }

  getNameFromImage(image: string): string {
    for (let i = 0; i < this.candidates.length; i++) {
      if (image === this.candidates[i].photo) {
        return this.candidates[i].name;
      }
    }
    return "";
  }
}
