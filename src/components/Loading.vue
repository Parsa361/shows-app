
<script setup>

</script>

<template>
    <div class="backdrop">
        <NSpace>
            <NSpin size="large" stroke="red" class="spiner" />
        </NSpace>
    </div>
</template>


<style scoped>
.backdrop {
    background-color: rgba(185, 189, 189, 0.159);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
}

.spiner {
    position: absolute;
    top: 50%;
    left: 50%;
}
</style>