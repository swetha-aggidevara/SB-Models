import { Content } from '@project-sunbird/client-services/models';
import { IUser } from './../../interfaces/user';
import { IBatch } from './../../interfaces/trackable';
import { Observable } from 'rxjs';
export class Batch implements IBatch {
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

    collection: {};
    constructor (batchMetaData?, collection?) {

        // console.log('batchMetaData', batchMetaData.batchId);
        this.identifier = batchMetaData.identifier;
        this.id = batchMetaData.id;
        this.createdFor = batchMetaData.createdFor;
        this.courseAdditionalInfo = batchMetaData.courseAdditionalInfo;
        this.endDate = batchMetaData.endDate;
        this.description = batchMetaData.description;
        this.participant = batchMetaData.participant;
        this.updatedDate = batchMetaData.updatedDate
        this.createdDate = batchMetaData.createdDate;
        this.mentors = batchMetaData.mentors;
        this.enrollmentEndDate = batchMetaData.enrollmentEndDate;
        this.name = batchMetaData.name;
        this.enrollmentType = batchMetaData.enrollmentType;
        this.courseId = batchMetaData.courseId;
        this.startDate = batchMetaData.startDate;
        this.hashTagId = batchMetaData.hashTagId;
        this.status = batchMetaData.status;
        this.courseCreator = batchMetaData.courseCreator;
        this.createdBy = batchMetaData.createdBy;
        this.creatorDetails = batchMetaData.creatorDetails;
        this.cert_templates = batchMetaData.cert_templates;
        this.collection = collection;
        this.batchId = batchMetaData.batchId;
    }

    /**
     * @param  {{}} request
     * @description creates a batch for the collection with user given info for the collection
     * @returns Observable
     */
    createBatch(request: {}): Observable<any> {
        console.log('createBatch');
        return;
    }
    /**
     * @param  {IUser} user
     * @description checks whether the user can update the update the batch or not
     * @returns boolean
     */
    canEditBatch(user: IUser): boolean {
        console.log('canCreateBatch');
        return true;
    }
    /**
     * @returns boolean
     */
    canAddCertificates(): boolean {
        console.log('canAddCertificates');
        return true;
    }

    /**
     * @param  {{}} request
     * @description will update the user requested batch of the collection
     * @returns Observable
     */
    updateBatch(request: {}): Observable<any> {
        console.log('updateBatch');
        return ;
    }

}