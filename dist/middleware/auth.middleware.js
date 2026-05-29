import passport from "passport";
export const isLogin = passport.authenticate("jwt", { session: false });
//# sourceMappingURL=auth.middleware.js.map