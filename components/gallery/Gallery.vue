
<template >
    <div class="principal">
        <div v-if="loading">
            <Skeleton :customRows="5" customWidth="20%" />
        </div>
        <div v-else>
            <div>
                <h1 data-aos="zoom-in-up">Galeria de fotos</h1>
            </div>

            <div class="body">
                <a-image-preview-group>

                    <div data-aos="zoom-in" data-aos-duration="800" class="div-image" v-for="dados in data.data"
                        :key="dados.id">
                        <a-image :width="350" :height="250" :src="dados.image" />
                    </div>

                </a-image-preview-group>
            </div>
            <nuxt-link to='fotos'>            

            <div class="button">
                <a-button ghost> Ver mais
                </a-button>
            </div>
        </nuxt-link>
        </div>
    </div>
</template>


<script >
import Skeleton from '../load/skeleton/DefaultSkeleton.vue';

export default {
    data() {
        return {
            loading: true,
            data: [],
        }
    }, components: {
        Skeleton
    },

    mounted() {

        import('../../data/gallery.json').then((data) => {
            this.data = data;
            this.loading = false;
        })

    },
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

.button {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    font-size: 15px;

}

.ant-btn:hover {
    border-color: var(--terciary-color);
    ;
    color: var(--terciary-color);
    font-size: 16px;
    transition: 1s;
}

.ant-btn {
    transition: 1s;
}

.principal {
    padding-top: 150px;
    background: var(--secondary-color);
    padding-bottom: 80px;

}

:deep(.ant-image-mask-info) {
    display: none;
}


:deep(.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph >li) {
    width: 360px;
    height: 260px;
    background-color: var(--terciary-color);
    display: inline-flex;
    margin: 9px;
}

:deep(.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph >li:last-child) {
    width: 360px !important;
}

.ant-image-img {
    transition: 1s;

}

:deep(.ant-image:hover .ant-image-img),
:deep(.ant-image .ant-image-mask) {
    width: 360px;
    height: 260px !important;
    transition: 1s;
}

.skeleton-container-div {
    display: inline-flex;
    flex-wrap: wrap;
    margin-inline-start: 40px;
}

@media screen and (max-width: 767px) {
    .principal {
        padding-top: 30px;
    }

    :deep(.ant-image-img) {
        width: 250px !important;
        height: 150px !important;
    }
    :deep(.ant-image){
        height: unset !important;
        width: unset !important;
    }
    :deep(.ant-image:hover .ant-image-img),
    :deep(.ant-image .ant-image-mask) {
        width: 260px;
        height: 160px !important;
    }
}

@media screen and (min-width: 768px)  and (max-width:991px) {
    
    .principal {
        padding-top: 630px;
    }
}
@media screen  and (max-width:1159px) {
    .body{
        justify-content: center;
    }
}
</style>