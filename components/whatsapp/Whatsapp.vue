

<template >
    <div class="principal">
        <div class="button">
            <a-button ghost>{{ text }}
                    <ScissorOutlined />
                    <WhatsAppOutlined />
            </a-button>

        </div>
    </div>
</template>
<script>
import {
    ScissorOutlined, WhatsAppOutlined
} from '@ant-design/icons-vue';
export default {
    props: {
        text: String
    },
    components: {
        ScissorOutlined,
        WhatsAppOutlined
    },
}
</script>
<style scoped>
.button,
.anticon-whats-app {
    transition: 1s;
}

.ant-btn {
    font-size: 16px;
    transition: 1s;
    padding: 0px 21px;

}

.ant-btn:hover {
    border-color: var(--terciary-color);;
    color: var(--terciary-color);
    font-size: 17px;
    transition: 1s;
}

.button:hover .anticon-whats-app {
    transition: 1s;
    color: rgba(32, 219, 32, 0.685);
}

.anticon {
    margin-left: 7px;
    transition: 1s;
}

.button:hover .anticon {
    font-size: 17px;
    transition: 1s;
}
</style>

