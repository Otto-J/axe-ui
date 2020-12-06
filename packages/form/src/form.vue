<template>
  <form
    :class="[
      'axe-form',
      labelPosition ? 'axe-form--label-' + labelPosition : '',
      { 'axe-form--inline': inline }
    ]"
  >
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent, toRefs, provide, reactive } from 'vue'
// type LabelPosition = 'left' | 'right' | 'top'
export default defineComponent({
  name: 'AxeForm',
  props: {
    model: Object,
    labelWith: String,
    labelPosition: String
  },
  setup(props) {
    const { model } = toRefs(props)

    provide(
      'axeForm',
      reactive({
        model
      })
    )
  }
})
</script>
