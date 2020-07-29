import { ReactElement } from "react";
import { WizardInfo } from "./WizardInfo";
import { WizardStepComponentProps } from './WizardStepComponentProps';

export interface WizardProps<T> {
    className?: string;
    children: ReactElement<WizardStepComponentProps<T>>[];
    onChange: (info: WizardInfo<T>) => void
}
