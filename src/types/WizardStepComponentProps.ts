export interface WizardStepComponentProps<T> {
    currentStepIndex: number;
    moveForward: (stepData: T) => void
    moveBack: (stepData: T) => void,
    endWizard: (stepData: T) => void,
    canMoveBack: boolean;
    canMoveForward: boolean;
}
