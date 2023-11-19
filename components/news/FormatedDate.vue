<template>
    <div class="formatted-date">
        <span v-for="part in dateArray" :key="part">{{ part }}</span>
    </div>
</template>
  
<script>
export default {
    props: {
        dateStr: {
            type: String,
            required: true,
        },
    },
    computed: {
        dateArray: function () {
            return this.dateStr.split('/');
        },
    },
};
</script>
  
<style scoped>
.formatted-date {
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
}



.formatted-date span:nth-child(odd) {
    transition: 1s;
    background-color: var(--secondary-color);
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 7px;
    color: white;
    border: 1px solid var(--primary-color);
    margin-top: -10px;
    margin-bottom: -10px;
}

.formatted-date span:nth-child(even) {
    transition: 1s;
    text-align: center;
    padding: 10px;
}


.card:hover .formatted-date span:nth-child(even) {
    transition: 1s;
    background-color: var(--secondary-color);
    width: 40px;
    padding-bottom: 30px;
    padding-top: 5px;
    color: white;
    border: 1px solid var(--primary-color);
    height: 20px;
}

.card:hover .formatted-date span:nth-child(odd) {
    transition: 1s;
    text-align: center;
    background-color:  var(--primary-color);
    color: unset;
    width: 40px;
    border: 1px solid var(--secondary-color);

}

</style>
  