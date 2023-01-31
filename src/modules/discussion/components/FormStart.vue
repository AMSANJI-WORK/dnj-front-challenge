<template>
  <div class="flex items-center gap-5 w-full max-w-3xl mx-auto md:pr-5 pr-0">
    <Me />

    <form @submit.prevent="addDscussion" class="w-full">
      <InputText v-model="newDiscussion.text" :placeholder="placeholder" />
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import InputText from "@/modules/app/components/base/InputText.vue";
import Me from "@/modules/app/components/icons/Me.vue";
import { useDiscussionStore } from "../store";
import { defaultItem } from "@/modules/discussion/store/mock";
const discussionStore = useDiscussionStore();
const props = defineProps({
  placeholder: { type: String, default: "start a discussion" },
});
const newDiscussion = reactive({
  ...defaultItem,
  replies: [],
});
function addDscussion() {
  discussionStore.add({ ...newDiscussion });
  newDiscussion.text = "";
}
</script>

<style lang="scss" scoped></style>
