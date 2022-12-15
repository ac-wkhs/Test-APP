import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuType: string = "reveal";

  menuItems = [
  {id:0, name: "Quick Care", route: "/qc"},
  {id:1, name: "Emergency Room"},
  {id:2, name: "Medical Centers"},
]
  trackItems(index:number, itemObject: any){
    return itemObject.id;
  }
}

