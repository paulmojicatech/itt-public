export interface AppState {
    currentHeaderImage: HeaderImageType;
}

export enum HeaderImageType {
    HOME = '../assets/home.jpg',
    ABOUT_ME = '../assets/aboutMe.jpg',
    SERVICES = '../assets/services.jpg',
    HELPFUL_FORMS = '../assets/helpfulForms.jpg',
    RATES = '../assets/rates.jpg',
    PAYMENTS = '../assets/payments.jpg',
    COMMON_QUESTIONS = '../assets/commonQuestions.jpg',
    PRIVACY = '../assets/privacy.jpg',
    CONTACT_ME = '../assets/contactMe.jpg'
}