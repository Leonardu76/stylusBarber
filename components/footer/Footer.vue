<template >
    <div class="principal">
     <ButtonsFixed/>
    </div>
</template>

<script>
import ButtonsFixed from "../buttons/buttonFixed/ButtonsFixed.vue"
export default {
    data() {
        
    }, components: {
        ButtonsFixed
    }
} 

</script>
<style scoped>
.principal{
    height: 400px;
    background-color: var(--secondary-color);
}
</style>