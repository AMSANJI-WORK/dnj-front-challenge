<template>
  <base-button
    class="inline-flex items-center gap-1 rounded-3xl py-1 px-3"
    :class="IconLikeButtonClass"
  >
    <IconLike class="w-4" :class="IconLikeClass" />
    <span>{{ data?.likes }}</span>
  </base-button>
</template>

<script setup>
import { computed } from "vue";
import BaseButton from "@/modules/app/components/base/Button.vue";
import IconLike from "@/modules/app/components/icons/Like.vue";
const props = defineProps({
  data: Object,
});
const IconLikeButtonClass = computed(() =>
  props.data?.iLikedIt ? "bg-blue-400 text-white" : "bg-gray-300"
);
const IconLikeClass = computed(() =>
  props.data?.iLikedIt ? "fill-white" : "fill-gray-500"
);
</script>

<style lang="scss" scoped></style>
