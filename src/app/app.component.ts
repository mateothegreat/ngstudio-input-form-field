import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IpAddressConfig } from '../../projects/ip-address/src/lib/ip-address-config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

    public control = new FormControl();

    public config: IpAddressConfig = {

        placeholders: [ 192, 168, 1, 2 ],
        control: this.control

    };

    public constructor() {

        this.control.valueChanges.subscribe(value => {

            console.log(value);

        });

    }

}
