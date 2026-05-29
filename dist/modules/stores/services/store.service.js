import { addStore, getStoreById, getReviewsByStoreId } from "../repositories/store.repository.js";
import { listStoreReviewsResponseDTO } from "../dtos/store.dto.js";
import { StoreNotFoundError } from "../../../common/errors/error.js";
export const createStore = async (data) => {
    const storeId = await addStore(data);
    return {
        storeId,
    };
};
export const listStoreReviews = async (storeId, cursor) => {
    const store = await getStoreById(storeId);
    if (!store) {
        throw new StoreNotFoundError(storeId);
    }
    const reviews = await getReviewsByStoreId(storeId, cursor);
    return listStoreReviewsResponseDTO(reviews);
};
//# sourceMappingURL=store.service.js.map