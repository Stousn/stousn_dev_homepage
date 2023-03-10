import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ErgoReipComponent } from './ergo-reip/ergo-reip.component';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';
import { LinkTreeComponent } from './link-tree/link-tree.component';
import { IosmacScaffoldingComponent } from './iosmac-scaffolding/iosmac-scaffolding.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { StousnDevComponent } from './stousn-dev/stousn-dev.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ProjectsComponent, ErgoReipComponent, OverviewComponent, LinkTreeComponent, IosmacScaffoldingComponent, ShortcutsComponent, StousnDevComponent]
})
export class ProjectsModule { }
