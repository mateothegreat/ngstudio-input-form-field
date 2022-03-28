import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IpAddressComponent } from './ip-address.component';

@NgModule({

    declarations: [

        IpAddressComponent

    ],

    imports: [

        ReactiveFormsModule

    ],

    exports: [

        IpAddressComponent

    ]

})
export class IpAddressModule {
}
