import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { DisclaimerComponent } from './layout/disclaimer/disclaimer.component';
import { ImprintComponent } from './layout/imprint/imprint.component';
import { PrivacyComponent } from './layout/privacy/privacy.component';
import { Error404Component } from './layout/error404/error404.component';
import { ProjectsComponent } from './layout/projects/projects.component';
import { OverviewComponent } from './layout/projects/overview/overview.component';
import { ErgoReipComponent } from './layout/projects/ergo-reip/ergo-reip.component';
import { LinkTreeComponent } from './layout/projects/link-tree/link-tree.component';
import { IosmacScaffoldingComponent } from './layout/projects/iosmac-scaffolding/iosmac-scaffolding.component';
import { ShortcutsComponent } from './layout/projects/shortcuts/shortcuts.component';
import { StousnDevComponent } from './layout/projects/stousn-dev/stousn-dev.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    data: {
      breadcrumb: {
        label: 'stefanreip.dev'
      },
    },
    children: [
      {
        path: '', component: HomeComponent,
        data: {
          breadcrumb: {
            label: 'Business Card'
          }
        }
      },
      {
        path: 'projects', component: ProjectsComponent,
        data: {
          breadcrumb: {
            label: 'Projekte',
          }
        },
        children: [
          {
            path: '', component: OverviewComponent,
            data: {
              breadcrumb: {
                label: 'Übersicht',
              }
            },
          },
          {
            path: 'ergo-reip', component: ErgoReipComponent,
            data: {
              breadcrumb: {
                label: 'Ergotherapie Reip'
              }
            }
          },
          {
            path: 'link-tree', component: LinkTreeComponent,
            data: {
              breadcrumb: {
                label: 'Persönlicher Linkbaum'
              }
            }
          },
          {
            path: 'iosmac_scaffolding', component: IosmacScaffoldingComponent,
            data: {
              breadcrumb: {
                label: 'Ionic/Electron iOS & macOS app scaffolding'
              }
            }
          },
          {
            path: 'shortcuts', component: ShortcutsComponent,
            data: {
              breadcrumb: {
                label: 'Dokumentationsystem mit iPadOS Shortcuts'
              }
            }
          },
          {
            path: 'stousn_dev', component: StousnDevComponent,
            data: {
              breadcrumb: {
                label: 'stefanreip.dev'
              }
            }
          },
          {
            path: '**',
            redirectTo: '404'
          }
        ]
      },
      {
        path: 'disclaimer', component: DisclaimerComponent,
        data: {
          breadcrumb: {
            label: 'Haftungsausschluss'
          }
        }
      },
      {
        path: 'imprint', component: ImprintComponent,
        data: {
          breadcrumb: {
            label: 'Impressum'
          }
        }
      },
      {
        path: 'privacy', component: PrivacyComponent,
        data: {
          breadcrumb: {
            label: 'Datenschutz'
          }
        }
      },
      {
        path: '404', component: Error404Component,
        data: {
          breadcrumb: {
            label: '404'
          }
        }
      },
      {
        path: '**',
        redirectTo: '404'
      }

    ]

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
