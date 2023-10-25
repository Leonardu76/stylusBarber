<template>
  
  <a-space direction="vertical" :style="{ width: '100%' }">
    <a-layout>
      <div class="header">
        <Menu/>
        <Slide />
      </div >
      <div class="body">
        <a-layout-content>
          <Banner/>
        </a-layout-content>
      </div>

      <a-layout-content class="about">
          <About/>
          <br>
        </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-space>
</template>

<script>
export default {

  name: 'IndexPage'
}
</script>


<style scoped>
body {
}
.header{
  width: 100%;
}

.about{
  background: #020101bf;
  margin-top: 4px;


}
</style>