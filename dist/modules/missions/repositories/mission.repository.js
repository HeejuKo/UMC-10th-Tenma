import { prisma } from "../../../db.config.js";
export const addMission = async (data) => {
    try {
        const mission = await prisma.mission.create({
            data: {
                storeId: data.storeId,
                deadline: data.deadline,
                condition: data.condition,
                point: data.point,
            },
        });
        return mission.id;
    }
    catch (err) {
        throw new Error(`미션 생성 중 오류가 발생했어요: ${err}`);
    }
};
export const getMissionById = async (missionId) => {
    try {
        return await prisma.mission.findUnique({
            where: { id: missionId },
        });
    }
    catch (err) {
        throw new Error(`미션 조회 중 오류가 발생했어요: ${err}`);
    }
};
export const getUserMissionByUserIdAndMissionId = async (userId, missionId) => {
    try {
        return await prisma.userMission.findFirst({
            where: { userId, missionId },
        });
    }
    catch (err) {
        throw new Error(`도전 중 미션 조회 중 오류가 발생했어요: ${err}`);
    }
};
export const addUserMission = async (userId, missionId) => {
    try {
        const userMission = await prisma.userMission.create({
            data: {
                userId,
                missionId,
                completed: false,
            },
        });
        return userMission.id;
    }
    catch (err) {
        throw new Error(`미션 도전 중 오류가 발생했어요: ${err}`);
    }
};
export const getUserMissionById = async (userMissionId) => {
    return prisma.userMission.findUnique({
        where: { id: userMissionId },
    });
};
export const completeUserMission = async (userMissionId) => {
    return prisma.userMission.update({
        where: { id: userMissionId },
        data: { completed: true },
    });
};
export const getOngoingMissionsByUserId = async (userId) => {
    return prisma.userMission.findMany({
        where: {
            userId,
            completed: false,
        },
        include: {
            mission: {
                select: {
                    id: true,
                    condition: true,
                    point: true,
                    store: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
        },
        orderBy: {
            id: "desc",
        },
    });
};
export const getMissionsByStoreId = async (storeId) => {
    return prisma.mission.findMany({
        where: { storeId },
        include: {
            store: {
                select: {
                    name: true,
                    category: true,
                },
            },
        },
        orderBy: {
            deadline: "asc",
        },
    });
};
//# sourceMappingURL=mission.repository.js.map