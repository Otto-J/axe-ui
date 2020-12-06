<template>
  <div class="axe-form-item">
    <label v-if="label || $slots.label" class="axe-form-item__label">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="el-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AxeFormItem',
  props: {
    label: String,
    labelWidth: String
  },
  setup() {
    // const axeForm = inject(axeFormKey, {})
    // const { label } = props
    // return {
    //   label
    // }
  }
})
</script>

<style></style>
