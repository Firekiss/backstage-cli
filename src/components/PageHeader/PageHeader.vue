<template>
  <div class="page-header">
    <s-breadcrumb />
    <div class="detail">
      <div class="main" v-if="!$route.meta.hiddenHeaderContent">
         <div class="row">
            <img v-if="logo" :src="logo" class="logo"/>
            <h1 v-if="title" class="title">{{ title }}</h1>
         </div>
      </div>
    </div>
  </div>
</template>

<script>

import Breadcrumb from '@/components/tools/Breadcrumb'

export default {
  name: 'PageHeader',
  components: {
    's-breadcrumb': Breadcrumb
  },
  props: {
    title: {
      type: [String, Boolean],
      default: true,
      required: false
    },
    logo: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  background: #fff;
  padding: 16px 32px 0;
  border-bottom: 1px solid #e8e8e8;
}

.breadcrumb {
  margin-bottom: 16px;
}

.detail {
  display: flex;
}

.main {
  width: 100%;
  flex: 0 1 auto;
}

.row {
  display: flex;
  width: 100%;
}

.title {
  font-size: 20px;
  font-weight: 500;

  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 16px;
  flex: auto;
}
.logo {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-right: 16px;
}
</style>