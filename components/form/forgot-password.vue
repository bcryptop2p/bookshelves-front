<script setup lang="ts">
// import useAuth from '~/composables/useAuth'
// import { useFormStore } from '~/store/form'

// const { passwordForgot } = useAuth()
// const store = useFormStore()

const data = ref({
  email: '',
})
const test = ref({
  email: 'admin@mail.com',
})

// store.init(form, test)
// store.setButton('Get new password')
// store.setMethod(passwordForgot)

// const response = computed(() => store.getResponse())

// const emailError = ref<string>()
</script>

<template>
  <form-layout title="Get new password">
    <field-text-input
      v-model="data.email"
      name="email"
      label="Email"
      type="email"
      autocomplete="email"
      required
    >
      <!-- <template v-if="emailError" #error>{{ emailError }}</template> -->
    </field-text-input>
    <template #extra>
      <!-- <div v-if="response && response.status === 200" class="mt-3 text-center">
        {{ response.data.message }}
      </div> -->
    </template>
  </form-layout>
</template>
