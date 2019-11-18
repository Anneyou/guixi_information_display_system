<template>
  <Common :companyName="baseCompany">
    <template slot="communityBreadcrumns">
      <div class="description">{{ baseDescription }}</div>
    </template>
    <template slot="fieldsList">
      <div class="company-body">
        <div class="title">{{ company }}</div>
        <div class="list"></div>
      </div>
      <button class="error-correction-button">查看企业信息</button>
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
      company: ''
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
          console.log(res)
          // this.home = res.data.company
          // this.buildings = res.data.result
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

}

.icon-icon_dong {
  background-image: linear-gradient(to right,#f08200, #f45e06);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.building-name {
  font-size: .7rem;
  color: #8d8d8d;
  line-height: 1.5;
  font-weight: 500;
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
