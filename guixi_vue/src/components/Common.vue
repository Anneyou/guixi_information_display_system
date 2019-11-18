<template>
  <div class="community-home">
    <div class="community-home-head">
      <div class="head-left">
        <img class="home-logo" src="../assets/image_logo.png" alt="">
      </div>
      <div class="head-right">
        <div class="company-name">{{ companyName }}</div>
        <slot name="communityBreadcrumns">
          <div class="community-breadcrumns"></div>
        </slot>
      </div>
    </div>
    <div class="community-home-body">
      <slot name="fieldsList"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Common',
  props: {
    companyName: {
      type: String
    },
    fields: {
      type: Array
    }
  }
}
</script>

<style>
.community-home-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  background-color: white;
  border-radius: .3rem;
  padding: 0 .9rem;
}

.home-logo {
  width: 2.5rem;
  height: 2.5rem;
}

.company-name {
  font-size: .9rem;
  color: #606060;
  line-height: 1.5;
  font-weight: 500;
}

.community-breadcrumns {
  text-align: right;
  color: #bdbdbd;
  font-size: .7rem;
  margin-top: .4rem;
}

.community-breadcrumns > a {
  margin-top: .4rem;
  font-size: .7rem;
  color: #bdbdbd;
  line-height: 1.5;
}

.community-home-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding-top: 1.4rem;
}

.community-home-body-item {
  height: 4.8rem;
  width: 3.8rem;
  background-color: white;
  padding: .6rem .4rem .4rem;
  box-sizing: border-box;
  border-radius: .3rem;
  margin-bottom: .4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: .4rem;
}

.community-home-body-item:nth-child(4n) {
  margin-right: 0;
}
</style>
