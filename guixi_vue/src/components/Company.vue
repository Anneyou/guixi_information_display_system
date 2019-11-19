<template>
  <Common :companyName="baseCompany">
    <template slot="communityBreadcrumns">
      <div class="description">{{ baseDescription }}</div>
    </template>
    <template slot="fieldsList">
      <div class="company-body">
        <div class="title">{{ information.company }}</div>
        <div class="list">
          <div class="list-item">
            <div class="left-head">企业联络人及联系方式</div>
            <div class="right-body">{{ information.business_contact }}</div>
          </div>
          <div class="list-item">
            <div class="left-head">网格协管员及联系电话</div>
            <div class="right-body">{{ information.grid_coordinator }}</div>
          </div>
          <div class="list-item">
            <div class="left-head">社区民警及联系电话</div>
            <div class="right-body">{{ information.community_police }}</div>
          </div>
        </div>
      </div>
      <router-link :to="{name: 'Enterprise', query: {company: information.company}}" class="error-correction-button">查看企业信息</router-link>
    </template>
  </Common>
</template>

<script>
import Common from './Common'
import axios from 'axios'
import Mixin from './Mixin'

export default {
  mixins: [ Mixin ],

  name: 'Company',

  data () {
    return {
      information: {}
    }
  },

  components: { Common },

  created () {
    this.doRequst()
  },

  methods: {
    doRequst () {
      axios.get(this.baseUrl + 'company?' + this.getQueryString())
        .then(res => {
          this.information = res.data.result[0]
        })
        .catch(err => { console.log(err) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description {
  margin-top: .4rem;
  font-size: .7rem;
  color: #bdbdbd;
  line-height: 1.5;
  text-align: right;
}

.company-body {
  flex: 1;
  width: 100%;
  background-color: white;
  border-radius: .3rem;
  padding: 0 .9rem;
}

.company-body > .title {
  height: 2.25rem;
  font-size: .6rem;
  color: #95a4b3;
  line-height: 1.5;
  border-bottom: .05rem solid #e9eaeb;
  display: flex;
  align-items: center;
}

.company-body .list-item {
  height: 2.25rem;
  font-size: .6rem;
  color: #8d8d8d;
  line-height: 1.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: .05rem solid #e9eaeb;
}

.error-correction-button {
  height: 2rem;;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .7rem;
  color: white;
  line-height: 1.5;
  background: linear-gradient(#f08200, #f45e06);
  margin: 1.2rem 0 1.6rem;
  border-radius: .3rem;
}
</style>
