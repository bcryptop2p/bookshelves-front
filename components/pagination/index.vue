<script setup lang="ts">
import SvgIcon from '@/components/svg-icon.vue'

const props = defineProps<{
  pages: number
  current: number
}>()

const {
  startNumber,
  numberOfLinks,
  linkGen,
  init,
  pages,
  current,
  showFirstDots,
  showLastDots,
  isActive,
  getTag,
  displayLastPage,
} = usePagination()

init(props.pages, props.current)

watch(
  () => props.current,
  (newVal) => {
    init(props.pages, props.current)
  }
)
</script>

<template>
  <div class="my-10 max-w-7xl">
    <nav
      class="flex items-center justify-between border-t border-gray-200 px-4 dark:border-gray-700 sm:px-0"
    >
      <div class="-mt-px flex w-0 flex-1">
        <router-link :to="linkGen(1)" class="item extreme-link">
          <svg-icon name="arrow-narrow-right" class="mr-1 w-5 h-5 rotate-90" />
          First
        </router-link>
      </div>
      <div class="hidden md:-mt-px md:flex">
        <router-link v-slot="{ navigate }" :to="linkGen(current - 1)" custom>
          <component
            :is="getTag(1)"
            :to="linkGen(current - 1)"
            class="item page-link"
            title="Previous"
            aria-label="Previous"
            @click="navigate"
          >
            <svg-icon name="chevron-right" class="w-5 h-5 rotate-90" />
          </component>
        </router-link>
        <div v-if="showFirstDots" class="item dots">...</div>
        <span v-for="pageNum in numberOfLinks" :key="pageNum + startNumber - 1">
          <router-link
            :to="linkGen(pageNum + startNumber - 1)"
            :title="`Page ${pageNum + startNumber - 1}`"
            :aria-label="pageNum + startNumber - 1"
            class="item page-link"
            :class="{ active: isActive(pageNum + startNumber - 1) }"
          >
            {{ pageNum + startNumber - 1 }}
          </router-link>
        </span>
        <div v-if="showLastDots" class="item dots">...</div>
        <router-link
          v-if="showLastDots && displayLastPage"
          v-slot="{ navigate }"
          :to="linkGen(1)"
          custom
        >
          <component
            :is="getTag(pages)"
            class="item page-link"
            :to="linkGen(pages)"
            :title="`Page ${pages}`"
            aria-label="Next"
            @click="navigate"
          >
            {{ pages }}
          </component>
        </router-link>
        <router-link v-slot="{ navigate }" :to="linkGen(current + 1)" custom>
          <component
            :is="getTag(pages)"
            class="item page-link"
            :to="linkGen(current + 1)"
            title="Next"
            aria-label="Next"
            @click="navigate"
          >
            <svg-icon name="chevron-right" class="w-5 h-5" />
          </component>
        </router-link>
      </div>
      <div class="-mt-px flex w-0 flex-1 justify-end">
        <router-link :to="linkGen(pages)" class="item extreme-link">
          Last
          <svg-icon name="arrow-narrow-right" class="ml-1 w-5 h-5" />
        </router-link>
      </div>
    </nav>
  </div>
</template>

<style lang="css" scoped>
.item {
  @apply inline-flex items-center border-t-2 border-transparent pt-4 text-sm font-medium text-gray-500;
}
.dots {
  @apply px-4;
}
.page-link {
  @apply px-4 hover:border-gray-300 hover:text-gray-700 transition-colors duration-75;
}
.active {
  @apply border-primary-500 text-primary-600 dark:text-primary-500;
}
.extreme-link {
  @apply pr-1 hover:border-gray-300 hover:text-gray-700 transition-colors duration-75;
}
em {
  font-style: normal;
  @apply opacity-60 hover:!border-transparent;
}
</style>
