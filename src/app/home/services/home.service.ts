import { Injectable } from '@angular/core';
import {
  HOME_COMPONENT_MODEL,
  ServiceType,
  TYPES_OF_THERAPY,
} from '../model/home.const';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getMainSectionParagraphOne(): string {
    return HOME_COMPONENT_MODEL.Text;
  }

  getMainSectionParagraphTwo(): string {
    return HOME_COMPONENT_MODEL.BoldText;
  }
  getCardText(
    isMobile: boolean
  ): {
    IMCaFT: {
      header: string;
      description: string;
      specializations: { description: string; types: string[] };
      summary: string;
    };
    clinicalSupervision: {
      header: string;
      text: string;
      supervisionTypes: {
        type: string;
        cost: string;
      }[];
      summary: string;
    };
    inHome: {
      header: string;
      text: string;
      criteria: {
        text: string;
        items: string[];
      };
      unionRegionalInfo: {
        text: string;
        title: string;
        address: {
          streetAddress: string;
          city: string;
          state: string;
          zip: string;
        };
        phone: string;
      };
    };
  } {
    if (!isMobile) {
      return {
        IMCaFT: {
          header: TYPES_OF_THERAPY.Header,
          description: TYPES_OF_THERAPY.Text[0],
          specializations: {
            description: TYPES_OF_THERAPY.TreatmentSpecializations.Text,
            types: TYPES_OF_THERAPY.TreatmentSpecializations.Items,
          },
          summary: TYPES_OF_THERAPY.Summary,
        },
        clinicalSupervision: {
          header: 'Clinical Supervision',
          text:
            'Choosing the right clinical supervisor is arguably the most important factor in clinician success and preparedness. Kirstin R. Abraham, LCSW has over 10 years ' +
            "of clinical experience in the mental health field and has successfully supervised LPC's and LCSWA's in Florida and North Carolina since 2012. She has provided both " +
            "individual and group supervision to clinicians in private practice, mental health centers, and hospital settings. Mrs. Abraham's style is personable and nurturing. " +
            "She works to assess the clinical associate at their current level and to build upon their strengths.  Mrs. Abraham's clinical focus lies in the mental health care and " +
            'treatment of children, adolescents, adults, and the geriatric population.  She also has dedicated many years to working with residential treatment programs in New York, ' +
            "multiple juvenile justice systems, psychiatric hospitals, and homeless housing facilities with a particular interest in women's issues and women's health.",
          supervisionTypes: [
            {
              type: 'Individual Supervision',
              cost: '$70',
            },
            {
              type: 'Group Supervision',
              cost: '$50 (based on availability)',
            },
          ],
          summary:
            'All supervisees must have valid proof of malpractice insurance prior to first supervision session.',
        },
        inHome: {
          header: 'In-Home Therapy',
          text:
            'Kirstin Abraham, LCSW also provides in-home therapy to clients who are engaged in services at Union Regional Home Care through Carolinas HealthCare System.  In order to determine ' +
            "if you are eligible for these services, below is Union Regional's criteria: ",
          criteria: {
            text:
              'In order to obtain care at Union Regional Home Care, you must: ',
            items: [
              "Be under a physician's care",
              'Have a medical need for services',
              'Have difficulty obtaining care due to handicaps, illness or injury',
            ],
          },
          unionRegionalInfo: {
            text: 'Union Regional Home Care is located at: ',
            title: 'Union Regional Home Care',
            address: {
              streetAddress: '101 E. Franklin Street',
              city: 'Monroe',
              state: 'NC',
              zip: '28112',
            },
            phone: '704-283-3381',
          },
        },
      };
    }
    return null;
  }

}
