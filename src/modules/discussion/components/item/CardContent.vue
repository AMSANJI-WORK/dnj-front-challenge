<template>
  <div class="inline-flex items-start">
    <p class="subpixel-antialiased text-base font-semibold">
      {{ data?.user?.name }}
    </p>
    <span
      class="mx-1 subpixel-antialiased font-medium text-xs text-gray-400 mt-1"
      >{{ datePast }}</span
    >
  </div>
  <div class="md:w-3/4 w-full text-sm leading-6 text-gray-600 font-medium">
    {{ data?.text }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { timeSince } from "@/modules/app/utils/dateTime";

const props = defineProps({
  data: Object,
});
const datePast = computed(() => {
  return timeSince(new Date(props.data?.date));
});
</script>

<style lang="scss" scoped></style>
