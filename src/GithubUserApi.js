import Api from "./ApiRequester.js";

const api = new Api(),
    baseApiUrl = "https://api.github.com/users";

export default class {

    constructor (username) {

        if (!username.trim().length) {

            throw Error("Username cannot be empty");

        }

        this.url = `${baseApiUrl}/${username}`;

    }

    getUserData () {

        return api.makeAPIcall(this.url).then((result) => JSON.parse(result)).
            catch((error) => {

                throw error;

            });

    }

    getUserRepos () {

        const reposUrl = `${this.url}/repos`;

        return api.makeAPIcall(reposUrl).then((result) => JSON.parse(result)).
            catch((error) => {

                throw error;

            });

    }

}
