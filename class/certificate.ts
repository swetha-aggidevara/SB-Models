import { ICertificate, certCriteria, ICredential } from './../interfaces/trackable';
import { Observable } from 'rxjs';
import { Batch } from './batch';

export class Certificate implements ICertificate {

    identifier?: string;
    url?: string;
    id?: string;
    name: string;
    lastIssuedOn: string;
    token: string;
    key: string;
    orgId: string;
    criteria: certCriteria;
    batch: Batch;

    constructor (certMetaData: ICertificate, batch) {
        this.identifier = certMetaData.identifier;
        this.id = certMetaData.id;
        this.url = certMetaData.url;
        this.name = certMetaData.name;
        this.lastIssuedOn = certMetaData.lastIssuedOn;
        this.token = certMetaData.token;
        this.key = certMetaData.key;
        this.orgId = certMetaData.orgId;
        this.criteria = certMetaData.criteria;
        this.batch = batch;
    }
    /**
     * @param  {string} courseId
     * @description will add the certificate to user requested batch in a course
     * @returns Observable
     */
    addCertificateToBatch(courseId: string): Observable<any> {
        return;
    }

    /**
     * @param  {{credentials:ICredential}} collection
     * @description checks whether the user can add the certificate to user requested batch in a course
     * @returns boolean
     */
    canEditCertificates(collection: {credentials: ICredential}): boolean {
        console.log(collection.credentials.enabled);
        return;
    }

    /**
     * @param  {string} courseId
     * @description will edit the certificate of user requested batch in a course
     * @returns Observable
     */
    editCertificate(courseId: string): Observable<any> {
        return;
    }
}