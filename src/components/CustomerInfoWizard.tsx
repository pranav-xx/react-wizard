import React from 'react';
import { Wizard } from "./Wizard"
import { PersonInfoForm } from './PersonInfoForm';
import { AddressInfoForm } from './AddressInfoForm';
import { PersonalInfo, AddressInfo, WizardInfo } from '../types';

export const CustomerInfoWizard = () => {
    type WizardType = PersonalInfo | AddressInfo

    const handleChange = (info: WizardInfo<WizardType>) => {
        // TODO
        console.log(info);
    }

    return (
        <Wizard<WizardType> onChange={handleChange}>
            <PersonInfoForm />
            <AddressInfoForm />
        </Wizard>
    )
}