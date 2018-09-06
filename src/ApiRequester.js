export default class {

    constructor () {

        this.method = "GET";

    }

    makeAPIcall (requestURL) {

        const xhr = new XMLHttpRequest();

        return new Promise((resolve, reject) => {

            xhr.open(this.method, requestURL);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();

        });

    }

}
