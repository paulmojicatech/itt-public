
export interface ICommonQuestions {
    ID: string;
    Title: string;
    Text: string;
    IsActive: boolean;
    AcceptedInsurances?: IAcceptedInsurances;
    Questions?: string[];
    BulletPoints?:string[];
    Ways?: string[];
}

export interface IAcceptedInsurances {
    Header: string;
    Plans: string[];
}