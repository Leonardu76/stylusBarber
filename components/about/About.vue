
<template class="principal">
    <div v-if="loading">
        <Skeleton :customRows="2" customWidth="50%" />
    </div>
    <div v-else data-aos="fade-up" data-aos-duration="1500">
        <div v-for="dados in data.resume" :key="dados.id">

            <a-row class="body">

                <a-col :span="10" class="resume-description">
                    <a-span>
                        <h1>Quem somos</h1>

                        {{ dados.description }}
                    </a-span>
                </a-col>


                <a-col :span="9" class="resume-photos">

                    <a-carousel arrows autoplay>
                        <template #prevArrow>
                            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                                <left-circle-outlined />
                            </div>
                        </template>
                        <template #nextArrow>
                            <div class="custom-slick-arrow" style="right: 10px">
                                <right-circle-outlined />
                            </div>
                        </template>

                        <div v-for="img in dados.img">
                            <div class="img-resume" :style="{
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',

                            }">
                            </div>
                        </div>
                    </a-carousel>


                </a-col>
                
            </a-row>

        </div>
        <nuxt-link to='quemsomos'>
<div class="button-div">
    <a-button class="button" ghost> Ver mais
    </a-button>
</div>
</nuxt-link>
    </div>


</template>


<script >
import Skeleton from '../load/skeleton/DefaultSkeleton.vue';

import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

export default {
    data() {
        return {
            loading: true,
            data: [],
        }
    }, components: {
        LeftCircleOutlined,
        RightCircleOutlined,
        Skeleton
    },
    mounted() {
        import('../../data/resume-about.json').then((data) => {
            this.data = data;
            this.loading = false;
        })

    },
}
</script>


<style scoped>
:deep(.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph >li) {
    height: 500px;
    max-width: 600px;
    display: inline-flex;

}

:deep(.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph >li:last-child) {
    width: 500px !important;
}

:deep(.slick-slide) {
    text-align: center;
    height: 470px;
    line-height: 160px;
    overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    transition: ease all 0.3s;
    opacity: 0.7;
    color: var(--terciary-color);
    z-index: 1;
}

:deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
}

:deep(.slick-arrow.custom-slick-arrow:hover) {
    opacity: 0.5;
}

.principal {
    margin-top: 20px;
    background: #020101bf;
}

.img-resume {
    height: 500px;
    max-height: 600px;
}

.resume-description {
    font-size: 21px;
    word-break: break-word;
    margin-left: 105px;
    line-height: 33px;
    color: white;
    padding: 40px;
    background: var(--secondary-color);
}

h1 {
    text-align: center;
}

.button-div {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    font-size: 15px;
}

.button {
    color: var(--secondary-color);
    border-color: var(--secondary-color);
    ;
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
@media screen and (max-width: 767px) {
    .body {
        flex-direction: column-reverse;
    }

    .resume-photos, .resume-description {
        max-width: 640px;
        width: 100%;
    }
    .resume-description{
        margin-left: unset;

    }
}

@media screen and (min-width: 768px)  and (max-width:1121px) {
    .resume-description{
        height: 470px;
        overflow: auto;
    }}
</style>