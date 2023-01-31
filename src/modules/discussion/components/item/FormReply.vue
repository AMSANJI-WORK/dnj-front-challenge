<template>
  <base-button
    @click="showFromReply"
    v-show="!show"
    class="bg-white text-blue-600 ring-0 hover:ring-0"
  >
    <span class="text-base font-semibold rounded-lg capitalize">reply </span>
  </base-button>
  <Transition>
    <div v-if="show" class="flex items-center gap-3 w-full max-w-3xl mx-auto">
      <Me />
      <form class="w-full pr-4" @submit.prevent="addReply">
        <BaseInputText
          class="outline-gray-300 focus:outline-none"
          v-model="newReply.text"
          placeholder="Reply"
          @blur="hideFromReply"
        />
      </form>
    </div>
  </Transition>
</template>

<script setup>
import { ref, reactive } from "vue";
import BaseButton from "@/modules/app/components/base/Button.vue";
import Me from "@/modules/app/components/icons/Me.vue";
import BaseInputText from "@/modules/app/components/base/InputText.vue";
import { useDiscussionStore } from "@/modules/discussion/store";
import { defaultItem } from "@/modules/discussion/store/mock";

const discussionStore = useDiscussionStore();
const show = ref(false);

const props = defineProps({
  discussion: Number,
});
const showFromReply = () => {
  show.value = true;
};
const hideFromReply = () => {
  show.value = false;
};

const newReply = reactive({
  ...defaultItem,
});

function addReply() {
  discussionStore.addReply(props.discussion, { ...newReply });
  show.value = false;
  newReply.text = "";
}
</script>
<style lang="css" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transition: all 0.3s ease-in-out;
  opacity: 0;
}
</style>
