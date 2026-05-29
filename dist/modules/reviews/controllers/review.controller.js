var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Tags, Security, Response } from "tsoa";
import { success } from "../../../common/responses/response.js";
import { createReview, listMyReviews } from "../services/review.service.js";
let ReviewController = class ReviewController extends Controller {
    /**
     * 리뷰 생성 API
     * @summary 리뷰를 작성합니다.
     */
    async createReview(body) {
        const result = await createReview(body);
        this.setStatus(201);
        return success(result);
    }
    /**
     * 내가 작성한 리뷰 조회 API
     * @summary 특정 사용자의 리뷰 목록을 조회합니다.
     */
    async listMyReviews(userId, cursor) {
        const result = await listMyReviews(userId, cursor);
        return success(result);
    }
};
__decorate([
    Security("jwt"),
    Post(),
    SuccessResponse("201", "리뷰 생성 성공"),
    Response(400, "잘못된 요청"),
    __param(0, Body())
], ReviewController.prototype, "createReview", null);
__decorate([
    Get("users/{userId}"),
    Response(404, "사용자를 찾을 수 없음"),
    __param(0, Path()),
    __param(1, Query())
], ReviewController.prototype, "listMyReviews", null);
ReviewController = __decorate([
    Route("reviews"),
    Tags("Review")
], ReviewController);
export { ReviewController };
//# sourceMappingURL=review.controller.js.map