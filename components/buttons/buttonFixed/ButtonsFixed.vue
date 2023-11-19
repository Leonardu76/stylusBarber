<template>
    <div class="principal">


    <a-float-button-group class="btn-fixed" trigger="hover" :style="{ right: '94px' , bottom: '90px'}">
        <template #icon>
            <MoreOutlined />
        </template>

        <nuxt-link to='https://api.whatsapp.com/send?phone=0000000000' target="_blank"> 
            <a-float-button>
                <template #icon>
                    <WhatsAppOutlined />
                </template>
            </a-float-button>
        </nuxt-link>
       <br>

        <nuxt-link to="/contato"> 
            <a-float-button>
                <template #icon>
                    <PhoneOutlined />
                </template>
            </a-float-button>
        </nuxt-link>     
    </a-float-button-group>
    <a-back-top :style="{ right: '94px', bottom: '20px' }"/>
</div>

</template>
<script lang="ts" setup>
import { MoreOutlined, WhatsAppOutlined, PhoneOutlined } from '@ant-design/icons-vue';
</script>


<style>
.ant-float-btn-body:has(.anticon-whats-app) {
    background-color: rgba(6, 97, 6, 0.685);
    transition: 1s;

}

.ant-float-btn-icon:has(.anticon-whats-app),
.ant-float-btn-icon:has(.anticon-phone) {
    color: white !important;
}

.ant-float-btn-body:has(.anticon-phone) {
    transition: 1s;
    background-color: var(--terciary-color);
}

.ant-float-btn-body:has(.anticon-phone):hover,
.ant-float-btn-body:has(.anticon-whats-app):hover {
    background-color: var(--secondary-color);
    transition: 1s;
}


/* .anticon-whats-app{
    color: rgba(32, 219, 32, 0.685);
    background-color: ;
} */
</style>