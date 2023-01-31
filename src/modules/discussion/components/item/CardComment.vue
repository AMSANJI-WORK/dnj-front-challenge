<template>
  <div class="flex md:flex-row flex-col p-4 pl-0 rounded-sm">
    <ItemAvatar :data="data" />
    <div class="ml-3">
      <ItemContent :data="data" />
      <div class="item__action flex flex-wrap items-center mt-3 gap-3">
        <ButtonLike
          :data="data"
          @click="discussionStore.likeCommentToggle(discussion, indexItem)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDiscussionStore } from "@/modules/discussion/store";
import ButtonLike from "./ButtonLike.vue";
import ItemAvatar from "./CardAvatar.vue";
import ItemContent from "./CardContent.vue";

const discussionStore = useDiscussionStore();

const props = defineProps({
  data: Object,
  indexItem: Number,
  discussion: Number,
});
</script>

<style lang="scss" scoped></style>
