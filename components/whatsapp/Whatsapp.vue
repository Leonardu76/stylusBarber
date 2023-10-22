

<template >
    <div class="principal">
        <div class="button">
            <a-button ghost>{{ text }}
                <a-space>
                <ScissorOutlined />
            </a-space>
            </a-button>

        </div>
    </div>
</template>
<script>
import {
    ScissorOutlined,
} from '@ant-design/icons-vue';
export default {
    props: {
        text: String
    },
}
</script>
<style scoped></style>

