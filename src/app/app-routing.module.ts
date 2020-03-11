import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./views/about/about.component";
import { ContactComponent } from "./views/contact/contact.component";
import { IndexComponent } from "./views/index/index.component";
import { ServicesComponent } from "./views/services/services.component";
import { PortfolioComponent } from "./views/portfolio/portfolio.component";

const routes: Routes = [
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "index", component: IndexComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "services", component: ServicesComponent },
  { path: "portfolio", component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
