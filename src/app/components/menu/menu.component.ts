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
      titre: 'Voitures',
      icon: 'fa-solid fa-boxes-stacked',
      url: '',
      sousMenus: [
        {
          id: '21',
          titre: 'Voiture',
          icon: 'fa-solid fa-cubes-stacked',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Maintenance',
          icon: 'fa-solid fa-dolly',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa-solid fa-users-line',
      url: '',
      sousMenus: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fa-solid fa-users',
          url: 'clients'
        },
        {
          id: '32',
          titre: 'Commande clients',
          icon: 'fa-solid fa-basket-shopping',
          url: 'commande-client'
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-users-between-lines',
      url: '',
      sousMenus: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'fa-solid fa-users',
          url: 'fournisseurs'
        },
        {
          id: '42',
          titre: 'Commande fournisseur',
          icon: 'fa-solid fa-truck',
          url: 'commande-fournisseur'
        }
      ]
    },
    {
      id: '5',
      titre: 'Ventes',
      icon: 'fa-solid fa-users-between-lines',
      url: '',
      sousMenus: [
        {
          id: '51',
          titre: 'Vente',
          icon: 'fa-solid fa-users',
          url: 'vente'
        },
        {
          id: '52',
          titre: 'Historique',
          icon: 'fa-solid fa-truck',
          url: 'liste-vente'
        }
      ]
    },
    {
      id: '6',
      titre: 'Parametrages',
      icon: 'fa-solid fa-screwdriver-wrench',
      url: '',
      sousMenus: [
        {
          id: '61',
          titre: 'Categories',
          icon: 'fa-solid fa-gear',
          url: 'categories'
        },
        {
          id: '62',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-users-gear',
          url: 'utilisateurs'
        }
      ]
    },
    {
      id: '7',
      titre: 'Deconnection',
      icon: 'fa-solid fa-right-from-bracket fa-rotate-180',
      url: 'logout'
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

}
