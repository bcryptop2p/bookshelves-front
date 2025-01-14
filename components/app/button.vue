<script setup lang="ts">
import SvgIcon from '@/components/svg-icon.vue'

interface Props {
  color?: 'primary' | 'secondary' | 'white' | 'danger'
  type?: 'button' | 'reset' | 'submit'
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string | object
  disabled?: boolean
  download?: boolean
  icon?: string
  loading?: boolean
  outlined?: boolean
  hideLabel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  type: 'button',
  align: 'left',
  size: 'md',
  href: undefined,
  to: undefined,
  disabled: false,
  download: false,
  icon: undefined,
  loading: false,
})

defineEmits(['click'])

const tag = ref('button')
const btn = ref<HTMLElement>()

if (props.href) {
  tag.value = 'a'
}
if (props.to) {
  tag.value = 'router-link'
}

const alignment = computed((): string => {
  const alignements: Keyable = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
    default: 'mx-auto',
  }
  let current = props.align
  return alignements[current] || alignements.default
})

onMounted(() => {
  if (props.href) {
    const element: any = btn.value
    if (element instanceof HTMLElement) {
      let current = props.href
      element.setAttribute('href', current)
    }
  }
})
</script>

<template>
  <component
    :is="tag"
    ref="btn"
    :to="to !== undefined ? $localePath(to) : null"
    :target="href ? (download ? '' : '_blank') : null"
    :rel="href ? 'noopener noreferrer' : null"
    :class="[color, { disabled: disabled }, size]"
    class="btn relative"
    :type="type"
    :disabled="disabled"
    :download="download"
    @click.stop="$emit('click')"
  >
    <span class="absolute top-1/2 left-2 -translate-y-1/2 transform">
      <svg
        v-if="loading"
        class="h-5 w-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>
    <span :class="[{ 'space-x-2': icon }, alignment]" class="flex items-center">
      <svg-icon v-if="icon" :name="icon" class="h-5 w-5" />
      <span class="inline-block">
        <slot />
      </span>
    </span>
    <span v-if="href" class="ml-1 block">
      <svg-icon name="external-link" class="h-4 w-4" />
    </span>
  </component>
</template>

<style lang="css" scoped>
.sm {
  @apply px-2 py-1;
}
.md {
  @apply px-4 py-2;
}
.lg {
  @apply px-5 py-3;
}

.btn {
  @apply inline-flex items-center rounded-md border text-base font-semibold transition-colors duration-100;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2;
  @apply dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800;
}
.secondary {
  @apply border-transparent bg-primary-100 text-primary-600 hover:bg-primary-200 hover:text-primary-600;
  @apply dark:bg-primary-200 dark:text-gray-800 dark:hover:bg-primary-300;
}
.primary {
  @apply border-transparent bg-primary-600 text-white shadow-sm hover:bg-primary-500;
}
.white {
  @apply border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-primary-100;
  @apply dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700;
}
.danger {
  @apply border-red-300 bg-white text-red-700 shadow-sm hover:bg-red-100;
  @apply dark:border-red-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-red-700;
}

.disabled {
  @apply !opacity-50;
  pointer-events: none;
}
</style>
