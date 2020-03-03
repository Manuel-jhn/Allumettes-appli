import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AllumettesSharedModule } from 'app/shared/shared.module';
import { AllumettesCoreModule } from 'app/core/core.module';
import { AllumettesAppRoutingModule } from './app-routing.module';
import { AllumettesHomeModule } from './home/home.module';
import { AllumettesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AllumettesSharedModule,
    AllumettesCoreModule,
    AllumettesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AllumettesEntityModule,
    AllumettesAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class AllumettesAppModule {}
