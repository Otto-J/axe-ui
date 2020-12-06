<template>
  <div class="area demo-form">
    <div class="demo-title">form</div>
    <p>基本用法1</p>
    <axe-form
      ref="formRef"
      :rules="rules"
      :model="form"
      :inline="false"
      label-position="right"
      label-width="80px"
      label-suffix="："
    >
      <axe-form-item label="姓名" prop="name">
        <axe-input v-model="form.name" />
      </axe-form-item>
      <axe-form-item label="职业" prop="job">
        <axe-input v-model="form.job" />
      </axe-form-item>
    </axe-form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Form',
  setup() {
    const input = ref('')
    const formRef = ref(null)
    const form = {
      name: '',
      job: ''
    }
    const rules = {
      name: [],
      job: []
    }
    return {
      input,
      form,
      formRef,
      rules
    }
  }
})
</script>

<style>
.my-axe-form {
  width: 400px;
  margin: 10px 0;
}
</style>
