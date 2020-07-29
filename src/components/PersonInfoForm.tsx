import React from 'react';
import { PersonalInfo, WizardStepComponentProps } from "../types";

export const PersonInfoForm = ({ moveBack, moveForward, canMoveBack, canMoveForward, endWizard }: Partial<WizardStepComponentProps<PersonalInfo>>) => {
    const hardcodedData = {
        firstName: 'Pranav',
        lastName: 'Kaushik'
    };

    const goBack = () => {
        moveBack!(hardcodedData);
    }

    const next = () => {
        moveForward!(hardcodedData);
    }
    return (
        <div>
            <h1>
                Personal Info
            </h1>
            <div>
                <h3>Form goes here</h3>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                {
                    canMoveBack && <button onClick={goBack}>Previous</button>
                }
                {
                    canMoveForward && <button onClick={next}>Next</button>
                }
            </div>
        </div>
    );
};
