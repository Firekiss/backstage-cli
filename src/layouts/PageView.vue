<template>
  <div>
    <page-header v-if="!$route.meta.hiddenHeaderContent" :title="pageTitle"></page-header>
    <div class="content">
      <slot>
        <router-view ref="content" />
      </slot>
    </div>
  </div>
</template>

<script>

import PageHeader from '@/components/PageHeader'

export default {
  name: 'PageView',
  props: {
    title: {
      type: [String, Boolean],
      default: true
    }
  },
  data() {
    return {
      pageTitle: null
    }
  },
  methods: {
    getPageMeta() {
      this.pageTitle = (typeof(this.title) === 'string' || !this.title) ? this.title : this.$route.meta.title
    }
  },
  mounted() {
    this.getPageMeta()
  },
  components: {
    PageHeader
  }
}
</script>

<style lang="scss" scoped>
.content {
  min-height: 360px;
  margin: 24px 24px 0;
  background-color: #fff;
}
</style>