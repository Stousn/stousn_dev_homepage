import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

export interface Breadcrumb {
  label: string;
  link: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent  {

  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.breadcrumbs = [];
        this.buildBreadcrumb(this.activatedRoute);
      }
    });
  }

  buildBreadcrumb(currentAR: ActivatedRoute): void {
    // Für jede Route, die einen definierten breadcrumb hat ...
    if (currentAR.snapshot.data.breadcrumb) {
      // ... nehme, falls vorhaden, vom letzten Breadcrumb den bisherigen Path
      const lastBCLink =
        this.breadcrumbs.length !== 0
          ? this.breadcrumbs[this.breadcrumbs.length - 1].link
          : '';

      // ... füge den aktuellen hinzu ...
      let currentBCLink = '';
      if (currentAR.routeConfig.path.startsWith(':')) {
        // ... entweder, bei dynamischen Routen, dank dem Resolver
        currentBCLink = currentAR.snapshot.data.breadcrumb.link;
      } else {
        // ... oder, bei statischen Routen, aus der RouteConfig
        currentBCLink = currentAR.routeConfig.path || '';
      }

      // ... füge den aktuellen Breadcrumb ins Breadcrumbs-Array hinzu
      this.breadcrumbs.push({
        label: currentAR.snapshot.data.breadcrumb.label,
        link: lastBCLink + '/' + currentBCLink,
      } as Breadcrumb);
    }

    // ... und wiederhole das ganze rekursiv für alle folgenden RouteChildren
    if (currentAR.firstChild !== null) {
      this.buildBreadcrumb(currentAR.firstChild);
    }
  }

}
