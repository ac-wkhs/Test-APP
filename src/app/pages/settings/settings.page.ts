import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class Settings {
ToggleEventChange(){
  document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")){
    this.presentToast("bottom");
  } else{
    this.presentToastOff("bottom");
  }
}

constructor(private toastController: ToastController){}

async presentToastOff(position: 'top' | 'middle' | 'bottom'){
  const toast = await this.toastController.create({
    message: 'Dark Mode Disabled',
    duration: 1000,
    position: position,
    buttons: [{
      text: "Undo",
      role: "undo",
      handler: () => {
        document.body.classList.toggle("dark");
      }
    }]
    });   

await toast.present();
}
async presentToast(position: 'top' | 'middle' | 'bottom') {
  const toast = await this.toastController.create({
    message: 'Dark Mode Enabled',
    duration: 1000,
    position: position,
    buttons: [{
      text: "Undo",
      role: "undo",
      handler:() => {
        document.body.classList.toggle("dark");
      }
      }
    ]
  });
  await toast.present();
}
}

export class Account{
  
}