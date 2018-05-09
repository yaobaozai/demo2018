<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullName}}{{counter}}</p>
    <router-link :to="{name: 'app', params: {id: 123}}">app123</router-link>
    <router-link :to="{name: 'app', params: {id: 445}}">app445</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

export default {
  components: {
    Header,
    Footer
  },
  mounted () {
    console.log(this.$store)
    // let i = 1
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapGetters(['fullName'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>
