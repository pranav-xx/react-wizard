import React, { cloneElement, useState, ReactNode, Children, ReactNodeArray, ReactElement } from 'react'
import { WizardInfo, WizardProps } from '../types';


export function Wizard<T>({ children, onChange, className }: WizardProps<T>) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const totalSteps = children.length;

    const moveForward = (stepData: T) => {
        if (currentStepIndex < totalSteps) {
            setCurrentStepIndex(currentStepIndex + 1)
        }

        onChange({ currentStepIndex, stepData });
    }

    const moveBack = (stepData: T) => {
        if (currentStepIndex < totalSteps) {
            setCurrentStepIndex(currentStepIndex - 1)
        }

        onChange({ currentStepIndex, stepData });
    }

    const endWizard = (stepData: T) => {
        onChange({ currentStepIndex, stepData });
    }

    return (
        <div className={className}>
            {
                cloneElement(children[currentStepIndex], {
                    currentStepIndex,
                    moveForward,
                    moveBack,
                    endWizard,
                    canMoveBack: currentStepIndex > 0,
                    canMoveForward: currentStepIndex < totalSteps - 1
                })
            }
        </div>
    )
}
