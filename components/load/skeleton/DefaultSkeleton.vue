<template>
    <div class="skeleton-container-div">

      <a-skeleton :title="false" :paragraph="{ rows: customRows, width: customWidth }" active>
      </a-skeleton>
    </div>
</template>
  

<script>
export default {
  props: ['customRows', 'customWidth'],

};
</script>