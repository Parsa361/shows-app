<script setup>
import img1 from "@/assets/images/357554-4k-wallpaper.jpg";
import img2 from "@/assets/images/rick-and-morty-firewatch-wallpaper.jpg";
import img3 from "@/assets/images/rick-and-morty-in-dragon-ball-wallpaper.jpg";
import img4 from "@/assets/images/rick-n-morty-wallpaper.jpg";


const imageSources = [img1, img2, img3, img4];
</script>

<template>
    <NCarousel class="carousel-container" autoplay :interval="2500">
        <img class="carousel-img" 
            v-for="(src, index) in imageSources" 
            :key="index" 
            :src="src">
    </NCarousel>
</template>

<style scoped>
.carousel-container {
    width: 100%;
    max-width: 1400px;
    margin: 20px auto;
}

.carousel-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

@media screen and (max-width: 300px) {
    .carousel-img {
        height: 200px;
    }
}

@media screen and (min-width: 301px) and (max-width: 640px) {
    .carousel-img {
        height: 300px;
    }
}

@media screen and (min-width: 641px) and (max-width: 1024px) {
    .carousel-img {
        height: 400px;
    }
}

@media screen and (min-width: 1025px) and (max-width: 1400px) {
    .carousel-img {
        height: 500px;
    }
}
</style>