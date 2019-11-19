<template>
  <Common :companyName="baseCompany"
          :fields="units">
    <template slot="communityBreadcrumns">
      <div class="community-breadcrumns">
        <router-link :to="{name: 'Home', query: {home: routes.home}}">{{ routes.home }}</router-link> &gt;
        <span>{{ routes.building }}栋</span>
      </div>
    </template>
    <template slot="fieldsList">
      <div class="building-unit">
        <template v-for="(unit, index) in units">
          <router-link :to="{name: 'Unit', query: {home: home, building: building, unit: unit }}" :key="index" class="community-home-body-item">
            <i class="icon-icon_danyuan"></i>
            <span class="building-name">{{ unit }}单元</span>
          </router-link>
        </template>
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

  name: 'Building',

  components: { Common },

  data () {
    return {
      home: '',
      building: '',
      units: []
    }
  },

  created () {
    this.doRequst()
  },

  methods: {
    doRequst () {
      axios.get(this.baseUrl + 'building?' + this.getQueryString())
        .then(res => {
          this.home = res.data.home
          this.building = res.data.building
          this.units = res.data.result
        })
        .catch(err => { console.log(err) })
    }
  }
}
</script>

<style>
.community-name {
  margin-top: .4rem;
  font-size: .7rem;
  color: #bdbdbd;
  line-height: 1.5;
  text-align: right;
}

.building-unit {
  flex: 1;
  display: flex;
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

.icon-icon_danyuan {
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
</style>
