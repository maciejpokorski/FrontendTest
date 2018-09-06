/* eslint-disable */
describe("Test Github Api", () => {

    describe("Test getting user data", () => {
        it("should retrieve correct informations", done => {
            correctUser.getUserData().then((response) => {
               
                const { login, name, bio } = response;

                expect(response).toBeDefined();
                expect(login).toEqual("maciejpokorski");
                expect(name).toEqual(null);
                expect(bio).toEqual(null);
                done();

            })
        })
    })

    describe("Test getting nonexistent user", () => {
        it("should retrieve info about empty result", done => {
            incorrectUser.getUserData().then((response) => {

                expect(response).toBeDefined();
                expect(response.message).toEqual("Not Found");

                done();

            })
        })
    })

    describe("Test getting user repos", () => {
        it("should retrieve correct informations", done => {
            correctUser.getUserRepos().then((response) => {
               
                expect(response).toBeDefined();
                expect(response.length).toBeGreaterThan(0);
                expect(response[0].owner.login).toEqual("maciejpokorski");
                expect(response[0].fork).toBeTruthy();

                done();

            })
        })
    })

    describe("Test getting nonexistent user repos", () => {
        it("should retrieve informations about empty results", done => {
            incorrectUser.getUserRepos().then((response) => {
               
                expect(response).toBeDefined();
                expect(response.message).toEqual("Not Found");

                done();

            })
        })
    })

})