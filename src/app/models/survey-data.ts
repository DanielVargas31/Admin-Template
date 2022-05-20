import { Evaluation } from "./evaluation";
import { Information } from "./information";
import { Typification } from "./typification";

export interface SurveysData {
    surveyId: string;
    information: Information;
    evaluations: Array<Evaluation>;
    typification: Typification;
}