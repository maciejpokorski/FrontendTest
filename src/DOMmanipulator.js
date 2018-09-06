export default class {

    constructor () {

        this.correctResult = document.getElementById("correct-result");
        this.emptyResult = document.getElementById("empty-result");
        this.searchResult = document.getElementById("search-result");

        if (this.correctResult === null || this.emptyResult === null || this.searchResult === null) {

            throw Error("Application error");

        }

    }

    showLoading () {

        this.emptyResult.style.display = "none";
        this.correctResult.style.display = "none";
        document.getElementById("username-input").value = "";
        document.getElementById("submit").disabled = true;
        this.searchResult.insertAdjacentHTML(
            "afterbegin",
            "<div class='search-result'>" +
                "<div class='lds-dual-ring' id='loading-spinner'></div>" +
            "</div>"
        );

    }

    hideLoading () {

        const loadingSpinner = document.getElementById("loading-spinner");

        if (loadingSpinner) {

            this.searchResult.style.display = "block";
            loadingSpinner.parentNode.remove();
            loadingSpinner.remove();
            document.getElementById("submit").disabled = false;

        }

    }

    showError (text = "Does not exist") {

        this.correctResult.style.display = "none";
        this.emptyResult.style.display = "block";

        this.emptyResult.
            firstElementChild.innerHTML = text;

    }

    showUserInfo (data) {

        if (!data.name) {

            data.name = data.login;

        }

        if (!data.bio) {

            data.bio = "Empty bio";

        }

        this.emptyResult.style.display = "none";
        this.correctResult.style.display = "block";
        this.correctResult.
            innerHTML = `<div class="user-info">
                            <div class="user-info__avatar user-info__item">
                                <img src="${data.avatar_url}" alt="   ">
                            </div>
                            <div class="user-info__details user-info__item">
                                <h5>@${data.login}</h5>
                                <h2>${data.name}</h2>
                                <p>${data.bio}</p>
                            </div>
                        </div>`;

    }

    showUserRepos (data) {
        
        let reposHTML = data.map((repo) => {

            return `<li class="user-repositories-list__item">
                        <h4 class="user-repositories-list__title">${repo.name}</h4>
                        <span class="repository-info">
                            <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                            <span class="repository-info__item" id="stars">${repo.stargazers_count}</span>
                            <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                            <span class="repository-info__item" id="forks">${repo.forks_count}</span>
                        </span>
                    </li>`;

        }).
            join("");

        if (!reposHTML) {

            reposHTML = "<li>No repositories</li>";

        }

        this.correctResult.innerHTML +=
            `<div class="user-repositories">
                <h3 class="user-repositories__title">Repositories</h3>
                <hr class="user-repositories__divider">
                <ul class="user-repositories-list">
                    ${reposHTML}
                </ul>
            </div>`;

    }


}
