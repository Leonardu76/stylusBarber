<template>
    <div class="legend-slide">
        <a-row :gutter="16">
            <a-col :span="8">
                <a-card :bordered="false">
                    <p>{{ legend }}</p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
<script>
export default {
    props: {
        legend: String
    },
}
</script>
<style scoped>
.legend-slide {
    background-color: "#ececec";
    text-transform: uppercase;
    position: relative;
    top: 14rem;
    left: 4rem;
    width: auto;
    max-width: 91rem;
    min-width: 91rem;


}

.ant-card {
    background: rgba(0, 0, 0, 0.65);
    border: 1px solid var(--terciary-color);
}

p {
    font-family: 'Poppins';
    font-weight: 500;
    color: #fff;
    line-height: 1.5;
    word-break: break-word;
}
</style>
