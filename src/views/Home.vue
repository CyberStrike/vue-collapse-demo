<template>
  <div class="home">
    <div class="container pt-5">
      <div class="col col-md-10 mx-auto">
        <div class="accordion">
          <div class="card bg-transparent border">
            <div class="card-header d-flex align-items-center justify-content-between" data-target="one" @click="toggle">
              <span class="btn btn-link font-weight-bold px-0">
                Jumps On Close
              </span>
              <i :class="['fas text-primary',  iconClass('one')]"></i>
            </div>
            <transition-collapse>
              <div class="card-body text-white pt-0" v-if="this.shouldShow('one')">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </transition-collapse>
          </div>
          <div class="card bg-transparent border">
            <div class="card-header d-flex align-items-center justify-content-between" data-target="two" @click="toggle">
              <span class="btn btn-link font-weight-bold px-0">
                Transitions Smoothly
              </span>
              <i :class="['fas text-primary',  iconClass('two')]"></i>
            </div>
            <transition-collapse>
              <div v-show="this.shouldShow('two')">
                <div class="card-body text-white pt-0">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </transition-collapse>
          </div>
          <div class="card bg-transparent border" >
            <div class="card-header d-flex align-items-center justify-content-between" data-target="three" @click="toggle">
              <span class="btn btn-link font-weight-bold px-0">
                Transitions Smoothly
              </span>
              <i :class="['fas text-primary',  iconClass('three')]"></i>
            </div>
            <transition-collapse>
              <div v-show="this.shouldShow('three')">
                <div class="card-body text-white pt-0">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                  moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                  shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                  proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                  aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </transition-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TransitionCollapse from '@/components/TransitionCollapse'

export default {
  name: 'home',
  data: () => ({
    show: []
  }),
  components: {
    TransitionCollapse
  },
  methods: {
    // toggle (e) {
    //   this.show = e.target.dataset.target || e.target.parentElement.dataset.target
    // }
    toggle (e) {
      const target = e.target.dataset.target || e.target.parentElement.dataset.target
      if (this.shouldShow(target)) return this.removeFromShow(target)
      this.addToShow(target)
    },
    addToShow (target) {
      this.show.push(target)
    },
    removeFromShow (target) {
      this.show = this.show.filter((t) => t !== target)
    },
    shouldShow (target) {
      return this.show.includes(target)
    },
    iconClass (target) {
      if (this.shouldShow(target)) return 'fa-minus'
      return 'fa-plus'
    }
  }
}
</script>

<style>
  .card-header {
    cursor: pointer;
  }
</style>
