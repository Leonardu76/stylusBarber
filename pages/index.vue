<template>
  <a-space direction="vertical" :style="{ width: '100%' }">
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>


      <a-layout>
        <div class="header">
          <Menu />
          <Slide />
        </div>
        <div class="body">

          <a-layout-content>
            <Banner />
          </a-layout-content>
          <a-layout-content class="about">
            <About />
            <br>
          </a-layout-content>



          <a-layout-content class="services">
            <OurServices />
          </a-layout-content>


          <a-layout-content class="gallery">
            <Gallery />
          </a-layout-content>
          <a-layout-content class="news">
            <News />
          </a-layout-content>
        </div>

        <a-layout-footer><Footer/></a-layout-footer>
      </a-layout>
    </div>

  </a-space>
</template>

<script>
import Loader from '../components/load/loader/Loader.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default {

  data() {
    return {
      loading: true,
    };
  },
  components: {
    Loader,
  },
  mounted() {
    AOS.init();
    name: 'IndexPage'
    this.loading = false;

  },

}
</script>


<style scoped>
.body {}

.header {
  width: 100%;
}

.about {
  margin-top: 4px;

}

.services {
  margin-top: 5%;
}

.gallery {}
</style>