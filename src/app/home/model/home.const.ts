export const HOME_COMPONENT_MODEL = {
    Text: 'Today you are one step closer to a new you where you feel empowered and on a positive path to growth and well-being. ' +                    
    'If you\'re looking for extra support and guidance through a challenging situation or you\'re just ready to move ' +
        'in a new direction in your life, I look forward to working with you to achieve your goals. ' +
    'Please call or email me for an individual, couples or family therapy consultation today.',
    BoldText: 'Currently offering a FREE 15 minute consultation. ' +
    'Take the first step in achieving positive change! ' +
    'Schedule your FREE 15 minute phone consultation today ' +
    'at ', 
    Phone: '(704) 233-7594',
    Fax: '(866) 706-1632',
    Email: 'kirstin.abraham@marvintherapy.com',
    Address: '8211 Avanti Drive',
    City: 'Marvin',
    State: 'NC',
    Zip: '28173',
    BusinessName: 'Kirstin R. Abraham, LCSW'
 }

 export const TYPES_OF_THERAPY = {
    Header: 'Individual, Marriage/Couple and Family Therapy',
    Text: [
            'As a clinical psychotherapist, I work from different theoretical perspectives to meet ' +
                'clients\’ diverse needs.  I take into account the preferences and the issues that clients ' +
                'want to resolve in deciding which is the best approach or combination of approaches for ' +
                'treatment. That being said, my primary treatment modality is Cognitive Behavioral Therapy ' +
                '(CBT).  My goal is to help you uncover your true potential and lead a life that is worth ' +
                'celebrating.  While we can\'t change difficult situations of the past, we can work ' +
                'together to better understand and resolve challenges in your life.  By applying ' +
                'complementary therapy approaches and techniques, we will unearth long-standing ' +
                'behavior patterns or negative perceptions that may be holding you back from ' +
                'experiencing a more fulfilling and meaningful life.',
            'Kirstin R. Abraham, LCSW provides individual, couples, family, and maritial counseling ' +
                'for pre-teens, adolescents, adults, and the geriatric population.'
        ],
    TreatmentSpecializations:
    {
        Text: 'Treatment specialization includes: ',
        Items: [
            'Therapy for Depression and Anxiety and Panic',
            'Bipolar Disorder and management',
            'Self-esteem and body image issues',
            'Adjusting to life changes',
            'Relationship and intimacy issues',
            'Grief Counseling',
            'Work and Career issues',
            'Anger and Stress Management',
            'Conflict Resolution',
            'Trauma and Loss',
            'Self-harming behaviors'
        ]
    },
    Summary: 'Kirstin works with a wide range of emotional and behavioral issues that occur throughout ' +
        'the life span.  In a comfortable and supportive atmosphere, she offers a highly personalized ' +
        'approach, tailored to each of her clients\' individual needs.  Phone and video therapy sessions ' +
        'are also available through a HIPAA secured private network for clients who cannot make an ' +
        'in-person appointment.'
};

export const CLINICAL_SUPERVISION = {
    Header: 'Clinical Supervision',
    Text: 'Choosing the right clinical supervisor is arguably the most important factor in clinician success and preparedness. Kirstin R. Abraham, LCSW has over 10 years ' +
        'of clinical experience in the mental health field and has successfully supervised LPC\'s and LCSWA\'s in Florida and North Carolina since 2012. She has provided both ' +
        'individual and group supervision to clinicians in private practice, mental health centers, and hospital settings. Mrs. Abraham\'s style is personable and nurturing. ' +
        'She works to assess the clinical associate at their current level and to build upon their strengths.  Mrs. Abraham\'s clinical focus lies in the mental health care and ' +
        'treatment of children, adolescents, adults, and the geriatric population.  She also has dedicated many years to working with residential treatment programs in New York, ' +
        'multiple juvenile justice systems, psychiatric hospitals, and homeless housing facilities with a particular interest in women\'s issues and women\'s health.',
    SupervisionTypes:
    [
        {
            Type: 'Individual Supervision',
            Cost: '$70'
        },
        {
            Type: 'Group Supervision',
            Cost: '$50 (based on availability)'
        }
    ],
    SupervisionHeader: 'Supervision Types currently offered:',
    Summary: 'All supervisees must have valid proof of malpractice insurance prior to first supervision session.'
};

export enum ServiceType {
    IMCAFT = 'Individual, Marriage / Couple and Family Therapy',
    CS = 'Clinical Supervision',
    IHT = 'In-Home Therapy'
}