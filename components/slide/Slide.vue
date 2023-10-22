<template>
    <a-carousel autoplay>
        <a-carousel-slide v-for="dados in data.slides" :key="dados.id">
  <div v-if="dados.type === 'imagem'" :style="{
    backgroundImage: `url(${dados.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '700px',
    padding: '20px',
  }" class="slide-with-overlay">
    <div class="overlay">
      <div v-if="dados.legend">
        <Legend :legend="dados.legend" />
      </div>
    </div>
  </div>
  <div v-else class="slide-with-overlay">
    <video class="background-video" src="../../public/production_id_3998510 (2160p).mp4" loop="" autoplay="" muted="" ></video>
    <div class="overlay">      </div>

  </div>
</a-carousel-slide>
    </a-carousel>
</template>



<script>
import slides from '../../data/slides.json'
export default {
    data() {
        return {
            data: slides,
        }
    }
}
</script>




<style scoped>
:deep(.slick-slide) {
    max-height: 750px;
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
.background-video{
  width: 100%;

}
</style>


