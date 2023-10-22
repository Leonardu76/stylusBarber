<template>
    <div class="principal centered-container">

        <a-row type="flex" justify="center" align="middle">
            <div v-for="dados in data.menu" :key="dados.id">
                <nuxt-link :to="dados.url" >
                    <a-col class="gutter-row" :span="2">
                        <div class="gutter-box active">{{ dados.name }}</div>
                    </a-col>
                </nuxt-link>
            </div>
        </a-row>

    </div>
</template>

<script>
import menu from '../../data/menu.json'
export default {
    data() {
        return {
            data: menu,
        }
    }
}
</script>

<style scoped>
.gutter-box {
    text-align: center;
    width: max-content;
    font-family: 'Poppins';
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    min-width: 130px;
    max-width: 150px;
    margin-top: 12px;
    margin-inline-start: 10px;
    transition: 1s;
    font-size: 13px;


}
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.principal {
    z-index: 1;
    width: 100%;
    position: absolute;


}

.gutter-box:hover{
    font-size: 13.5px;
    transition: 1s;
    border-bottom: 1px solid #fff;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
}


</style>