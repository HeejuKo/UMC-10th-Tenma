import { prisma } from "../../../db.config.js";
export const addStore = async (data) => {
    try {
        const store = await prisma.store.create({
            data: {
                categoryId: data.categoryId,
                regionId: data.regionId,
                name: data.name,
                address: data.address,
                masterNum: data.masterNum,
            },
        });
        return store.id;
    }
    catch (err) {
        throw new Error(`가게 생성 중 오류가 발생했어요: ${err}`);
    }
};
export const getStoreById = async (storeId) => {
    try {
        return await prisma.store.findUnique({
            where: { id: storeId },
        });
    }
    catch (err) {
        throw new Error(`가게 조회 중 오류가 발생했어요: ${err}`);
    }
};
export const getReviewsByStoreId = async (storeId, cursor, take = 10) => {
    return await prisma.review.findMany({
        where: { storeId },
        take,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { id: "asc" },
        include: {
            user: {
                select: {
                    name: true,
                },
            },
        },
    });
};
export const getMissionsByStoreId = async (storeId, cursor, take = 10) => {
    return await prisma.mission.findMany({
        where: { storeId },
        take,
        skip: cursor ? 1 : 0,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { id: "asc" },
    });
};
//# sourceMappingURL=store.repository.js.map