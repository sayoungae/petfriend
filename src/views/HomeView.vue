<script setup>
  import webSideSection from '@/components/webSideSection.vue'
  import mobHeader from '@/components/mobHeader.vue'
  import mobAppNav from '@/components/mobAppNav.vue'
</script>
<template>
  <div id="wrapper">
    <webSideSection />
    <div id="mobSlideSection">
        <mobHeader/>
          <router-view/>
        <mobAppNav/>
    </div>
  </div>
</template>
