
<template class="principal">
  <h1> Nossos Serviços</h1>
  <a-row class="card-div">
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
</template>


<script >
import resume from '../../data/our-services.json'

export default {
  data() {
    return {
      data: resume,
    }
  }
}
</script>


<style scoped>
.card {
  width: 230px;
  margin-left: 18px;
  transition: 1s;
  text-align:center;
}

h1 {
  text-align: center;
  font-family: Poppins;
}

.card-div {
  justify-content: center;
}

.card:hover{
  transition: 1s;
  width: 240px;
  box-shadow: -2px -14px 33px 1px #181817;
  font-size:18px;
}


</style>