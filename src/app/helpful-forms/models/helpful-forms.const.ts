export const HELPFUL_FORMS = {
    Text: 'If you\'re a new client, please complete the following forms and bring them to your ' +
        'first therapy session.',
    Forms: 
    [
        {
            Text: 'COVID Information',
            FormDetails: [{
                Text: 'Telehealth',
                HREF: '../../assets/forms/COVID.pdf'
            }]
        },
        {   
            Text: 'Intake / Consent',
            FormDetails:
            [{
                Text: 'HIPAA Consent',
                HREF: '../../assets/forms/consentToTxAndHippa.pdf'
            },
            {
                Text: 'Client Psychotherapy Intake Form',
                HREF: '../../assets/forms/ClientIntake.pdf'
            },
            {
                Text: 'Limits of Confidentiality/Therapy Cancellation Policy',
                HREF: '../../assets/forms/ConfidentialityAndCancellationPolicy.pdf'
            },
            {
                Text: 'Authorization Form',
                HREF: '../../assets/forms/Authorization.pdf'
            },
            {
                Text: 'Beck Depression Inventory',
                HREF: '../../assets/forms/Beck_Depression_Inventory.pdf'
            },
            {
                Text: 'Burns Anxiety Inventory',
                HREF: '../../assets/forms/burns_anxiety_inventory.pdf'
            },
            {
                Text: 'No Harm Contract',
                HREF: '../../assets/forms/NoHarmContract.pdf'
            },
            {
                Text: 'Non Subpoena',
                HREF: '../../assets/forms/SampleNonSubpoenaKirstin.pdf'
            },
            {
                Text: 'Insurance Responsibility',
                HREF: '../../assets/forms/Responsibility to know your Insurance__regulations_guidelines.pdf'
            }
        ]
    },
    {
        Text: 'PQRS',
        FormDetails:
        [{
            Text: 'Coordination of Care',
            HREF: '../../assets/forms/CoordinationOfCare.pdf'
        },                            
        {
            Text: 'VAS',
            HREF: '../../assets/forms/VAS.jpeg'
        },                           
        {
            Text: 'EASI Form',
            HREF: '../../assets/forms/EASI_Web.pdf'
        },                            
        {
            Text: 'Tobacco Screening',
            HREF: '../../assets/forms/TobaccoScreening.pdf'
        },                            
        {
            Text: 'Medication Flowsheet',
            HREF: '../../assets/forms/MedicationFlowsheet_Word.pdf'
        },
        {
            Text: 'Medical Record Summary',
            HREF: '../../assets/forms/MedicalRecordSummary.pdf'
        }]
    },
    {
        Text: 'For Providers',
        FormDetails:
        [{
            Text: 'Referral Form',
            HREF: '../../assets/forms/ReferralForm.pdf'
        }]
    }],
    CoordinateCare:
    {
        Text: 'If you would like me to coordinate care with another provider (for example, your psychiatrist, ' +
            'primary care physician, etc.), complete this form to authorize release of psychotherapy information:',
        Form: {
            Text: 'Authorization to Disclose Information Form (PDF hyperlink)',
            HREF: '../../assets/forms/consentToTxAndHippa.pdf'
        }
    },
    PDFLink: {
        Text: 'Note: To download Adobe Acrobat Reader for free,',
        Link: {
            Text: 'click here.',
            HREF: 'http://get.adobe.com/reader/'
        }
    },
    BackgroundImg: '../imgs/helpfulForms.jpg'
};