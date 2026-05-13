import dotenv from "dotenv";
import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import { RegisterRoutes } from "./generated/routes.js";
import { AppError } from "./common/errors/app.error.js";

import { handleCreateStore, handleListsStoreReviews } from "./modules/stores/controllers/store.controller.js";
import { handleCreateReview, handleListMyReviews } from "./modules/reviews/controllers/review.controller.js";
import { handleCreateMission,handleChallengeMission, handleCompleteMission, handleListOngoingMissions, handleListStoreMissions } from "./modules/missions/controllers/mission.controller.js";

// 1. 환경 변수 설정
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use((req: Request, res: Response, next: NextFunction) => {
  res.error = function ({ errorCode = null, message = null, data = null }) {
    return this.json({
      resultType: "FAILED",
      error: { errorCode, message, data },
      data: null,                                                                                                                                                                                                 
    });
  };
  next();
});

// 2. 미들웨어 설정
app.use(cors());            // cors 방식 허용                 
app.use(express.static('public'));    // 정적 파일 접근      
app.use(express.json());              // request의 본문을 json으로 해석할 수 있도록 함(JSON 형태의 요청 body를 파싱하기 위함)     
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

// Express.js에 생성한 엔드 포인트들을 register
const router = express.Router();
RegisterRoutes(router); 
app.use("/api/", router);

/**
 * 전역 오류를 처리하기 위한 미들웨어
 */
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode || 500).error({
    errorCode: err.errorCode || "unknown",
    message: err.message || null,
    data: err.data || null,
  });
});

// 4. 사용자 API
app.get("/api/users/:userId/reviews", handleListMyReviews); // 내가 작성한 리뷰 목록 조회
app.get("/api/users/:userId/missions", handleListOngoingMissions); // 내가 도전 중인 미션 목록 조회

// 5. 가게 API
app.post("/api/stores", handleCreateStore); // 가게 추가
app.get("/api/stores/:storeId/reviews", handleListsStoreReviews); // 가게 리뷰 목록 조회
app.get("/api/stores/:storeId/missions", handleListStoreMissions); // 가게 미션 목록 조회

// 6. 리뷰 API
app.post("/api/reviews", handleCreateReview); // 리뷰 작성

// 7. 미션 API
app.post("/api/missions", handleCreateMission); // 미션 추가
app.post("/api/users/:userId/missions", handleChallengeMission); // 미션 도전
app.patch("/api/users/:userId/missions/:userMissionId", handleCompleteMission); // 미션 성공

// 8. 서버 시작
app.listen(port, () => {
  console.log(`[server]: Server is running at <http://localhost>:${port}`);
});