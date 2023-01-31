<template>
  <div class="item__content flex flex-col md:items-center items-start">
    <div v-if="data?.user?.avatar" class="w-10">
      <img
        :src="data?.user?.avatar"
        loading="lazy"
        class="w-11 h-11 rounded-full bg-blue-300 aspect-square object-cover"
        :alt="data?.user?.name"
      />
    </div>

    <div
      v-else
      class="h-11 rounded-full text-center py-1 text-2xl text-clip text-blue-500 font-bold overflow-hidden bg-blue-300 aspect-square"
    >
      {{ userNameShortFormat }}
    </div>
    <slot name="reply-dvider" />
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  data: Object,
});

const userNameShortFormat = computed(() =>
  props.data?.user?.name.substring(0, 2)
);
</script>

<style lang="scss" scoped></style>
