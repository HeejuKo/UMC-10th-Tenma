import { fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../modules/users/controllers/user.controller.js';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StoreController } from './../modules/stores/controllers/store.controller.js';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReviewController } from './../modules/reviews/controllers/review.controller.js';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MissionController } from './../modules/missions/controllers/mission.controller.js';
import { expressAuthentication } from './../middleware/authentication.js';
const expressAuthenticationRecasted = expressAuthentication;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "UserSignUpResponse": {
        "dataType": "refObject",
        "properties": {
            "userId": { "dataType": "double", "required": true },
            "preferCategory": { "dataType": "array", "array": { "dataType": "string" }, "required": true },
            "accessToken": { "dataType": "string", "required": true },
            "refreshToken": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UserSignUpResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "UserSignUpResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_null_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "dataType": "enum", "enums": [null], "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserSignUpRequest": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "gender": { "dataType": "string", "required": true },
            "birth": { "dataType": "datetime", "required": true },
            "address": { "dataType": "string" },
            "phoneNumber": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
            "preferences": { "dataType": "array", "array": { "dataType": "double" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_any_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "dataType": "any", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__userId-number__": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "userId": { "dataType": "double", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateMyInfoRequest": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string" },
            "gender": { "dataType": "string" },
            "birth": { "dataType": "datetime" },
            "address": { "dataType": "string" },
            "phoneNumber": { "dataType": "string" },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__storeId-number__": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "storeId": { "dataType": "double", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateStoreRequest": {
        "dataType": "refObject",
        "properties": {
            "categoryId": { "dataType": "double", "required": true },
            "regionId": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "address": { "dataType": "string", "required": true },
            "masterNum": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewItem": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "userName": { "dataType": "string", "required": true },
            "star": { "dataType": "double", "required": true },
            "content": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ReviewListResponse": {
        "dataType": "refObject",
        "properties": {
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "ReviewItem" }, "required": true },
            "pagination": { "dataType": "nestedObjectLiteral", "nestedProperties": { "cursor": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "enum", "enums": [null] }], "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ReviewListResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "ReviewListResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__reviewId-number__": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "reviewId": { "dataType": "double", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateReviewRequest": {
        "dataType": "refObject",
        "properties": {
            "userId": { "dataType": "double", "required": true },
            "storeId": { "dataType": "double", "required": true },
            "star": { "dataType": "double", "required": true },
            "content": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__missionId-number__": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "missionId": { "dataType": "double", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateMissionRequest": {
        "dataType": "refObject",
        "properties": {
            "storeId": { "dataType": "double", "required": true },
            "deadline": { "dataType": "datetime", "required": true },
            "condition": { "dataType": "string", "required": true },
            "point": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__userMissionId-number__": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "userMissionId": { "dataType": "double", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ChallengeMissionRequest": {
        "dataType": "refObject",
        "properties": {
            "missionId": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__userMissionId-number--completed-boolean__": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "dataType": "nestedObjectLiteral", "nestedProperties": { "completed": { "dataType": "boolean", "required": true }, "userMissionId": { "dataType": "double", "required": true } }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OngoingMissionItem": {
        "dataType": "refObject",
        "properties": {
            "userMissionId": { "dataType": "double", "required": true },
            "point": { "dataType": "double", "required": true },
            "storeName": { "dataType": "string", "required": true },
            "condition": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "OngoingMissionListResponse": {
        "dataType": "refObject",
        "properties": {
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "OngoingMissionItem" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_OngoingMissionListResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "OngoingMissionListResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StoreMissionItem": {
        "dataType": "refObject",
        "properties": {
            "missionId": { "dataType": "double", "required": true },
            "storeName": { "dataType": "string", "required": true },
            "storeCategory": { "dataType": "string", "required": true },
            "condition": { "dataType": "string", "required": true },
            "point": { "dataType": "double", "required": true },
            "deadline": { "dataType": "datetime", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "StoreMissionListResponse": {
        "dataType": "refObject",
        "properties": {
            "data": { "dataType": "array", "array": { "dataType": "refObject", "ref": "StoreMissionItem" }, "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_StoreMissionListResponse_": {
        "dataType": "refObject",
        "properties": {
            "resultType": { "dataType": "enum", "enums": ["SUCCESS"], "required": true },
            "error": { "dataType": "enum", "enums": [null], "required": true },
            "data": { "ref": "StoreMissionListResponse", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
export function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    const argsUserController_handleUserSignUp = {
        body: { "in": "body", "name": "body", "required": true, "ref": "UserSignUpRequest" },
    };
    app.post('/users/signup', ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleUserSignUp)), async function UserController_handleUserSignUp(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleUserSignUp, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleUserSignUp',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_getMyPage = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
    };
    app.get('/users/mypage', authenticateMiddleware([{ "jwt": [] }]), ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.getMyPage)), async function UserController_getMyPage(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_getMyPage, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'getMyPage',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsUserController_handleUpdateMyInfo = {
        req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
        body: { "in": "body", "name": "body", "required": true, "ref": "UpdateMyInfoRequest" },
    };
    app.patch('/users/me', authenticateMiddleware([{ "jwt": [] }]), ...(fetchMiddlewares(UserController)), ...(fetchMiddlewares(UserController.prototype.handleUpdateMyInfo)), async function UserController_handleUpdateMyInfo(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleUpdateMyInfo, request, response });
            const controller = new UserController();
            await templateService.apiHandler({
                methodName: 'handleUpdateMyInfo',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStoreController_createStore = {
        body: { "in": "body", "name": "body", "required": true, "ref": "CreateStoreRequest" },
    };
    app.post('/stores', authenticateMiddleware([{ "jwt": [] }]), ...(fetchMiddlewares(StoreController)), ...(fetchMiddlewares(StoreController.prototype.createStore)), async function StoreController_createStore(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStoreController_createStore, request, response });
            const controller = new StoreController();
            await templateService.apiHandler({
                methodName: 'createStore',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsStoreController_listStoreReviews = {
        storeId: { "in": "path", "name": "storeId", "required": true, "dataType": "double" },
        cursor: { "in": "query", "name": "cursor", "dataType": "double" },
    };
    app.get('/stores/:storeId/reviews', ...(fetchMiddlewares(StoreController)), ...(fetchMiddlewares(StoreController.prototype.listStoreReviews)), async function StoreController_listStoreReviews(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsStoreController_listStoreReviews, request, response });
            const controller = new StoreController();
            await templateService.apiHandler({
                methodName: 'listStoreReviews',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsReviewController_createReview = {
        body: { "in": "body", "name": "body", "required": true, "ref": "CreateReviewRequest" },
    };
    app.post('/reviews', authenticateMiddleware([{ "jwt": [] }]), ...(fetchMiddlewares(ReviewController)), ...(fetchMiddlewares(ReviewController.prototype.createReview)), async function ReviewController_createReview(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsReviewController_createReview, request, response });
            const controller = new ReviewController();
            await templateService.apiHandler({
                methodName: 'createReview',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsReviewController_listMyReviews = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "double" },
        cursor: { "in": "query", "name": "cursor", "dataType": "double" },
    };
    app.get('/reviews/users/:userId', ...(fetchMiddlewares(ReviewController)), ...(fetchMiddlewares(ReviewController.prototype.listMyReviews)), async function ReviewController_listMyReviews(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsReviewController_listMyReviews, request, response });
            const controller = new ReviewController();
            await templateService.apiHandler({
                methodName: 'listMyReviews',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMissionController_createMission = {
        body: { "in": "body", "name": "body", "required": true, "ref": "CreateMissionRequest" },
    };
    app.post('/missions', authenticateMiddleware([{ "jwt": [] }]), ...(fetchMiddlewares(MissionController)), ...(fetchMiddlewares(MissionController.prototype.createMission)), async function MissionController_createMission(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_createMission, request, response });
            const controller = new MissionController();
            await templateService.apiHandler({
                methodName: 'createMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMissionController_challengeMission = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "double" },
        body: { "in": "body", "name": "body", "required": true, "ref": "ChallengeMissionRequest" },
    };
    app.post('/missions/challenge/:userId', authenticateMiddleware([{ "jwt": [] }]), ...(fetchMiddlewares(MissionController)), ...(fetchMiddlewares(MissionController.prototype.challengeMission)), async function MissionController_challengeMission(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_challengeMission, request, response });
            const controller = new MissionController();
            await templateService.apiHandler({
                methodName: 'challengeMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMissionController_completeMission = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "double" },
        userMissionId: { "in": "path", "name": "userMissionId", "required": true, "dataType": "double" },
    };
    app.post('/missions/complete/:userId/:userMissionId', authenticateMiddleware([{ "jwt": [] }]), ...(fetchMiddlewares(MissionController)), ...(fetchMiddlewares(MissionController.prototype.completeMission)), async function MissionController_completeMission(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_completeMission, request, response });
            const controller = new MissionController();
            await templateService.apiHandler({
                methodName: 'completeMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMissionController_listOngoingMissions = {
        userId: { "in": "path", "name": "userId", "required": true, "dataType": "double" },
    };
    app.get('/missions/ongoing/:userId', ...(fetchMiddlewares(MissionController)), ...(fetchMiddlewares(MissionController.prototype.listOngoingMissions)), async function MissionController_listOngoingMissions(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_listOngoingMissions, request, response });
            const controller = new MissionController();
            await templateService.apiHandler({
                methodName: 'listOngoingMissions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    const argsMissionController_listStoreMissions = {
        storeId: { "in": "path", "name": "storeId", "required": true, "dataType": "double" },
    };
    app.get('/missions/store/:storeId', ...(fetchMiddlewares(MissionController)), ...(fetchMiddlewares(MissionController.prototype.listStoreMissions)), async function MissionController_listStoreMissions(request, response, next) {
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_listStoreMissions, request, response });
            const controller = new MissionController();
            await templateService.apiHandler({
                methodName: 'listStoreMissions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security = []) {
        return async function runAuthenticationMiddleware(request, response, next) {
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts = [];
            const pushAndRethrow = (error) => {
                failedAttempts.push(error);
                throw error;
            };
            const secMethodOrPromises = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises = [];
                    for (const name in secMethod) {
                        secMethodAndPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                }
                else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                            .catch(pushAndRethrow));
                    }
                }
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            try {
                request['user'] = await Promise.any(secMethodOrPromises);
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next();
            }
            catch (err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;
                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
//# sourceMappingURL=routes.js.map