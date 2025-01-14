<script lang="ts" setup>
import HomeHero from '@/components/home/hero.vue'
import HomeStatistics from '@/components/home/statistics.vue'
import HomeCloudLogos from '@/components/home/cloud-logos.vue'
import HomeSelectedEntities from '@/components/home/selected-entities.vue'
import HomeFeatures from '@/components/home/features.vue'
import HomeFeaturesHighlights from '@/components/home/features-highlights.vue'
import HomeCta from '@/components/home/cta.vue'

import { objectIsEmpty } from '~/utils/methods'
import { useApplicationStore } from '~~/store/application'

const { nuxtAsyncData } = useFetchable()
const homePage = ref<CmsHomePage>()

const store = useApplicationStore()

if (!objectIsEmpty(store.homePage)) {
  homePage.value = store.homePage
} else {
  const response = await nuxtAsyncData<CmsHomePage>('/cms/home-page')

  store.setHomePage(response)
  homePage.value = response
}

const selection: SelectedEntities = {
  key: 'selection',
  endpoint: '/entities/selection',
  eyebrow: 'Want to read a good book?',
  right: false,
  title: 'Selection of books & series',
  text: 'If you search a new book to read, check this selection of eBooks.',
}
const latest: SelectedEntities = {
  key: 'latest',
  endpoint: '/entities/latest',
  eyebrow: 'Hyped by new books?',
  right: true,
  title: 'Latest books & series',
  text: 'You check new books & series on? Here you have latest books!',
}

useMeta({
  title: 'Home',
})
</script>

<template>
  <div>
    <Suspense>
      <div v-if="homePage">
        <home-hero :hero="homePage.hero" class="pt-5" />
        <home-statistics :statistics="homePage.statistics" />
        <home-cloud-logos :logos="homePage.logos" />
        <home-selected-entities class="mt-8 md:mt-16" :selection="selection" />
        <!-- <home-features :features="homePage.features" /> -->
        <!-- <home-selected-entities class="mt-8 lg:mt-16" :selection="latest" /> -->
        <!-- <home-features-highlights :highlights="homePage.highlights" /> -->
        <home-cta />
      </div>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>
