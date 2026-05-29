var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Get, Path, Post, Route, SuccessResponse, Tags, Security, Response } from "tsoa";
import { createMission as createMissionService, challengeMission as challengeMissionService, completeMission as completeMissionService, listOngoingMissions as listOngoingMissionsService, listStoreMissions as listStoreMissionsService, } from "../services/mission.service.js";
import { success } from "../../../common/responses/response.js";
let MissionController = class MissionController {
    /**
     * 미션 생성 API
     * @summary 새로운 미션을 생성합니다.
     */
    async createMission(body) {
        const result = await createMissionService(body);
        return success(result);
    }
    /**
     * 미션 도전 API
     * @summary 사용자가 미션에 도전합니다.
     */
    async challengeMission(userId, body) {
        const result = await challengeMissionService(userId, body.missionId);
        return success(result);
    }
    /**
     * 미션 완료 API
     * @summary 진행 중인 미션을 완료 처리합니다.
     */
    async completeMission(userId, userMissionId) {
        const result = await completeMissionService(userId, userMissionId);
        return success(result);
    }
    /**
     * 진행 중인 미션 조회 API
     * @summary 사용자의 진행 중인 미션 목록을 조회합니다.
     */
    async listOngoingMissions(userId) {
        const result = await listOngoingMissionsService(userId);
        return success(result);
    }
    /**
     * 가게 미션 목록 조회 API
     * @summary 특정 가게의 미션 목록을 조회합니다.
     */
    async listStoreMissions(storeId) {
        const result = await listStoreMissionsService(storeId);
        return success(result);
    }
};
__decorate([
    Security("jwt"),
    SuccessResponse("201", "미션 생성 성공"),
    Post(),
    Response(400, "잘못된 요청"),
    __param(0, Body())
], MissionController.prototype, "createMission", null);
__decorate([
    Security("jwt"),
    Post("challenge/{userId}"),
    Response(400, "이미 진행 중인 미션"),
    Response(404, "미션 또는 사용자를 찾을 수 없음"),
    __param(0, Path()),
    __param(1, Body())
], MissionController.prototype, "challengeMission", null);
__decorate([
    Security("jwt"),
    Post("complete/{userId}/{userMissionId}"),
    Response(404, "진행 중인 미션을 찾을 수 없음"),
    __param(0, Path()),
    __param(1, Path())
], MissionController.prototype, "completeMission", null);
__decorate([
    Get("ongoing/{userId}"),
    Response(404, "사용자를 찾을 수 없음"),
    __param(0, Path())
], MissionController.prototype, "listOngoingMissions", null);
__decorate([
    Get("store/{storeId}"),
    Response(404, "가게를 찾을 수 없음"),
    __param(0, Path())
], MissionController.prototype, "listStoreMissions", null);
MissionController = __decorate([
    Route("missions"),
    Tags("Mission")
], MissionController);
export { MissionController };
//# sourceMappingURL=mission.controller.js.map