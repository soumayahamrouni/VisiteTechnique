//Angular Core
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule,  HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
//Services
import { MarqueService } from './services/marque.service';
import { LoginService } from './services/login.service';
import { ClientService } from './services/client.service';
import { VehiculeService } from './services/vehicule.service';
import { ReservationService } from './services/reservation.service';



//Routing
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

//Layouts
import { CondensedComponent, BlankComponent, RootLayout,CorporateLayout,SimplyWhiteLayout,ExecutiveLayout, CasualLayout } from './@pages/layouts';
//Layout Service - Required
import { pagesToggleService } from './@pages/services/toggler.service';

//Shared Layout Components
import { SidebarComponent } from './@pages/components/sidebar/sidebar.component';
import { QuickviewComponent } from './@pages/components/quickview/quickview.component';
import { QuickviewService } from './@pages/components/quickview/quickview.service';
import { SearchOverlayComponent } from './@pages/components/search-overlay/search-overlay.component';
import { HeaderComponent } from './@pages/components/header/header.component';
import { HorizontalMenuComponent } from './@pages/components/horizontal-menu/horizontal-menu.component';
import { SharedModule } from './@pages/components/shared.module';
import { pgListViewModule} from './@pages/components/list-view/list-view.module';
import { pgCardModule} from './@pages/components/card/card.module';
import { pgCardSocialModule} from './@pages/components/card-social/card-social.module';
//Ngx-Charts
import {NgxChartsModule} from '@swimlane/ngx-charts';
//app Comp
import { AppHeaderComponent } from './app-header/app-header.component';
//Basic Bootstrap Modules
import {BsDropdownModule,
        AccordionModule,
        AlertModule,
        ButtonsModule,
        CollapseModule,
        ModalModule,
        ProgressbarModule,
        TabsModule,
        TooltipModule,
        TypeaheadModule,
} from 'ngx-bootstrap';

//Pages Globaly required Components - Optional
import { pgTabsModule } from './@pages/components/tabs/tabs.module';
import { pgSwitchModule } from './@pages/components/switch/switch.module';
import { ProgressModule } from './@pages/components/progress/progress.module';

//Thirdparty Dependencies - table and model
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { QuillModule } from 'ngx-quill';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { pgTimePickerModule } from './@pages/components/time-picker/timepicker.module';

import { pgDatePickerModule } from './@pages/components/datepicker/datepicker.module';
//Sample Blank Pages - Optional
import { BlankCorporateComponent } from './@pages/layouts/blank-corporate/blank-corporate.component';
import { BlankSimplywhiteComponent } from './@pages/layouts/blank-simplywhite/blank-simplywhite.component';
import { BlankCasualComponent } from './@pages/layouts/blank-casual/blank-casual.component';
import { CentresComponent } from './centres/centres.component';
import { VoituresComponent } from './voitures/voitures.component';
import { pgSelectModule} from './@pages/components/select/select.module';
import { HistoriquesComponent } from './historiques/historiques.component';
import { InfoClientComponent } from './info-client/info-client.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AuthGuard } from "./auth.guard";


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

//Hammer Config Overide
//https://github.com/angular/angular/issues/10541
export class AppHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'pinch': { enable: false },
      'rotate': { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    CondensedComponent,
    CorporateLayout,
    SimplyWhiteLayout,
    ExecutiveLayout,
    CasualLayout,
    SidebarComponent, QuickviewComponent, SearchOverlayComponent, HeaderComponent,HorizontalMenuComponent,
    BlankComponent,
    RootLayout,
    BlankCorporateComponent,
    BlankSimplywhiteComponent,
    BlankCasualComponent,
    AppHeaderComponent,
    CentresComponent,
    VoituresComponent,
    HistoriquesComponent,
    InfoClientComponent,
    ReservationComponent,
    
    
  ],
  imports: [
    pgDatePickerModule,
    pgTimePickerModule,
    pgSelectModule,
    NgxDatatableModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
      HttpClientModule,
    SharedModule,
    ProgressModule,
    pgListViewModule,
    pgCardModule,
    pgCardSocialModule,
    RouterModule.forRoot(AppRoutes),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    pgTabsModule,
    PerfectScrollbarModule,
    pgSwitchModule,
    QuillModule,
    NgxChartsModule
  ],
  providers: [QuickviewService,pagesToggleService,MarqueService,LoginService,ClientService,VehiculeService,ReservationService,AuthGuard,{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  },
  {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: AppHammerConfig
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
