export interface Trackable { 
    enabled: string;
    autoBatch: string;
}

export interface ICredential {
    enabled: string;
}

export interface IBatch {
    identifier: string;
    id: string;
    createdFor: string[];
    courseAdditionalInfo: any;
    endDate: string;
    description: string;
    participant: any;
    updatedDate: string;
    createdDate: string;
    mentors: string[];
    name: string;
    enrollmentType: string;
    courseId: string;
    startDate: string;
    hashTagId: string;
    status: number;
    courseCreator: string;
    createdBy: string;
    creatorDetails?: {
        firstName?: string;
        lastName?: string;
    };
    enrollmentEndDate?: string;
    cert_templates: any;
    batchId: string;
}

export interface ICertificate {
    identifier?: string;
    url?: string;
    id?: string;
    name: string;
    lastIssuedOn: string;
    token: string;
    key?: string;
    orgId?: string;
    criteria?: certCriteria
}

export interface certCriteria {
    enrollment: {
        status: number
      }
}
