import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LogoutComponent } from "./logout/logout.component";

@NgModule ({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LogoutComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        LogoutComponent,
    ]
})

export class ComponentsModule {}