<template>
    <div class="div-loader">
        <div class="custom-loader"></div>

    </div>
</template>
  
<script>

</script>

<style scoped>
.div-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.custom-loader {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: conic-gradient(#0000 10%, #F2B885);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
    animation: s3 1s infinite linear;
}

@keyframes s3 {
    to {
        transform: rotate(1turn)
    }
}</style>