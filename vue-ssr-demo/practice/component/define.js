import Vue from 'vue'

const component = {
  props: {
    active: {
      validator (value) {
        return typeof value === 'boolean'
      }
      // type: Boolean,
      // required: true,
      // default () {
      //   return true
      // }
    },
    propOne: String
  },
  template: `<div>
                <input type="text" v-model="propOne">
                <span @click="handleChange">{{propOne}}</span>
                <span v-show="active">see me if active</span>
            </div>`,
  data () {
    return {
      text: 0
    }
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

Vue.component('comp', component)

new Vue({
  components: {
    CompOne: component
  },
  data: {
    prop1: 'text1'
  },
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  el: '#root',
  template: `
  <div>
    <comp-one ref="comp1" :active="true" :propOne="prop1" @change="handleChange"></comp-one>
    <comp-one :active="false"></comp-one>
  </div>`
})
