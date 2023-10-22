<template >
    <div class="principal">
        <div class="banner-home" v-for=" dados in data.banner" :key="dados.id">
            <div :style="{
                backgroundImage: `url(${dados.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '150px',
            }" class="slide-with-overlay">
                <div class="overlay">
                    <h1>{{ dados.description }}</h1>
                    <div class="whatsapp">
                        <Whatsapp text="Entrar em contato"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import banner from '../../data/banner.json'
export default {
    data() {
        return {
            data: banner,
        }
    }
}
</script>
<style scoped>
.banner-home {
    height: 150px;
}
h1, .whatsapp{
    color: #fff;
    text-align: center;
    margin-top: 20px;
    text-transform: uppercase;
    font-family: Poppins;

}
.slide-with-overlay {
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.767);
}
</style>