<script setup>

</script>

<template>
    <header>
        <div class="search">
            <input type="text" placeholder="search cards...">
        </div>
    </header>
</template>



<style scoped>
header {
    background: no-repeat center url('../../rick-and-morty-netflix-2020-9d-2560x1440.jpg');
    background-size: cover;
    height: 30rem;
    display: flex;
    justify-content: center;
}

.search input {
    padding: 10px 20px;
    min-width: 300px;
    border-radius: 10px;
    margin: 10px;
    outline: none;
    background-color: antiquewhite;
    border: none;
}
</style>