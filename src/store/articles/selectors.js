import { REQUEST_STATUS } from "../../constants";

export const selectArticles = (state) => state.selectArticles.data;

export const selectArticlesLoading = (state) => 
    state.selectArticles.request.status === REQUEST_STATUS.PENDING;

export const selectArticlesError = (state) => state.articles.request.error;