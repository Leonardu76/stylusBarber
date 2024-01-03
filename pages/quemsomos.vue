<template>
      <div v-if="loading">
      <Loader />
    </div>
    <div class="principal " v-else>

        <div>
            <Menu :isMenuHome="false" />
        </div>
        <div v-if="loading">
            <Skeleton :customRows="2" customWidth="50%" />
        </div>
        <div v-else>
            <div v-for="dados in data.resume" :key="dados.id">

                <div :style="{
                    backgroundImage: `url(${dados.imgBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }">
                    <div class="body overlay">
                        <div class="resume-description"  data-aos="fade-up">
                                <h1>SOBRE NÓS</h1>
                                {{ dados.text }}
                        </div>
                        <div class="resume-description"  data-aos="fade-up" data-aos-delay="150" >
                                <h1>NOSSA MISSÃO</h1>
                                {{ dados.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a-layout-content>
        <Footer />
    </a-layout-content>
</template>

<script >
import Skeleton from '../components/load/skeleton/DefaultSkeleton.vue';
import Loader from '../components/load/loader/Loader.vue';

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
        Skeleton,
        Loader
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
.principal {
    background-color: var(--secondary-color);
    color: white;
}

.resume-description{
    text-align: end;
    width: 40%;
    font-size: 18px;
    word-break: break-word;
    margin-bottom: 50px;
}
.body{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
}
.overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.767);
}

.resume-description:nth-child(odd) {
text-align: start;
margin-right: 450px;
}

.resume-description:nth-child(even) {
margin-left: 450px;
}
@media screen and (max-width: 1200px) {
    .resume-description{
        margin-left:unset !important;
        margin-right:unset !important;
        width: 90% !important;
    }
}

</style>