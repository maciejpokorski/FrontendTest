import DOMmanipulator from "./DOMmanipulator";
import GithubUserApi from "./GithubUserApi";

const userSearch = document.getElementById("search-form");

export default class {

    constructor () {

        if (userSearch === null) {

            throw Error("Application error");

        }

        userSearch.addEventListener("submit", (event) => {

            event.preventDefault();
            this.username = document.getElementById("username-input");
            const usernameValue = this.username.value;

            try {

                this.domManipulator = new DOMmanipulator();
                this.githubApi = new GithubUserApi(usernameValue);
                this.getUserDataAndRepo();

            } catch (err) {

                this.domManipulator.showError(err.message);

            }

        });

    }

    getUserDataAndRepo () {

        this.domManipulator.showLoading();
        this.getUserInfo();
        this.getUserRepos();

    }

    getUserInfo () {

        this.githubApi.getUserData().then((response) => {

            if (response.message === "Not Found") {

                this.domManipulator.showError();

            } else {

                this.domManipulator.showUserInfo(response);

            }
            this.domManipulator.hideLoading();

        });

    }

    getUserRepos () {

        return this.githubApi.getUserRepos().then((response) => {

            if (response.message === "Not Found") {

                this.domManipulator.showError();

            } else {

                this.domManipulator.showUserRepos(response);

            }
            this.domManipulator.hideLoading();

        });

    }

}
