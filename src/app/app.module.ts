import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IpAddressModule } from '../../projects/ip-address/src/lib/ip-address.module';
import { AppComponent } from './app.component';

@NgModule({

    declarations: [

        AppComponent

    ],

    imports: [

        BrowserModule,
        IpAddressModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
