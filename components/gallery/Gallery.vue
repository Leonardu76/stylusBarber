
<template >
    <div class="principal">

        <div>

            <h1>Galeria de fotos</h1>

        </div>

        <div class="body">

            <a-image-preview-group>
                <div class="div-image" v-for="dados in data.data" :key="dados.id">

                    <a-image :width="350" :height="250" :src="dados.image" />
                </div>

            </a-image-preview-group>
            <div class="div-image" v-for="dados in data.data" :key="dados.id">

                <vue-gallery-slideshow :images="dados.image" />


            </div>
        
        </div>
        <div class="button">
            <a-button ghost> Ver mais
            </a-button>
        </div>
       
    </div>
</template>


<script >
import gallery from '../../data/gallery.json'
// import VueGallerySlideshow from 'vue-gallery-slideshow'; 

export default {
    data() {
        return {
            data: gallery,
        }
    }
}
</script>


<style scoped>
h1 {
    font-family: Poppins;
    text-transform: uppercase;
    padding: 40px;
    color: white;
    text-align: center;
}

.body {
    display: inline-flex;
    flex-wrap: wrap;
    margin-inline-start: 40px;
}

.div-image {
    margin: 9px;

}

.button{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    font-size: 15px;

}
.ant-btn:hover {
    border-color: var(--terciary-color);;
    color: var(--terciary-color);
    font-size: 16px;
    transition: 1s;
}

.ant-btn{
    transition:1s ;
}
.principal {
    padding-top: 150px;
    background: var(--secondary-color);
    padding-bottom: 80px;
}

:deep(.ant-image-mask-info) {
    display: none;
}



.ant-image-img{
    transition: 1s;

}
:deep(.ant-image:hover .ant-image-img) , :deep(.ant-image .ant-image-mask){
    width: 360px;
    height:260px !important;
    transition: 1s;
}

</style>