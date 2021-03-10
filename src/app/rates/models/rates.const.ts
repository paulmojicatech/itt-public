export const RATES_MODEL = {
  Rates: {
    Header: 'Rates',
    Text: '$125 per 50-minute session',
  },
  Insurance: {
    Header: 'Insurance',
    AcceptedInsurances: {
      Header: 'Accepted Insurance Plans',
      Plans: [
        'APS Healthcare',
        'BlueCross and BlueShield',
        'Cigna',
        'Cigna EAP',
        'McLaughlin Young EAP',
        'Medicare',
        'Multiplan',
        'Open Path',
        'Optum Behavioral Health',
        'PHCS',
        'United Health Care',
        'Out of Network',
      ],
    },
    Questions: {
      Text:
        'If you’re looking to peruse insurance reimbursement please check your coverage ' +
        'carefully by asking your health insurance carrier the following questions: ',
      Question: [
        'Do I have mental health insurance benefits?',
        'How much does my insurance pay for an out-of-network mental health provider (LCSW)?',
        'What is my deductible and has it been met?',
        'How many sessions per year does my health insurance cover?',
        'What is the coverage amount per therapy session with an out of network provider?',
        'Is approval required from my primary care physician?',
      ],
    },
  },
  ReducedFee: {
    Header: 'Reduced Fee',
    Text: 'Reduced fee services are available on a limited basis.',
  },
  TypesOfSessions: {
    Header: 'Telephone/Facetime Online Sessions',
    Text:
      'Phone and Facetime sessions are also available for clients who are moving, ' +
      'deploying or unable to be present during session.',
  },
  Payment: {
    Header: 'Payment',
    Text: 'Cash, check and all major credit cards accepted for payment.',
  },
  CancellationPolicy: {
    Header: 'Cancellation Policy',
    Text:
      'If you do not show up for your scheduled therapy appointment, and you have ' +
      'not notified us at least 24 hours in advance, you will be required to pay the full cost of the session.',
  },
  ScheduleOnline: {
    Header: 'Schedule Online',
    Text: {
      Text: 'Request a therapy appointment online ',
      Link: {
        HREF: '/appointments',
        Text: 'here',
      },
    },
  },
  Contact: {
    Header: 'Contact',
    Text: {
      Text: 'Questions? Please contact me for further information.',
      Link: {
        HREF: '/contactMe',
      },
    },
  },
  BackgroundImg: '../imgs/rates.jpg',
};
