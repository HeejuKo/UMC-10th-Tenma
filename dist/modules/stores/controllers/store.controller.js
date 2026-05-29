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
import { createStore, listStoreReviews } from "../services/store.service.js";
import { success } from "../../../common/responses/response.js";
let StoreController = class StoreController extends Controller {
    /**
     * 가게 생성 API
     * @summary 새로운 가게를 생성합니다.
     */
    async createStore(body) {
        const result = await createStore(body);
        this.setStatus(201);
        return success(result);
    }
    /**
     * 가게 리뷰 목록 조회 API
     * @summary 특정 가게의 리뷰 목록을 조회합니다.
     */
    async listStoreReviews(storeId, cursor) {
        const result = await listStoreReviews(storeId, cursor ?? 0);
        return success(result);
    }
};
__decorate([
    Security("jwt"),
    SuccessResponse("201", "가게 생성 성공"),
    Post(),
    Response(400, "잘못된 요청"),
    __param(0, Body())
], StoreController.prototype, "createStore", null);
__decorate([
    Get("{storeId}/reviews"),
    SuccessResponse("200", "가게 리뷰 목록 조회 성공"),
    Response(404, "가게를 찾을 수 없음"),
    __param(0, Path()),
    __param(1, Query())
], StoreController.prototype, "listStoreReviews", null);
StoreController = __decorate([
    Route("stores"),
    Tags("Store")
], StoreController);
export { StoreController };
//# sourceMappingURL=store.controller.js.map