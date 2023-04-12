<script setup>
const { name, image, location, status, species, origin } = defineProps([
    'name',
    'image',
    'location',
    'status',
    'species',
    'origin'
])
</script>

<template>
    <div class="card-container">
        <div class="card">

            <div class="image">
                <img :src="image" :alt="name">
            </div>

            <div class="content">
                <div class="section">
                    <h1 class="name">{{ name }}</h1>
                    <span class="content-span">
                        <span>
                            <NIcon size="18">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" :fill="(status === 'Dead' ? 'red' : 'green')"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                    </circle>
                                </svg>
                            </NIcon>
                        </span>
                        <span class="status-species">{{ status }} - {{ species }}</span>
                    </span>
                </div>
                <div class="section">
                    <span class="label">Last known location:</span>
                    <p class="location">{{ location }}</p>
                </div>
                <div class="section">
                    <span class="label">First seen at:</span>
                    <p class="origin">{{ origin }}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.card {
    background-color: #fff;
    box-shadow: 0 6px 80px rgba(116, 234, 32, 0.785);
    display: flex;
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    padding: 24px 16px;
    transition: box-shadow 0.5s ease-in-out;
    border-radius: 10px;
    position: relative;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(113, 234, 129, 0.2);
}

.image {
    margin-right: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image img {
    border-radius: 10px;
    max-width: 100%;
}

.name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    color: #444;
    font-family: 'Montserrat', sans-serif;
}

.content-span {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
}

.label {
    font-weight: normal;
    margin-right: 8px;
    color: #8a8a8a;
}

.status-species {
    margin-left: 4px;
    font-weight: bold;
}

.location,
.origin {
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
}

@media screen and (max-width: 700px) {
    .card {
        width: 250px;
        flex-direction: column;
    }

    .image {
        margin-right: 0;
    }

    .content {
        margin-top: 24px;
    }

    .name {
        font-size: 20px;
        margin-bottom: 4px;
    }

    .label {
        font-size: 14px;
        margin-right: 4px;
    }

    .status-species {
        font-size: 14px;
        margin-left: 2px;
    }

    .location,
    .origin {
        margin-top: 12px;
        font-size: 14px;
    }
}
</style>