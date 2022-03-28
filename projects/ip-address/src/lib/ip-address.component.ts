import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IpAddressConfig } from './ip-address-config';

@Component({

    selector: 'ngstudio-ip-address',
    templateUrl: './ip-address.component.html',
    styleUrls: [ './ip-address.component.scss' ]

})
export class IpAddressComponent {

    @Input() public config: IpAddressConfig;

    public formGroup = new FormGroup({

        octet1: new FormControl('', [

            Validators.required,
            Validators.min(1),
            Validators.minLength(1),
            Validators.pattern(/^\d{1,3}$/)

        ]),
        octet2: new FormControl('', [

            Validators.required,
            Validators.minLength(1),
            Validators.pattern(/^\d{1,3}$/)

        ]),
        octet3: new FormControl('', [

            Validators.required,
            Validators.minLength(1),
            Validators.pattern(/^\d{1,3}$/)

        ]),
        octet4: new FormControl('', [

            Validators.required,
            Validators.min(1),
            Validators.pattern(/^\d{1,3}$/)

        ])

    });

    public constructor() {

        this.formGroup.statusChanges.subscribe(value => {

            if (this.formGroup.valid) {

                this.config.control.setValue(`${ this.formGroup.get('octet1').value }.${ this.formGroup.get('octet2').value }.${ this.formGroup.get('octet3').value }.${ this.formGroup.get('octet4').value }`);

            }

        });

    }

}

