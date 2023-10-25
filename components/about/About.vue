
<template class="">
    <h1> Quem somos</h1>
    <div v-for="dados in data.resume" :key="dados.id" >
        <a-row>
            <a-col :span="9" class="resume-description">
                <a-span >
                    {{ dados.description }}
                </a-span>
            </a-col>

            <a-col :span="3">
            </a-col>
            <a-col :span="9">

                <a-carousel arrows>
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
</template>


<script >
import resume from '../../data/resume-about.json'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';

export default {
    data() {
        return {
            data: resume,
        }
    }, components: {
        LeftCircleOutlined,
        RightCircleOutlined
    }
}
</script>


<style scoped>
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
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
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
    
}


.img-resume {
    height: 500px;
    max-height: 600px;
}

.resume-description, h1{
    font-family: Poppins;
    font-size: 18px;
    word-break: break-word;
    color: #fff;
    margin-left: 40px;
    line-height: 33px;

}


</style>