
export class AppGlobals
{
    loggedInUser: string;
    loggedInUserId: number;

    apiBaseUrl : string;

    constructor()
    {
        this.apiBaseUrl = 'http://localhost:5001';
    }

}