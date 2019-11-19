<template>
  <Common :companyName="baseCompany">
    <template slot="communityBreadcrumns">
      <div class="description">{{ baseDescription }}</div>
    </template>
    <template slot="fieldsList">
      <div class="company-body">
        <div class="head">
          <div class="title">{{ company }}</div>
          <button>企业自查上报</button>
        </div>
        <div class="list">
          <div class="list-item">
            <div class="left-head">治安责任书</div>
            <div class="right-body"></div>
          </div>
          <div class="list-item">
            <div class="left-head">
              <div class="title">花名册</div>
              <button class="up-button">更新</button>
            </div>
            <div class="right-body"></div>
          </div>
          <div class="list-item">
            <div class="left-head">登记表</div>
            <div class="right-body"></div>
          </div>
          <div class="list-item">
            <div class="left-head">单位调查表</div>
            <div class="right-body"></div>
          </div>
          <div class="list-item">
            <div class="left-head">网格员工作痕迹</div>
            <div class="right-body"></div>
          </div>
        </div>
      </div>
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
      company: this.getQueryString().split('=')[1],
      information: {}
    }
  },

  components: { Common },

  created () {
    this.doRequst()
  },

  methods: {
    doRequst () {
      axios.get(this.baseUrl + 'enterprise?' + this.getQueryString())
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

.community-home-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.company-body {
  width: 100%;
  background-color: white;
  border-radius: .3rem;
  padding: 0 .9rem;
}

.company-body > .head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: .05rem solid #e9eaeb;
}

.company-body > .head > button {
  height: 1.4rem;
  padding: 0 .6rem;
  font-size: .6rem;
  color: white;
  line-height: 1.5;
  background: linear-gradient(#f08200, #f45e06);
  border-radius: .3rem;
}

.company-body > .head >.title {
  height: 2.25rem;
  font-size: .6rem;
  color: #95a4b3;
  line-height: 1.5;
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
.company-body .list-item > .left-head {
  display: flex;
}

.company-body .list-item > .left-head > .up-button {
  padding: 0 .6rem;
  font-size: .6rem;
  color: #f08200;
  border: 1px solid #f08200;
  border-radius: .2rem;
  margin-left: .6rem;
  background: transparent;
}

.error-correction-button {
  height: 2rem;;
  width: 100%;
  font-size: .7rem;
  color: white;
  line-height: 1.5;
  background: linear-gradient(#f08200, #f45e06);
  margin: 1.2rem 0 1.6rem;
  border-radius: .3rem;
}
</style>
