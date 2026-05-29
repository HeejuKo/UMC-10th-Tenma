var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Post, Get, Patch, Route, Security, Tags, Request, Response } from "tsoa";
import { userSignUp, updateMyInfo } from "../services/user.service.js";
import { success } from "../../../common/responses/response.js";
let UserController = class UserController extends Controller {
    /**
     * 회원가입 API
     * @summary 사용자의 회원가입을 처리합니다.
     */
    async handleUserSignUp(body) {
        console.log("회원가입을 요청했습니다!");
        console.log("body:", body);
        const user = await userSignUp(body); //서비스 로직 호출
        return success(user); //성공 응답 보내기
    }
    /**
     * 마이페이지 조회 API
     * @summary 로그인한 사용자의 정보를 조회합니다.
     */
    async getMyPage(req) {
        const user = req.user;
        return success(user);
    }
    /**
     * 내 정보 수정 API
     * @summary 로그인한 사용자의 정보를 수정합니다.
     */
    async handleUpdateMyInfo(req, body) {
        const user = req.user;
        const result = await updateMyInfo(user.id, body);
        return success(result);
    }
};
__decorate([
    Post("signup") // 엔드포인드 정의
    ,
    Response(200, "회원가입 성공"),
    Response(400, "중복된 이메일 에러"),
    __param(0, Body())
], UserController.prototype, "handleUserSignUp", null);
__decorate([
    Security("jwt"),
    Get("mypage"),
    Response(401, "인증 실패"),
    __param(0, Request())
], UserController.prototype, "getMyPage", null);
__decorate([
    Security("jwt"),
    Patch("me"),
    Response(200, "회원 정보 수정 성공"),
    Response(401, "인증 실패"),
    __param(0, Request()),
    __param(1, Body())
], UserController.prototype, "handleUpdateMyInfo", null);
UserController = __decorate([
    Route("users") // 라우트 경로
    ,
    Tags("Users") // Swagger 태그
], UserController);
export { UserController };
//# sourceMappingURL=user.controller.js.map