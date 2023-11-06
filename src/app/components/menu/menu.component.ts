import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menus: Array<Menu> = [
    {
      id: '1',
      icon: 'fa-solid fa-gauge',
      titre: 'Tableau de bord',
      url: '',
      sousMenus: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: 'fa-solid fa-chart-pie',
          url: 'dashbord'
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fa-solid fa-chart-line',
          url: 'statistiques'
        }
      ]
    },
    {
      id: '2',
      titre: 'Clients',
      icon: 'fa-solid fa-boxes-stacked',
      url: '',
      sousMenus: [
        {
          id: '21',
          titre: 'Nouveau',
          icon: 'fa-solid fa-cubes-stacked',
          url: 'nouveau-client'
        },
        {
          id: '22',
          titre: 'List',
          icon: 'fa-solid fa-dolly',
          url: 'list-client'
        }
      ]
    },
    {
      id: '3',
      titre: 'Voitures',
      icon: 'fa-solid fa-boxes-stacked',
      url: '',
      sousMenus: [
        {
          id: '31',
          titre: 'Voiture',
          icon: 'fa-solid fa-cubes-stacked',
          url: 'articles'
        },
        {
          id: '32',
          titre: 'Maintenance',
          icon: 'fa-solid fa-dolly',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '4',
      titre: 'Reservations',
      icon: 'fa-solid fa-users-line',
      url: '',
      sousMenus: [
        {
          id: '41',
          titre: 'Nouveau',
          icon: 'fa-solid fa-users',
          url: 'clients'
        },
        {
          id: '42',
          titre: 'Details',
          icon: 'fa-solid fa-basket-shopping',
          url: 'reservation'
        }
      ]
    }
  ];

  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu) {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.router.navigate([menu.url]);
    this.lastSelectedMenu = menu;
  }

  logoutApp() {
    //this.userService.logout();
  }

}
