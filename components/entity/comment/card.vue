<template>
  <div>TODO comment-card</div>
</template>

<!-- <template>
  <li v-if="comment.user" class="comment mb-8">
    <div class="flex space-x-3">
      <div class="shrink-0">
        <app-img
          :src="comment.user.avatar"
          :color="comment.user.color"
          class="h-10 w-10"
          override="rounded-full"
          :alt="comment.user.name"
        />
      </div>
      <div>
        <div>
          <router-link
            :to="
              localePath({
                name: 'users-slug',
                params: { slug: comment.user.slug },
              })
            "
            class="border-b border-gray-900 text-sm dark:border-gray-100"
          >
            <span class="font-medium text-gray-900 dark:text-gray-100">{{
              comment.user.name
            }}</span>
          </router-link>
        </div>
        <field-rating-stars
          v-if="$config.moduleSocialRating"
          :rating="comment.rating"
          class="mt-2 mb-1"
          disable
        />
        <div class="comment-text prose prose-lg dark:prose-invert">
          <div
            :ref="comment.id"
            class="light-md mt-1 overflow-hidden text-sm text-gray-700 dark:text-gray-300"
            :class="overflow ? 'overflow-comment' : ''"
            v-html="comment.text"
          />
          <button
            v-if="comment.text.length > 300"
            type="button"
            class="mt-2 text-sm font-medium text-primary-600"
            @click="toggleFullComment(comment.id, comment.text)"
          >
            <span v-if="overflow">See more</span>
            <span v-else>Hide</span>
          </button>
        </div>
        <div class="mt-2 flex items-center space-x-2 text-sm">
          <div>
            <span class="font-medium text-gray-500"
              >Posted from {{ calExactTimeDiff(comment.createdAt) }}</span
            >
            <span
              v-if="comment.createdAt !== comment.updatedAt"
              class="font-medium text-gray-500"
              >, modified from {{ calExactTimeDiff(comment.updatedAt) }}</span
            >
          </div>
          <button
            v-if="
              $auth.$state.loggedIn &&
              comment.user.id === $auth.$state.user.data.id
            "
            type="button"
            class="text-gray-300 hover:text-gray-400 dark:text-gray-200 dark:hover:text-gray-300"
            title="Delete"
            aria-label="Delete"
            @click="deleteComment(comment.id)"
          >
            <svg-icon name="trash" class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { calExactTimeDiff } from '~/utils/methods'

export default {
  name: 'CommentsCard',
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      overflow: true,
    }
  },
  methods: {
    calExactTimeDiff,
    toggleFullComment(refId, originalText) {
      this.overflow = !this.overflow
    },
    deleteComment(id) {
      this.$emit('destroy', id)
    },
  },
}
</script>

<style lang="css" scoped>
.comment::v-deep {
  & .comment-text .overflow-comment {
    width: 95%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  & .comment-text .overflow-comment p {
    display: contents;
  }

  & .comment-text .overflow-comment p:after {
    content: '\A';
    white-space: pre;
  }
}
</style> -->
