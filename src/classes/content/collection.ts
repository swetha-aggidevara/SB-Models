import { IUser } from './../../interfaces/user';
import { Batch } from '../batch/batch';
import { ICredential, Trackable } from './../../interfaces/trackable';
import { BaseContent } from './basecontent';
import * as _ from 'lodash-es';

export class Collection extends BaseContent {
    trackable: Trackable;
    credentials: ICredential;
    batches: Array<Batch>;

    constructor(collectionMetaData) {
        super(collectionMetaData);
        this.trackable = collectionMetaData.trackable;
        this.credentials = collectionMetaData.credentials;
        this.batches = (collectionMetaData.batches).forEach(batch => {
            batch = new Batch(batch, collectionMetaData);
        });
    }

    /**
     * @description checks whether a collection is trackable or not
     * @returns boolean
     */
    isTrackableCollection(): boolean {
        console.log('isTrackableCollection' );
        return;
    }

    /**
     * @param  {IUser} user
     * @description checks whether a batch can be created for the collection 
     * @returns boolean
     */
    canCreateBatch(user:IUser): boolean {
        console.log('canCreateBatch');
        return true;
    }

    /**
     * @param  {IUser} user
     * @description checks whether a user can view the dashboard for the collection 
     * @returns boolean
     */
    canViewDashboard(user: IUser): boolean {
        console.log('canViewDashboard');
        return true;
    }

    /**
     * @param  {IUser} user
     * @description checks whether a logged in user is creator of the collection
     * @returns boolean
     */
    isLoggedInUserIsACreator(user: IUser): boolean {
        console.log('isLoggedInUserIsACreator');
        return true
    }
}