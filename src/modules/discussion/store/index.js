import { defineStore } from "pinia";
import { discussionsMockData } from "./mock";
export const useDiscussionStore = defineStore("discussion", {
  state: () => ({
    data: [...discussionsMockData],
  }),
  getters: {
    list(state) {
      return state.data;
    },
  },
  actions: {
    add(payload) {
      this.data.unshift(payload);
    },
    likeToggle(discussionIdx) {
      if (discussionIdx == -1) return;
      const isILikeIt = this.data[discussionIdx].iLikedIt;
      this.data[discussionIdx].iLikedIt = !isILikeIt;
      return !isILikeIt
        ? this.data[discussionIdx].likes++
        : this.data[discussionIdx].likes--;
    },
    addReply(discussionIdx, payload) {
      this.data[discussionIdx]["replies"].unshift(payload);
    },
    likeCommentToggle(discussionIdx, commentIdx) {
      if (discussionIdx == -1) return;
      const isILikeIt = this.data[discussionIdx].replies[commentIdx].iLikedIt;
      this.data[discussionIdx].replies[commentIdx].iLikedIt = !isILikeIt;
      return !isILikeIt
        ? this.data[discussionIdx].replies[commentIdx].likes++
        : this.data[discussionIdx].replies[commentIdx].likes--;
    },
  },
});
