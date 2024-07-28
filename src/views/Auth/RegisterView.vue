<template>
    <LayoutDashboard />
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="register-box">
                        <div class="register-logo">
                            <a href="#"><b>Register</b> User</a>
                        </div>

                        <form @submit.prevent="handleRegister">
                            <div class="card mb-3">
                                <div class="card-body register-card-body">
                                    <p class="login-box-msg">Register a new membership</p>


                                    <div class="row">
                                        <div class="col-md-6">
                                            <!--Nikname-->
                                            <div class="form-group mb-3">
                                                <label for="nickname">Nama panggilan</label>
                                                <input type="text" v-model="user.nickname" class="form-control"
                                                    id="nickname" placeholder="Nickname" required>
                                            </div>

                                            <!--Full name-->
                                            <div class="form-group mb-3">
                                                <label for="full_name">Nama lengkap</label>
                                                <input type="text" v-model="user.full_name" class="form-control"
                                                    id="full_name" placeholder="Nama lengkap" required>
                                            </div>

                                            <!--Username-->
                                            <div class="form-group mb-3">
                                                <label for="username">Username</label>
                                                <input type="text" v-model="user.username" class="form-control"
                                                    id="username" placeholder="Username" required>
                                            </div>

                                            <!--Password-->
                                            <div class="form-group mb-3">
                                                <label for="password">Password</label>
                                                <input type="password" v-model="user.password" class="form-control"
                                                    id="password" placeholder="Password" required>
                                            </div>

                                            <!--NISN-->
                                            <div class="form-group mb-3">
                                                <label for="nisn">NISN</label>
                                                <input type="text" v-model="user.nisn" class="form-control" id="nisn"
                                                    placeholder="NISN" required>
                                            </div>
                                            <!--NIK-->
                                            <div class="form-group mb-3">
                                                <label for="nik_ktp">NIK</label>
                                                <input type="text" id="nik_ktp" v-model="user.nik_ktp"
                                                    class="form-control" placeholder="NIK KTP" required>
                                            </div>

                                            <!--NIP-->
                                            <div class="form-group mb-3">
                                                <label for="nip">NIP</label>
                                                <input type="text" id="nip" v-model="user.nip" class="form-control"
                                                    placeholder="NIP" required>
                                            </div>

                                            <!--Tempat, tgl lahir-->
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <!--Tempat Lahir-->
                                                    <div class="form-group mb-3">
                                                        <label for="birth_place">Birth Place</label>
                                                        <select v-model="user.birth_place" name="birth_place"
                                                            id="birth_place" class="form-control select2">
                                                            <option v-for="domicilie in domicilies" :key="domicilie.id"
                                                                :value="domicilie.id">
                                                                {{ domicilie.city_name }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <!--Tgl lahir-->
                                                    <div class="form-group mb-3">
                                                        <label for="birth_date">Birth Date</label>
                                                        <input type="date" v-model="user.birth_date"
                                                            class="form-control" placeholder="Birth Date" required>
                                                    </div>
                                                </div>
                                            </div>

                                            <!--Nama and telp wali-->
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="wali_name">Nama wali</label>
                                                    <div class="form-group mb-3">
                                                        <input type="text" v-model="user.wali_name" class="form-control"
                                                            id="wali_name" placeholder="Wali Name" required>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="wali_phone">No telp </label>
                                                    <div class="form-group mb-3">
                                                        <input type="text" v-model="user.wali_phone"
                                                            class="form-control" id="wali_phone"
                                                            placeholder="Wali Phone" required>
                                                    </div>
                                                </div>
                                            </div>

                                            <!--Kode sekolah-->
                                            <div class="form-group mb-3">
                                                <label for="school_code">School Code</label>
                                                <select v-model="user.school_code" name="school_code" id="school_code"
                                                    class="form-control select2" style="width: 100%;">
                                                    <option v-for="schoolUserCode in schoolUserCodes"
                                                        :key="schoolUserCode.id" :value="schoolUserCode.id">
                                                        {{ schoolUserCode.code }}
                                                    </option>
                                                </select>
                                            </div>

                                            <!--Bank-->
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group mb-3">
                                                        <label for="bank_name">Nama bank</label>
                                                        <select v-model="user.bank_name" name="bank_name" id="bank_name"
                                                            class="form-control select2">
                                                            <option v-for="bankData in bankDatas" :key="bankData.id"
                                                                :value="bankData.id">
                                                                {{ bankData }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="rek_no">No rekening</label>
                                                    <div class="form-group mb-3">
                                                        <input type="number" v-model="user.rek_no" class="form-control"
                                                            id="rek_no" placeholder="No rekening" required>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">

                                            <!--Religion-->
                                            <div class="form-group mb-3">
                                                <label for="religion">Religion</label>
                                                <select v-model="user.religion" id="religion" class="custom-select"
                                                    required>
                                                    <option value="" disabled selected class="text-muted">
                                                        Select religion
                                                    </option>
                                                    <option v-for="religion in religions" :key="religion.id"
                                                        :value="religion.id">
                                                        {{ religion.name }}
                                                    </option>
                                                </select>
                                            </div>

                                            <!--Address domicilie-->
                                            <label for="">Address domicilie</label>
                                            <div class="card mb-3">
                                                <div class="card-body">
                                                    <!--Map button-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="domicilie_address">Address</label>
                                                            <div class="form-group mb-3">
                                                                <input type="text" v-model="user.domicilie_address"
                                                                    class="form-control" id="domicilie_address"
                                                                    placeholder="Address" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for=""></label>
                                                            <div class="form-group mb-3">
                                                                <button type="button" class="btn btn-primary"
                                                                    @click="showMap1 = true">
                                                                    Pilih Lokasi di Peta 1
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!-- Latitude 1 -->
                                                            <div class="form-group mb-3">
                                                                <label for="latitude">Latitude</label>
                                                                <input type="text" v-model="latitude"
                                                                    class="form-control" id="latitude"
                                                                    placeholder="Latitude" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- Longitude 1 -->
                                                            <div class="form-group mb-3">
                                                                <label for="longitude">Longitude</label>
                                                                <input type="text" v-model="longitude"
                                                                    class="form-control" id="longitude"
                                                                    placeholder="Longitude" required>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!--Country-->
                                                            <div class="form-group mb-3">
                                                                <label for="country_id">Country</label>
                                                                <select v-model="user.country_id" id="country_id"
                                                                    class="custom-select" required>
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select country_id
                                                                    </option>
                                                                    <option v-for="countryData in countryDatas"
                                                                        :key="countryData.id" :value="countryData.id">
                                                                        {{ countryData.country_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!--Province-->
                                                            <div class="form-group mb-3">
                                                                <label for="province_id">Province</label>
                                                                <select v-model="user.province_id" id="province_id"
                                                                    class="custom-select" required>
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select province
                                                                    </option>
                                                                    <option v-for="provinceData in provinceDatas"
                                                                        :key="provinceData.id" :value="provinceData.id">
                                                                        {{ provinceData.province_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!--Kecamatan-->
                                                            <div class="form-group mb-3">
                                                                <label for="kecamatan_id">Kecamatan</label>
                                                                <select v-model="user.kecamatan_id" id="kecamatan_id"
                                                                    class="custom-select" required>
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select kecamatan
                                                                    </option>
                                                                    <option v-for="kecamatanData in kecamatanDatas"
                                                                        :key="kecamatanData.id"
                                                                        :value="kecamatanData.id">
                                                                        {{ kecamatanData.kecamatan_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!--kelurahan-->
                                                            <div class="form-group mb-3">
                                                                <label for="kelurahan_id">Kelurahan</label>
                                                                <select v-model="user.kelurahan_id" id="kelurahan_id"
                                                                    class="custom-select" required>
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select kelurahan
                                                                    </option>
                                                                    <option v-for="kelurahanData in kelurahanDatas"
                                                                        :key="kelurahanData.id"
                                                                        :value="kelurahanData.id">
                                                                        {{ kelurahanData.kelurahan_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <!--Address domicilie-->
                                            <label for="">Address domicilie</label>
                                            <div class="card mb-3">
                                                <div class="card-body">
                                                    <!--Map button-->
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label for="rek_no">Address</label>
                                                            <div class="form-group mb-3">
                                                                <input type="text" v-model="user.domicilie_address"
                                                                    class="form-control" id="rek_no"
                                                                    placeholder="Address" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <label for=""></label>
                                                            <div class="form-group mb-3">
                                                                <!-- Map button 2 -->
                                                                <button type="button" class="btn btn-primary"
                                                                    @click="showMap2 = true">
                                                                    Pilih Lokasi di Peta 2
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!-- Latitude 2 -->
                                                            <div class="form-group mb-3">
                                                                <label for="latitude2">Latitude</label>
                                                                <input type="text" v-model="latitude2"
                                                                    class="form-control" id="latitude2"
                                                                    placeholder="Latitude" required>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- Longitude 2 -->
                                                            <div class="form-group mb-3">
                                                                <label for="longitude2">Longitude</label>
                                                                <input type="text" v-model="longitude2"
                                                                    class="form-control" id="longitude2"
                                                                    placeholder="Longitude" required>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!--Country-->
                                                            <div class="form-group mb-3">
                                                                <label for="country_id">Country</label>
                                                                <select v-model="user.country_id" id="country_id"
                                                                    class="custom-select" required>
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select country_id
                                                                    </option>
                                                                    <option v-for="countryData in countryDatas"
                                                                        :key="countryData.id" :value="countryData.id">
                                                                        {{ countryData.country_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!--Province-->
                                                            <div class="form-group mb-3">
                                                                <label for="province_id">Province</label>
                                                                <select v-model="user.province_id" id="province_id"
                                                                    class="custom-select" required>
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select province
                                                                    </option>
                                                                    <option v-for="provinceData in provinceDatas"
                                                                        :key="provinceData.id" :value="provinceData.id">
                                                                        {{ provinceData.province_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!--Kecamatan-->
                                                            <div class="form-group mb-3">
                                                                <label for="kecamatan_id">Kecamatan</label>
                                                                <select v-model="user.kecamatan_id" id="kecamatan_id"
                                                                    class="custom-select" required>
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select kecamatan
                                                                    </option>
                                                                    <option v-for="kecamatanData in kecamatanDatas"
                                                                        :key="kecamatanData.id"
                                                                        :value="kecamatanData.id">
                                                                        {{ kecamatanData.kecamatan_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!--kelurahan-->
                                                            <div class="form-group mb-3">
                                                                <label for="kelurahan_id">Kelurahan</label>
                                                                <select v-model="user.kelurahan_id" id="kelurahan_id"
                                                                    class="custom-select" required>
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select kelurahan
                                                                    </option>
                                                                    <option v-for="kelurahanData in kelurahanDatas"
                                                                        :key="kelurahanData.id"
                                                                        :value="kelurahanData.id">
                                                                        {{ kelurahanData.kelurahan_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-3">
                                <div class="card-body register-card-body">
                                    <p class="login-box-msg">Register a new membership</p>

                                    <!--Father-->
                                    <div class="row">
                                        <div class="col-md-3">
                                            <!--father_name-->
                                            <div class="form-group mb-3">
                                                <label for="father_name">Nama ayah</label>
                                                <input type="text" v-model="user.father_name" class="form-control"
                                                    id="father_name" placeholder="Nama ayah" required>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <!--father_telp-->
                                            <div class="form-group mb-3">
                                                <label for="father_telp">No telp</label>
                                                <input type="text" v-model="user.father_telp" class="form-control"
                                                    id="father_telp" placeholder="No telp" required>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--father_birt_place-->
                                            <div class="form-group mb-3">
                                                <label for="birth_place">Birth Place</label>
                                                <select v-model="user.birth_place" name="birth_place" id="birth_place"
                                                    class="form-control select2">
                                                    <option v-for="city in cityDatas" :key="city.id" :value="city.id">
                                                        {{ city.city_name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--father_birth_date-->
                                            <div class="form-group mb-3">
                                                <label for="father_birth_date">Birth Date</label>
                                                <input type="date" v-model="user.father_birth_date" class="form-control"
                                                    placeholder="Birth Date" required>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--Father education-->
                                            <div class="form-group mb-3">
                                                <label for="father_education">Education</label>
                                                <select v-model="user.father_education" name="Father education"
                                                    id="father_education" class="form-control select2">
                                                    <option v-for="educationData in educationDatas"
                                                        :key="educationData.id" :value="educationData.id">
                                                        {{ educationData }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <!--Mother-->
                                    <div class="row">
                                        <div class="col-md-3">
                                            <!--mother_name-->
                                            <div class="form-group mb-3">
                                                <label for="mother_name">Nama ibu</label>
                                                <input type="text" v-model="user.mother_name" class="form-control"
                                                    id="mother_name" placeholder="Nama ibu" required>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <!--mother_telp-->
                                            <div class="form-group mb-3">
                                                <label for="mother_telp">No telp</label>
                                                <input type="text" v-model="user.mother_telp" class="form-control"
                                                    id="mother_telp" placeholder="No telp" required>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--mother_birt_place-->
                                            <div class="form-group mb-3">
                                                <label for="birth_place">Birth Place</label>
                                                <select v-model="user.birth_place" name="birth_place" id="birth_place"
                                                    class="form-control select2">
                                                    <option v-for="city in cityDatas" :key="city.id" :value="city.id">
                                                        {{ city.city_name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--mother_birth_date-->
                                            <div class="form-group mb-3">
                                                <label for="mother_birth_date">Birth Date</label>
                                                <input type="date" v-model="user.mother_birth_date" class="form-control"
                                                    placeholder="Birth Date" required>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--Father education-->
                                            <div class="form-group mb-3">
                                                <label for="mother_education">Education</label>
                                                <select v-model="user.mother_education" name="Father education"
                                                    id="mother_education" class="form-control select2">
                                                    <option v-for="educationData in educationDatas"
                                                        :key="educationData.id" :value="educationData.id">
                                                        {{ educationData }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <hr>

                                    <div>
                                        <div v-for="(sibling, index) in siblings" :key="index" class="row">
                                            <div class="col-md-3">
                                                <!--sibling_name-->
                                                <div class="form-group mb-3">
                                                    <label for="sibling_name">Nama</label>
                                                    <input type="text" v-model="sibling.sibling_name"
                                                        class="form-control" id="sibling_name" placeholder="Nama"
                                                        required>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <!--sibling_telp-->
                                                <div class="form-group mb-3">
                                                    <label for="sibling_telp">No telp</label>
                                                    <input type="text" v-model="sibling.sibling_telp"
                                                        class="form-control" id="sibling_telp" placeholder="No telp"
                                                        required>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <!--sibling_birth_place-->
                                                <div class="form-group mb-3">
                                                    <label for="birth_place">Birth Place</label>
                                                    <select v-model="sibling.birth_place" name="birth_place"
                                                        id="birth_place" class="form-control select2">
                                                        <option v-for="city in cityDatas" :key="city.id"
                                                            :value="city.id">
                                                            {{ city.city_name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <!--sibling_birth_date-->
                                                <div class="form-group mb-3">
                                                    <label for="sibling_birth_date">Birth Date</label>
                                                    <input type="date" v-model="sibling.sibling_birth_date"
                                                        class="form-control" placeholder="Birth Date" required>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <!--Sibling education-->
                                                <div class="form-group mb-3">
                                                    <label for="sibling_education">Education</label>
                                                    <select v-model="sibling.sibling_education" name="sibling_education"
                                                        id="sibling_education" class="form-control select2">
                                                        <option v-for="educationData in educationDatas"
                                                            :key="educationData.id" :value="educationData.id">
                                                            {{ educationData }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row justify-content-center">
                                        <!--Sibling education-->
                                        <button type="button" class="btn btn-danger mx-3"
                                            @click="removeSibling(index)">Delete</button>
                                        <button type="button" class="btn btn-success mx-3"
                                            @click="addSibling">Add</button>
                                    </div>

                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                                </div>
                            </div>
                        </form>
                        <div v-if="error" class="alert alert-danger mt-3">
                            {{ error }}
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal Map 1 -->
            <map-modal v-if="showMap1" :latitude="latitude" :longitude="longitude" @update-location="updateLocation1"
                @confirm-location="confirmLocation1" @close-map="showMap1 = false"></map-modal>

            <!-- Modal Map 2 -->
            <map-modal v-if="showMap2" :latitude="latitude2" :longitude="longitude2" @update-location="updateLocation2"
                @confirm-location="confirmLocation2" @close-map="showMap2 = false"></map-modal>
        </div>
    </div>
</template>

<script setup>
import LayoutDashboard from "@/components/LayoutDashboard.vue";
</script>

<script>
import http from "@/plugins/axios";
import MapModal from '@/components/Map.vue'; // Import komponen Map.vue

export default {
    components: {
        MapModal
    },
    data() {
        return {
            user: {
                role_name_id: '',
                full_name: '',
                nickname: '',
                religion: '',
                phone_number: '',
                nisn: '',
                birth_date: '',
                birth_place: '',
                nik_ktp: '',
                school_code: '',
                wali_name: '',
                wali_phone: '',
                face_data: null,
                photo_profile: null,
                about_me: '',
                nim: '',
                nip: '',
                is_active: false,
                username: '',
                password: '',
            },
            siblings: [
                {
                    sibling_name: '',
                    sibling_telp: '',
                    birth_place: '',
                    sibling_birth_date: '',
                    sibling_education: '',
                },
            ],
            religions: [],
            rolenames: [],
            schoolUserCodes: [],
            countryDatas: [],
            provinceDatas: [],
            cityDatas: [],
            kecamatanDatas: [],
            kelurahanDatas: [],
            bankDatas: [
                "Bank Mandiri",
                "Bank Rakyat Indonesia (BRI)",
                "Bank Negara Indonesia (BNI)",
                "Bank Central Asia (BCA)",
                "Bank Syariah Indonesia (BSI)",
                "Bank CIMB Niaga",
                "Bank Danamon",
                "Bank Panin",
                "Bank Permata",
                "Bank OCBC NISP",
                "Bank Tabungan Negara (BTN)",
                "Bank Maybank Indonesia",
                "Bank Sinarmas",
                "Bank Mega",
                "Bank Bukopin",
                "Bank BTPN",
                "Bank Commonwealth",
                "Bank Jatim",
                "Bank Jateng",
                "Bank DKI",
                "Bank BJB",
                "Bank Sumut",
                "Bank Sumsel Babel",
                "Bank Kalbar",
                "Bank BPD DIY",
                "Bank Kalsel",
                "Bank Papua",
                "Bank Riau Kepri",
                "Bank Lampung",
                "Bank SulutGo",
                "Bank Maluku Malut",
                "Bank NTB Syariah",
                "Bank Aceh Syariah"
            ],
            educationDatas: [
                "SD",
                "SMP",
                "SMA",
                "D1",
                "D2",
                "D3",
                "D4/S1",
                "S2",
                "S3",
            ],
            latitude: null,
            longitude: null,
            latitude2: null,
            longitude2: null,
            showMap1: false,
            showMap2: false,
            error: null
        };
    },
    components: {
        MapModal
    },
    mounted() {
        this.fetchReligions();
        this.fetchRoleNames();
        this.fetchSchoolUserDatas();
        this.fetchCountryDatas();
        this.fetchProvinceDatas();
        this.fetchCityDatas();
        this.fetchKecamatanDatas();
        this.fetchKelurahanDatas();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;

                this.latitude2 = position.coords.latitude;
                this.longitude2 = position.coords.longitude;
            });
        }
    },
    methods: {
        async fetchReligions() {
            try {
                const response = await http.get('/religions');
                this.religions = response.data;
            } catch (error) {
                this.error = 'Failed to fetch religions';
            }
        },
        async fetchRoleNames() {
            try {
                const response = await http.get('/role-names');
                this.rolenames = response.data;
            } catch (error) {
                this.error = 'Failed to fetch role names';
            }
        },
        async fetchSchoolUserDatas() {
            try {
                const response = await http.get('/school-user-codes');
                this.schoolUserCodes = response.data;
            } catch (error) {
                this.error = 'Failed to fetch school user codes';
            }
        },
        async fetchCountryDatas() {
            try {
                const response = await http.get('/country-datas');
                this.countryDatas = response.data;
            } catch (error) {
                this.error = 'Failed to fetch address datas';
            }
        },
        async fetchProvinceDatas() {
            try {
                const response = await http.get('/province-datas');
                this.provinceDatas = response.data;
            } catch (error) {
                this.error = 'Failed to fetch address datas';
            }
        },
        async fetchCityDatas() {
            try {
                const response = await http.get('/city-datas');
                this.cityDatas = response.data;
            } catch (error) {
                this.error = 'Failed to fetch address datas';
            }
        },
        async fetchKecamatanDatas() {
            try {
                const response = await http.get('/kecamatan-datas');
                this.kecamatanDatas = response.data;
            } catch (error) {
                this.error = 'Failed to fetch address datas';
            }
        },
        async fetchKelurahanDatas() {
            try {
                const response = await http.get('/kelurahan-datas');
                this.kelurahanDatas = response.data;
            } catch (error) {
                this.error = 'Failed to fetch address datas';
            }
        },
        async handleRegister() {
            const formData = new FormData();
            Object.keys(this.user).forEach(key => {
                formData.append(key, this.user[key]);
            });

            try {
                await http.post('/register', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                this.$router.push('/login');
            } catch (error) {
                this.error = error.response.data.message || 'An error occurred. Please try again.';
            }
        },
        updateLocation1(location) {
            this.latitude = location.lat;
            this.longitude = location.lng;
            this.getAddress(location.lat, location.lng, 'address');
        },
        confirmLocation1() {
            this.user.latitude = this.latitude;
            this.user.longitude = this.longitude;
            this.showMap1 = false;
        },
        updateLocation2(location) {
            this.latitude2 = location.lat;
            this.longitude2 = location.lng;
            this.getAddress(location.lat, location.lng, 'address2');
        },
        confirmLocation2() {
            this.user.latitude2 = this.latitude2;
            this.user.longitude2 = this.longitude2;
            this.showMap2 = false;
        },
        addSibling() {
            this.siblings.push({
                sibling_name: '',
                sibling_telp: '',
                birth_place: '',
                sibling_birth_date: '',
                sibling_education: '',
            });
        },
        removeSibling(index) {
            this.siblings.splice(index, 1);
        },
    },
};
</script>

<style scoped>
.register-box {
    width: auto;
    margin: 7% auto;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
}

.card-body {
    padding: 20px;
}
</style>
