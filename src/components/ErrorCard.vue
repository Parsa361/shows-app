<script setup>
const { hasError } = defineProps(['hasError'])
</script>

<template>
    <div>
        <div class="error-card">
            <NCard title="Error">
                <div class="error-message">{{ hasError }}</div>
            </NCard>
        </div>
    </div>
</template>

<style scoped>
.error-card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    width: 600px;
}

.error-message {
    font-size: 20px;
    color: red;
    margin: 20px 0;
}
</style>