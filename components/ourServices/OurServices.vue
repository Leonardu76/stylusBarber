
<template >
  <div class="principal" >
    <div v-if="loading">
      <Skeleton :customRows="4" customWidth="15%" />
    </div>
    <div v-else data-aos="fade-up" data-aos-duration="1500">

      <h1> Nossos Serviços</h1>
      <a-row class="card-div" >
        <div v-for="dados in data.data" :key="dados.id">

          <a-card hoverable class="card">
            <template #cover>
              <img class="image" alt="example" :src="dados.image" />
            </template>
            <a-card-meta :title="dados.description" description="A partir de R$:45,00">
            </a-card-meta>
          </a-card>
        </div>
      </a-row>
    </div>
  </div>
</template>


<script >
import Skeleton from '../load/skeleton/DefaultSkeleton.vue';

export default {
  data() {
    return {
      loading: true,
      resume: [],
    }
  }, components: {
    Skeleton,
  },
  mounted() {
    setTimeout(() => {
      import('../../data/our-services.json').then((data) => {
        this.data = data;
        this.loading = false;
      })
    }, 1500);

  },
}
</script>


<style scoped>
:deep(.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph >li) {
  height: 300px;
  width: 200px;
  display: inline-flex;
  align-items: baseline;
  margin-left: 18px;

}
.skeleton-container-div{
  justify-content: center;
}
:deep(.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph >li:last-child) {
  width: 200px !important;
}

.card {
  width: 230px;
  margin-left: 18px;
  transition: 1s;
  text-align: center;
}

h1 {
  text-align: center;
  font-family: Poppins;
  text-transform: uppercase;
  padding-bottom: 40px;
}

.card-div {
  justify-content: center;
  height: 200px;

}

.card:hover {
  transition: 1s;
  width: 240px;
  box-shadow: -2px -14px 33px 1px #010b0cde;
  font-size: 18px;
}

@media screen and (max-width: 767px) {
    .card-div {
      height: auto;
    }
    .card{
      margin-bottom: 15px;
      max-width: 190px;
      width: auto;
      margin-left: 18px;

    }
  }


  @media screen and (min-width: 768px)  and (max-width:991px) {
    .card-div{
      height: 100px;
    }
    .card{
      margin-bottom: 15px;
    }
  }
</style>