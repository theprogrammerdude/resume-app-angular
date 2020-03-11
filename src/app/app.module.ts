import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TooltipModule } from "ng2-tooltip-directive";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { AboutComponent } from "./views/about/about.component";
import { RouterModule } from "@angular/router";
import { ContactComponent } from "./views/contact/contact.component";
import { IndexComponent } from "./views/index/index.component";
import { NewsletterComponent } from "./shared/newsletter/newsletter.component";
import { ServicesComponent } from "./views/services/services.component";
import { PortfolioComponent } from "./views/portfolio/portfolio.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    IndexComponent,
    NewsletterComponent,
    ServicesComponent,
    PortfolioComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, TooltipModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
