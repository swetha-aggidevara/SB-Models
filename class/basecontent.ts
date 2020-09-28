import { AltMsg, Content, LicenseDetails, OriginData,  } from "@project-sunbird/client-services/models";

export class BaseContent implements Content {
    identifier: string ;
    name: string;
    appIcon: string;
    description: string;
    pkgVersion: string;
    status: string;
    size: string;
    owner: string;
    creator: string;
    subject: string | string[];
    board: string;
    medium: string | string[];
    publisher: string;
    me_totalRatingsCount: number;
    me_averageRating: string;
    me_totalDownloads: string;
    copyright: string;
    copyrightYear: string;
    license: string;
    licenseDetails: LicenseDetails;
    expires: string;
    downloadUrl: string;
    variants: { [key: string]: any };
    artifactUrl: string;
    language: string[];
    gradeLevel: string[];
    osId: string;
    contentType: string;
    resourceType: string;
    mimeType: string;
    artifactMimeType: string;
    versionKey: string;
    contentEncoding: string;
    contentDisposition: string;
    contentTypesCount: string;
    lastPublishedOn: string;
    createdOn: string;
    createdBy: string;
    channel: string;
    screenshots: string[];
    audience: any;
    pragma: string[];
    attributions: string[];
    dialcodes: string[];
    childNodes: string[];
    previewUrl: string;
    framework: string;
    creators: string;
    contributors: string;
    streamingUrl: string;
    totalScore: any;
    altMsg?: AltMsg [];
    organisation?: string;
    author?: string;
    collaborators?: string;
    originData?: OriginData;
    origin?: string;
    totalQuestions?: number;
    itemSetPreviewUrl?: string;
    leafNodes?: string[];
    leafNodesCount?: number;
    primaryCategory?: string;
    additionalCategories?: string[];

    constructor (content: Content) {
    this.identifier = content.identifier ;
    this.name = content.name ;
    this.appIcon = content.appIcon ;
    this.description = content.description ;
    this.pkgVersion = content.pkgVersion ;
    this.status = content.status ;
    this.size = content.size ;
    this.owner = content.owner ;
    this.creator = content.creator ;
    this.subject = content.subject;
    this.board = content.board ;
    this.medium = content.medium;
    this.publisher = content.publisher ;
    this.me_totalRatingsCount = content.me_totalRatingsCount;
    this.me_averageRating = content.me_averageRating ;
    this.me_totalDownloads = content.me_totalDownloads ;
    this.copyright = content.copyright ;
    this.copyrightYear = content.copyrightYear ;
    this.license = content.license ;
    this.licenseDetails = content.licenseDetails;
    this.expires = content.expires ;
    this.downloadUrl = content.downloadUrl ;
    this.variants = content.variants;
    this.artifactUrl = content.artifactUrl ;
    this.language = content.language;
    this.gradeLevel = content.gradeLevel;
    this.osId = content.osId ;
    this.contentType = content.contentType ;
    this.resourceType = content.resourceType ;
    this.mimeType = content.mimeType;
    this.artifactMimeType = content.artifactMimeType ;
    this.versionKey = content.versionKey ;
    this.contentEncoding = content.contentEncoding ;
    this.contentDisposition = content.contentDisposition ;
    this.contentTypesCount = content.contentTypesCount ;
    this.lastPublishedOn = content.lastPublishedOn ;
    this.createdOn = content.createdOn ;
    this.createdBy = content.createdBy ;
    this.channel = content.channel ;
    this.screenshots = content.screenshots;
    this.audience = content.audience;
    this.pragma = content.pragma;
    this.attributions = content.attributions;
    this.dialcodes = content.dialcodes;
    this.childNodes = content.childNodes;
    this.previewUrl = content.previewUrl;
    this.framework = content.framework ;
    this.creators = content.creators ;
    this.contributors = content.contributors ;
    this.streamingUrl = content.streamingUrl ;
    this.totalScore = content.totalScore;
    this.altMsg = content.altMsg;
    this.organisation = content.organisation ;
    this.author = content.author ;
    this.collaborators = content.collaborators ;
    this.originData = content.originData;
    this.origin = content.origin ;
    this.totalQuestions = content.totalScore;
    this.itemSetPreviewUrl = content.itemSetPreviewUrl ;
    this.leafNodes = content.leafNodes;
    this.leafNodesCount = content.leafNodesCount;
    }
}