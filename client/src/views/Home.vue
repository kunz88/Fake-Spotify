<script setup lang="ts">
import Footer from "../components/Footer/Footer.vue";
import NavBar from "../components/NavBar/NavBar.vue";
import PageComponent from "../components/PageComponent/PageComponent.vue";
import SideBarMenu from "../components/SideBarMenu/SideBarMenu.vue";

import SideList from "../components/SideList/SideList.vue";
import SideListSection from "../components/SideList/SideListSection.vue";
</script>

<template>
  <PageComponent>
  <section>
    <SideBarMenu class="w-3/12 p-2"/>
  </section>

  <SideListSection>
    <NavBar />
    <SideList />
    <Footer />
  </SideListSection>
</PageComponent>



</template>

<style scoped lang="scss">

</style>