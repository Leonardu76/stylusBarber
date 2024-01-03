<template>
    <div class="principal">

        <div v-if="loading">
            <Skeleton :customRows="4" customWidth="100%" />
        </div>
        <div v-else data-aos="fade-up" data-aos-duration="1500">
            <h1>Blog</h1>

            <a-row class="card-div">

                <div v-for="dados in data.data" :key="dados.id">
                    <a-card hoverable style="width: 300px" class="card">
                        <template #cover>
                            <img alt="example" :src="dados.img" />
                        </template>
                        <h5>{{ dados.title }}</h5>
                        <a-row>
                            <a-col :span="5">
                                <a-span>
                                    <FormatedDate :dateStr="dados.date" />
                                    <!-- <div class="div-date">
                                        {{ dados.date }}
                                    </div> -->
                                </a-span>
                            </a-col>
                            <a-col :span="18">
                                <a-span>
                                    <a-card-meta :description="dados.content">
                                    </a-card-meta>
                                </a-span>
                            </a-col>

                        </a-row>



                    </a-card>

                </div>
            </a-row>
            <nuxt-link to='blog'>

                <div class="button-div">
                    <a-button class="button" ghost> Ver mais
                    </a-button>
                </div>
            </nuxt-link>
        </div>


    </div>
</template>

<script >
import Skeleton from '../load/skeleton/DefaultSkeleton.vue';
import FormatedDate from './FormatedDate.vue';

export default {
    data() {
        return {
            loading: true,
            data: [],
        }
    }, components: {
        Skeleton,
        FormatedDate

    },
    mounted() {

        import('../../data/news.json').then((data) => {
            this.data = data;
            this.loading = false;
        })
    },
}
</script>

  
<style scoped>
.card-div {
    justify-content: center;
}

.card:hover h5 {
    font-size: 15px;
}

.card:hover :deep(.ant-card-meta-description) {
    transition: 1s;
    font-weight: 800;
}

.card:hover {
    box-shadow: -2px -14px 33px 1px #010b0cde;
}

.formatted-date span:nth-child(even) {

    text-align: center;
    padding: 10px;

}

.card {
    transition: 1s;
    height: 550px;
    margin-left: 18px;
    transition: 1s;
    text-align: center;
    margin-top: 10px;
}

.card img {
    height: 250px;
}

:deep(.ant-card-meta-description) {
    display: block;
    transition: 1s;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    text-align: right;
}

h5 {
    margin-top: unset;
    transition: 1s;
}

h1 {
    text-align: center;
    margin-top: 20px;
    text-transform: uppercase;
    font-family: Poppins;
}

:deep(.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph >li) {
    height: 500px;
    width: 400px;
    display: inline-flex;
    align-items: baseline;
    margin-left: 18px;

}

.skeleton-container-div {
    justify-content: center;
}

:deep(.ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph >li:last-child) {
    width: 400px !important;
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
}</style>
