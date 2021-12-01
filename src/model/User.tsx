export default class User {
    firstName: string;
    lastName: string;
    email: string;
    profileUrl: string;

    constructor(firstName: string, lastName: string, email: string, profileUrl: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.profileUrl = profileUrl;
    }
    
    getFirstName() : string {
        return this.firstName;
    }

    getLastName() : string {
        return this.lastName;
    }

    getEmail() : string {
        return this.email;
    }

    getProfileUrl() : string {
        return this.profileUrl;
    }
}