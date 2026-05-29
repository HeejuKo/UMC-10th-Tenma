export const listStoreReviewsResponseDTO = (data) => {
    const reviews = data.map((review) => ({
        id: review.id,
        userName: review.user.name,
        star: review.star,
        content: review.content,
    }));
    const lastReview = reviews[reviews.length - 1];
    return {
        data: reviews,
        pagination: {
            cursor: lastReview ? lastReview.id : null,
        },
    };
};
//# sourceMappingURL=store.dto.js.map