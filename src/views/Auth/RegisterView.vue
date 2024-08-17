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
                                                    id="nickname" placeholder="Nickname">
                                            </div>

                                            <!--Full name-->
                                            <div class="form-group mb-3">
                                                <label for="full_name">Nama lengkap</label>
                                                <input type="text" v-model="user.full_name" class="form-control"
                                                    id="full_name" placeholder="Nama lengkap">
                                            </div>

                                            <!--Phone number-->
                                            <div class="form-group mb-3">
                                                <label for="phone_number">No telp </label>
                                                <div class="form-group mb-3">
                                                    <input type="text" v-model="user.phone_number" class="form-control"
                                                        id="phone_number" placeholder="Phone number">
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <!--Username-->
                                                    <div class="form-group mb-3">
                                                        <label for="username">Username</label>
                                                        <input type="text" v-model="user.username" class="form-control"
                                                            id="username" placeholder="Username">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <!--Password-->
                                                    <div class="form-group mb-3">
                                                        <label for="password">Password</label>
                                                        <input type="password" v-model="user.password"
                                                            class="form-control" id="password" placeholder="Password">
                                                    </div>
                                                </div>
                                            </div>

                                            <!--NISN-->
                                            <div class="form-group mb-3">
                                                <label for="nisn">NISN</label>
                                                <input type="text" v-model="user.nisn" class="form-control" id="nisn"
                                                    placeholder="NISN">
                                            </div>
                                            <!--NIK-->
                                            <div class="form-group mb-3">
                                                <label for="nik_ktp">NIK</label>
                                                <input type="text" id="nik_ktp" v-model="user.nik_ktp"
                                                    class="form-control" placeholder="NIK KTP">
                                            </div>

                                            <!--NIP-->
                                            <div class="form-group mb-3">
                                                <label for="nip">NIP</label>
                                                <input type="text" id="nip" v-model="user.nip" class="form-control"
                                                    placeholder="NIP">
                                            </div>

                                            <!--Nim-->
                                            <div class="form-group mb-3">
                                                <label for="nim">Nim</label>
                                                <input type="text" id="nim" v-model="user.nim" class="form-control"
                                                    placeholder="Nim">
                                            </div>

                                            <!--Tempat, tgl lahir-->
                                            <div class="row">
                                                <div class="col-md-8">
                                                    <!--Tempat Lahir-->
                                                    <div class="form-group mb-3">
                                                        <label for="birth_place">Birth Place</label>
                                                        <select v-model="user.birth_place" name="birth_place"
                                                            id="birth_place" class="form-control select2">
                                                            <option v-for="cityData in cityDatas" :key="cityData.id"
                                                                :value="cityData.id">
                                                                {{ cityData.city_name }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <!--Tgl lahir-->
                                                    <div class="form-group mb-3">
                                                        <label for="birth_date">Birth Date</label>
                                                        <input type="date" v-model="user.birth_date"
                                                            class="form-control" placeholder="Birth Date">
                                                    </div>
                                                </div>
                                            </div>

                                            <!--Nama and telp wali-->
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label for="wali_name">Nama wali</label>
                                                    <div class="form-group mb-3">
                                                        <input type="text" v-model="user.wali_name" class="form-control"
                                                            id="wali_name" placeholder="Wali Name">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="wali_phone">No telp </label>
                                                    <div class="form-group mb-3">
                                                        <input type="text" v-model="user.wali_phone"
                                                            class="form-control" id="wali_phone"
                                                            placeholder="Wali Phone">
                                                    </div>
                                                </div>
                                            </div>

                                            <!--Kode sekolah-->
                                            <div class="form-group mb-3">
                                                <label for="school_code">School Code</label>
                                                <select v-model="user.school_code" name="school_code" id="school_code"
                                                    class="form-control select2" style="width: 100%;">
                                                    <option v-for="schoolCode in schoolCodes" :key="schoolCode.id"
                                                        :value="schoolCode.id">
                                                        {{ schoolCode.code }}
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
                                                            <option v-for="bank in bankDatas" :key="bank.id"
                                                                :value="bank.id">
                                                                {{ bank.bank_name }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-">
                                                    <label for="rek_no">No rekening</label>
                                                    <div class="form-group mb-3">
                                                        <input type="number" v-model="user.rek_no" class="form-control"
                                                            id="rek_no" name="rek_no" placeholder="No rekening">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label>About Me</label>
                                                        <textarea class="form-control" v-model="user.about_me" rows="3"
                                                            placeholder="Enter ..." name="about_me"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">

                                            <!--Religion-->
                                            <div class="form-group mb-3">
                                                <label for="religion">Religion</label>
                                                <select v-model="user.religion" id="religion" class="custom-select">
                                                    <option value="" disabled selected class="text-muted">
                                                        Select religion
                                                    </option>
                                                    <option v-for="religion in religions" :key="religion.id"
                                                        :value="religion.id">
                                                        {{ religion.name }}
                                                    </option>
                                                </select>
                                            </div>

                                            <!--Domicilie-->
                                            <label for="">Domicilie</label>
                                            <div class="card mb-3">
                                                <div class="card-body">
                                                    <!--Map button-->
                                                    <div class="row">
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
                                                                <label for="domicilie_latitude">Latitude</label>
                                                                <input type="text" v-model="domicilie_latitude"
                                                                    class="form-control" id="domicilie_latitude"
                                                                    placeholder="Latitude">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- Longitude 1 -->
                                                            <div class="form-group mb-3">
                                                                <label for="domicilie_longitude">Longitude</label>
                                                                <input type="text" v-model="domicilie_longitude"
                                                                    class="form-control" id="domicilie_longitude"
                                                                    placeholder="Longitude">
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!--Country-->
                                                            <div class="form-group mb-3">
                                                                <label for="domicilie_country_id">Country</label>
                                                                <select v-model="user.domicilie_country_id"
                                                                    id="domicilie_country_id" class="custom-select">
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select country
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
                                                                <label for="domicilie_province_id">Province</label>
                                                                <select v-model="user.domicilie_province_id"
                                                                    id="domicilie_province_id" class="custom-select">
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
                                                            <!--City-->
                                                            <div class="form-group mb-3">
                                                                <label for="domicilie_city_id">City</label>
                                                                <select v-model="user.domicilie_city_id"
                                                                    id="domicilie_city_id" class="custom-select">
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select city
                                                                    </option>
                                                                    <option v-for="cityData in cityDatas"
                                                                        :key="cityData.id" :value="cityData.id">
                                                                        {{ cityData.city_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!--Kecamatan-->
                                                            <div class="form-group mb-3">
                                                                <label for="domicilie_kecamatan_id">Kecamatan</label>
                                                                <select v-model="user.domicilie_kecamatan_id"
                                                                    id="domicilie_kecamatan_id" class="custom-select">
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
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!--kelurahan-->
                                                            <div class="form-group mb-3">
                                                                <label for="domicilie_kelurahan_id">Kelurahan</label>
                                                                <select v-model="user.domicilie_kelurahan_id"
                                                                    id="domicilie_kelurahan_id" class="custom-select">
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
                                                        <div class="col-md-6">
                                                            <label for="domicilie">Address</label>
                                                            <div class="form-group mb-3">
                                                                <input type="text" v-model="user.domicilie"
                                                                    class="form-control" id="domicilie"
                                                                    placeholder="Address">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!--Address-->
                                            <label for="">Address</label>
                                            <div class="card mb-3">
                                                <div class="card-body">
                                                    <!--Map button-->
                                                    <div class="row">
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
                                                                <label for="address_latitude">Latitude</label>
                                                                <input type="text" v-model="address_latitude"
                                                                    class="form-control" id="address_latitude"
                                                                    placeholder="Latitude">
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!-- Longitude 2 -->
                                                            <div class="form-group mb-3">
                                                                <label for="address_longitude">Longitude</label>
                                                                <input type="text" v-model="address_longitude"
                                                                    class="form-control" id="address_longitude"
                                                                    placeholder="Longitude">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!--Country-->
                                                            <div class="form-group mb-3">
                                                                <label for="address_country_id">Country</label>
                                                                <select v-model="user.address_country_id"
                                                                    id="address_country_id" class="custom-select">
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select country
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
                                                                <label for="address_province_id">Province</label>
                                                                <select v-model="user.address_province_id"
                                                                    id="address_province_id" class="custom-select">
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
                                                            <!--City-->
                                                            <div class="form-group mb-3">
                                                                <label for="address_city_id">City</label>
                                                                <select v-model="user.address_city_id"
                                                                    id="address_city_id" class="custom-select">
                                                                    <option value="" disabled selected
                                                                        class="text-muted">
                                                                        Select city
                                                                    </option>
                                                                    <option v-for="cityData in cityDatas"
                                                                        :key="cityData.id" :value="cityData.id">
                                                                        {{ cityData.city_name }}
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <!--Kecamatan-->
                                                            <div class="form-group mb-3">
                                                                <label for="address_kecamatan_id">Kecamatan</label>
                                                                <select v-model="user.address_kecamatan_id"
                                                                    id="address_kecamatan_id" class="custom-select">
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
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <!--kelurahan-->
                                                            <div class="form-group mb-3">
                                                                <label for="address_kelurahan_id">Kelurahan</label>
                                                                <select v-model="user.address_kelurahan_id"
                                                                    id="address_kelurahan_id" class="custom-select">
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
                                                        <div class="col-md-6">
                                                            <label for="address">Address</label>
                                                            <div class="form-group mb-3">
                                                                <input type="text" v-model="user.address"
                                                                    class="form-control" id="address"
                                                                    placeholder="Address">
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
                                                    id="father_name" placeholder="Nama ayah">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <!--father_telp-->
                                            <div class="form-group mb-3">
                                                <label for="father_telp">No telp</label>
                                                <input type="text" v-model="user.father_telp" class="form-control"
                                                    id="father_telp" placeholder="No telp">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--father_birt_place-->
                                            <div class="form-group mb-3">
                                                <label for="birth_place">Birth Place</label>
                                                <select v-model="user.father_birth_place" name="father_birth_place"
                                                    id="birth_place" class="form-control select2">
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
                                                    placeholder="Birth Date">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--Father education-->
                                            <div class="form-group mb-3">
                                                <label for="father_education">Education</label>
                                                <select v-model="user.father_education" name="Father education"
                                                    id="father_education" class="form-control select2">
                                                    <option v-for="education in educationDatas" :key="education.id"
                                                        :value="education.id">
                                                        {{ education.education_name }}
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
                                                    id="mother_name" name="mother_name" placeholder="Nama ibu">
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <!--mother_telp-->
                                            <div class="form-group mb-3">
                                                <label for="mother_telp">No telp</label>
                                                <input type="text" v-model="user.mother_telp" class="form-control"
                                                    id="mother_telp" name="mother_telp" placeholder="No telp">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--mother_birt_place-->
                                            <div class="form-group mb-3">
                                                <label for="birth_place">Birth Place</label>
                                                <select v-model="user.mother_birth_place" name="mother_birth_place"
                                                    id="birth_place" class="form-control select2">
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
                                                    placeholder="Birth Date">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <!--Father education-->
                                            <div class="form-group mb-3">
                                                <label for="father_education">Education</label>
                                                <select v-model="user.mother_education" name="Father_education"
                                                    id="mother_education" class="form-control select2">
                                                    <option v-for="education in educationDatas" :key="education.id"
                                                        :value="education.id">
                                                        {{ education.education_name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <hr>

                                    <div>
                                        <div v-for="(sibling, index) in user.siblings" :key="index" class="row">
                                            <div class="col-md-3">
                                                <!--sibling_name-->
                                                <div class="form-group mb-3">
                                                    <label for="sibling_name">Nama</label>
                                                    <input type="text" v-model="sibling.sibling_name"
                                                        class="form-control" id="sibling_name" placeholder="Nama">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <!--sibling_telp-->
                                                <div class="form-group mb-3">
                                                    <label for="sibling_telp">No telp</label>
                                                    <input type="text" v-model="sibling.sibling_telp"
                                                        class="form-control" id="sibling_telp" placeholder="No telp">
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
                                                        class="form-control" placeholder="Birth Date">
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <!--Sibling education-->
                                                <div class="form-group mb-3">
                                                    <label for="sibling_education">Education</label>
                                                    <select v-model="sibling.sibling_education" name="sibling_education"
                                                        id="sibling_education" class="form-control select2">
                                                        <option v-for="education in educationDatas" :key="education.id"
                                                            :value="education.id">
                                                            {{ education.education_name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row justify-content-center">
                                        <button type="button" class="btn btn-danger mx-3"
                                            @click="removeSibling(index)">Delete</button>
                                        <button type="button" class="btn btn-success mx-3"
                                            @click="addSibling">Add</button>
                                    </div>

                                </div>
                            </div>

                            <div class="row mb-3 mx-4">
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                                </div>
                            </div>

                            <!--Step 2-->
                            <StepReg2 />

                            <div v-if="error" class="alert alert-danger mt-3">
                                {{ error }}
                            </div>
                        </form>
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
import StepReg2 from "@/components/StepReg2.vue";
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
                nickname: '',
                full_name: '',
                phone_number: '',
                username: '',
                password: '',
                nisn: '',
                nik_ktp: '',
                nip: '',
                nim: '',
                birth_place: '',
                birth_date: '',
                wali_name: '',
                wali_phone: '',
                school_code: '',
                bank_name: '',
                rek_no: '',
                religion: '',
                address_latitude: '',
                address_longtitude: '',
                address_country_id: '',
                address_province_id: '',
                address_city_id: '',
                address_kecamatan_id: '',
                address_kelurahan_id: '',
                address: '',
                domicilie_latitude: '',
                domicilie_longtitude: '',
                domicilie_country_id: '',
                domicilie_province_id: '',
                domicilie_city_id: '',
                domicilie_kecamatan_id: '',
                domicilie_kelurahan_id: '',
                domicilie: '',
                father_name: '',
                father_telp: '',
                father_birth_place: '',
                father_birth_date: '',
                father_education: '',
                father_name: '',
                father_telp: '',
                father_birth_place: '',
                father_birth_date: '',
                father_education: '',
                mother_name: '',
                mother_telp: '',
                mother_birth_place: '',
                mother_birth_date: '',
                mother_education: '',
                mother_name: '',
                mother_telp: '',
                mother_birth_place: '',
                mother_birth_date: '',
                mother_education: '',
                siblings: [
                    {
                        sibling_name: '',
                        sibling_telp: '',
                        birth_place: '',
                        sibling_birth_date: '',
                        sibling_education: '',
                    },
                ],
                photo_profile: null,
                about_me: '',
                is_active: false,

            },
            datas: [],
            religions: [],
            schoolCodes: [],
            countryDatas: [],
            provinceDatas: [],
            cityDatas: [],
            kecamatanDatas: [],
            kelurahanDatas: [],
            bankDatas: [],
            educationDatas: [],
            domicilie_latitude: null,
            domicilie_longitude: null,
            address_latitude: null,
            address_longitude: null,
            showMap1: false,
            showMap2: false,
            error: null
        };
    },
    components: {
        MapModal
    },
    mounted() {
        this.fetchData();
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
        async handleRegister() {
            try {
                const response = await http.post('/register', this.user);
                // Handle success
                console.log('Registration successful:', response.data);
                alert('Registration successful!');
                this.$router.push('/dashboard');
            } catch (error) {
                // Handle error
                console.error('Registration failed:', error);
                alert('Registration failed. Please try again.');
            }
        },
        async fetchData() {
            try {
                const response = await http.get('/registers');
                this.cityDatas = response.data.city_datas;
                this.religions = response.data.religions;
                this.schoolCodes = response.data.school_codes;
                this.countryDatas = response.data.country_datas;
                this.provinceDatas = response.data.province_datas;
                this.kecamatanDatas = response.data.kecamatan_datas;
                this.kelurahanDatas = response.data.kelurahan_datas;
                this.bankDatas = response.data.bank_datas;
                this.educationDatas = response.data.education_datas;
            } catch (error) {
                this.error = 'Failed to fetch religions';
            }
            console.log(this.datas);
        },
        updateLocation1(location) {
            this.domicilie_latitude = location.lat;
            this.domicilie_longitude = location.lng;
            this.getAddress(location.lat, location.lng, 'address');
        },
        confirmLocation1() {
            this.user.domicilie_latitude = this.latitude;
            this.user.domicilie_longitude = this.longitude;
            this.showMap1 = false;
        },
        updateLocation2(location) {
            this.address_latitude = location.lat;
            this.address_longitude = location.lng;
            this.getAddress(location.lat, location.lng, 'address2');
        },
        confirmLocation2() {
            this.user.address_latitude = this.address_latitude;
            this.user.address_longitude = this.address_longitude;
            this.showMap2 = false;
        },
        addSibling() {
            this.user.siblings.push({
                sibling_name: '',
                sibling_telp: '',
                birth_place: '',
                sibling_birth_date: '',
                sibling_education: '',
            });
        },
        removeSibling(index) {
            this.user.siblings.splice(index, 1);
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
