import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'qc.page.html',
  styleUrls: ['qc.page.scss'],
})
export class QC {

QCitems = [
  {id:0, name: "QC-Pierremont", location: "1666 E. Bert Kouns Industrial Loop Shreveport, LA 71105", route: "https://goo.gl/maps/ccKF6L983ph3AAsb6"},
  {id:1, name: "QC-Bossier", location: "2300 Hospital Drive Bossier City, LA 71111", route:"https://goo.gl/maps/tHnqzJUxyxdhhNSG6"},
  {id:2, name: "QC-Palmetto", location: "Benton", route:"https://goo.gl/maps/mTU9L4Ae7m782bLk7"},
  {id:3, name: "QC-South", location: "Shreveport", route:"https://goo.gl/maps/FZy4aMgF246RTiyC7"}
]
}
