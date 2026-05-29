import passport from "passport";
export const expressAuthentication = (request, securityName) => {
    return new Promise((resolve, reject) => {
        if (securityName === "jwt") {
            passport.authenticate("jwt", { session: false }, (err, user) => {
                if (err || !user) {
                    reject(new Error("Unauthorized"));
                    return;
                }
                request.user = user;
                resolve(user);
            })(request);
        }
    });
};
//# sourceMappingURL=authentication.js.map