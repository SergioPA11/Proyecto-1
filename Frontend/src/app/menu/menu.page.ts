import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { ModalSchoolPage } from '../modal-school/modal-school.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  [x: string]: any;

  constructor(private authService: AuthService, private router: Router, private modalCtrl: ModalController,) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl("/home");
    });
  }

  config() {
    this.router.navigateByUrl("/config");
  }

  async openSchoolModal() {
    const modal = await this.modalCtrl.create({
      component: ModalSchoolPage,
      cssClass: 'my-custom-class'
    });
    modal.present();
  }

}
