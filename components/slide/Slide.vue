<template>
  <div v-if="loading">
    <Skeleton :customRows="1"  customWidth="100%"/>
  </div>

  <div v-else>

    <a-carousel autoplay>
      <a-carousel-slide v-for="dados in slides.slides" :key="dados.id">
        <div v-if="dados.type === 'imagem'" :style="{
          backgroundImage: `url(${dados.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '730px',
          padding: '20px',
        }" class="slide-with-overlay">
          <div class="overlay">
            <div v-if="dados.legend">
              <Legend :legend="dados.legend" />
            </div>
          </div>
        </div>
        <div v-else class="slide-with-overlay">
          <video class="background-video" src="../../public/production_id_3998510 (2160p).mp4" loop="" autoplay=""
            muted=""></video>
          <div class="overlay"> </div>

        </div>
      </a-carousel-slide>
    </a-carousel>
  </div>
</template>



<script>
import Skeleton from '../load/skeleton/DefaultSkeleton.vue';
export default {
  data() {
    return {
      loading: true,
      slides: [],
    }
  }, components: {
    Skeleton,
  },
  mounted() {
      import('../../data/slides.json').then((data) => {
        this.slides = data;
        this.loading = false;
      })
  },
};
</script>




<style scoped>
:deep(.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph >li) {
  height: 400px;
}

:deep(.slick-slide) {
  max-height: 730px;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}

.slide-with-overlay {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.background-video {
  width: 104%;

}
</style>


