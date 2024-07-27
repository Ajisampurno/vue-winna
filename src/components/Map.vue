<template>
    <div>
        <div class="modal-backdrop" @click="closeMap"></div>
        <div class="modal-map">
            <div id="map"></div>
            <button @click="confirmLocation">Konfirmasi Lokasi</button>
        </div>
    </div>
</template>

<script>

export default {
    props: ['latitude', 'longitude'],
    data() {
        return {
            map: null,
            marker: null,
        };
    },
    methods: {
        initMap() {
            this.map = L.map('map').setView([this.latitude, this.longitude], 14);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);

            this.marker = L.marker([this.latitude, this.longitude], { draggable: true }).addTo(this.map);

            this.marker.on('move', (e) => {
                const { lat, lng } = e.latlng;
                this.$emit('update-location', { lat, lng });
            });
        },
        confirmLocation() {
            this.$emit('confirm-location');
        },
        closeMap() {
            this.$emit('close-map');
        }
    },
    mounted() {
        this.initMap();
    },
};
</script>

<style scoped>
#map {
    height: 400px;
    /* Sesuaikan tinggi peta */
    width: 100%;
}

.modal-map {
    position: fixed;
    /* Menggunakan fixed untuk mengunci posisi relatif terhadap viewport */
    top: 50%;
    /* Mengatur jarak dari atas menjadi 50% */
    left: 50%;
    /* Mengatur jarak dari kiri menjadi 50% */
    transform: translate(-50%, -50%);
    /* Memindahkan elemen kembali ke tengah dengan transformasi */
    width: 500px;
    /* Lebar modal */
    background-color: white;
    /* Warna latar belakang modal */
    border-radius: 8px;
    /* Membulatkan sudut modal */
    padding: 20px;
    /* Jarak dalam modal */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    /* Bayangan untuk modal */
    z-index: 1000;
    /* Memastikan modal berada di atas elemen lainnya */
}

.modal-backdrop {
    position: fixed;
    /* Menggunakan fixed untuk mengunci posisi relatif terhadap viewport */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Warna latar belakang dengan transparansi */
    z-index: 999;
    /* Memastikan backdrop berada di bawah modal tapi di atas elemen lainnya */
}
</style>
