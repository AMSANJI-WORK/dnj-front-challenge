<template>
  <div
    class="flex flex-row outline-none border-b-2 md:p-4 py-4 px-3 rounded-sm"
  >
    <ItemAvatar :data="data">
      <template #reply-dvider>
        <div
          v-if="data?.replies?.length"
          class="h-full bg-gray-200 w-0.5 mt-2 sm:ml-0 ml-6"
        ></div>
      </template>
    </ItemAvatar>
    <div class="ml-3">
      <ItemContent :data="data" />

      <div class="flex flex-wrap items-center mt-3 gap-3">
        <ButtonLike
          :data="data"
          @click="discussionStore.likeToggle(indexItem)"
        />
        <FormReply :discussion="indexItem" />
      </div>
      <div>
        <ItemComment
          v-for="(item, index) in data.replies"
          :key="index"
          :data="item"
          :index-item="index"
          :discussion="indexItem"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDiscussionStore } from "@/modules/discussion/store";

import ButtonLike from "./ButtonLike.vue";
import FormReply from "./FormReply.vue";
import ItemAvatar from "./CardAvatar.vue";
import ItemContent from "./CardContent.vue";
import ItemComment from "./CardComment.vue";

const discussionStore = useDiscussionStore();

const props = defineProps({
  data: Object,
  indexItem: Number,
});
</script>

<style lang="scss" scoped></style>
