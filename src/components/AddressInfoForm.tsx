import React from 'react';
import { AddressInfo, WizardStepComponentProps } from "../types";

export const AddressInfoForm = ({ moveBack, moveForward, canMoveBack, canMoveForward, endWizard }: Partial<WizardStepComponentProps<AddressInfo>>) => {
    const hardcodedData: AddressInfo = {
        addressLine1: 'dsdsd',
        addressLine2: 'sdsdsd',
        zip: '232222'
    };

    const goBack = () => {
        moveBack!(hardcodedData);
    }

    const next = () => {
        moveForward!(hardcodedData);
    }

    const end = () => {
        endWizard!(hardcodedData);
    }

    return (
        <div>
            <h1>
                Address Info
            </h1>
            <div>
                <h3>Form goes here</h3>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                {
                    canMoveBack && <button onClick={goBack}>Previous</button>
                }
                {
                    canMoveForward
                    ?   <button onClick={next}>Next</button>
                    :   <button onClick={end}>Submit</button>
                }
            </div>
        </div>
    );
};
