export interface ManageSurveys {
    ManageSurveyId: string | null;
    DateStartAnalysis: Date | null;
    DateEndAnalysis: Date | null;
    SurveyId:string;
    UserAnalysis:string | undefined;
    OnAnalysis?: boolean;
}