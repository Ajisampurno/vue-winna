<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="register-box">
                    <div class="register-logo">
                        <a href="#"><b>Register</b> User</a>
                    </div>
                    <div class="card">
                        <div class="card-body register-card-body">
                            <p class="login-box-msg">Register a new membership</p>

                            <form @submit.prevent="handleRegister">
                                <div class="input-group mb-3">
                                    <select name="role_name" id="role_name" class="form-control">
                                        <option value="#" disabled selected>Select Role</option>
                                        <option v-for="rolename in rolenames" :key="rolename.id"
                                            :value="rolename.role_id">
                                            {{ rolename.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.full_name" class="form-control"
                                        placeholder="Full Name" required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.nickname" class="form-control"
                                        placeholder="Nickname" required>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="religion">Religion</label>
                                    <select v-model="user.religion" id="religion" class="custom-select" required>
                                        <option value="" disabled selected class="text-muted">
                                            Select religion
                                        </option>
                                        <option v-for="religion in religions" :key="religion.id" :value="religion.id">
                                            {{ religion.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.phone_number" class="form-control"
                                        placeholder="Phone Number" required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.nisn" class="form-control" placeholder="NISN"
                                        required>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="domicilie_id">Domicilie</label>
                                    <select v-model="user.domicilie_id" name="domicilie_id" id="domicilie_id"
                                        class="form-control select2" style="width: 100%;">
                                        <option v-for="domicilie in domicilies" :key="domicilie.id"
                                            :value="domicilie.id">
                                            {{ domicilie.address }}, {{ domicilie.kecamatan_name }}, {{
                                                domicilie.city_name }}, {{
                                                domicilie.province_name }},
                                            {{ domicilie.country_name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="date" v-model="user.birth_date" class="form-control"
                                        placeholder="Birth Date" required>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="birth_place">Birth Place</label>
                                    <select v-model="user.birth_place" name="birth_place" id="birth_place"
                                        class="form-control select2" style="width: 100%;">
                                        <option v-for="domicilie in domicilies" :key="domicilie.id"
                                            :value="domicilie.id">
                                            {{ domicilie.city_name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.nik_ktp" class="form-control" placeholder="NIK KTP"
                                        required>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="school_code">School Code</label>
                                    <select v-model="user.school_code" name="school_code" id="school_code"
                                        class="form-control select2" style="width: 100%;">
                                        <option v-for="schoolUserCode in schoolUserCodes" :key="schoolUserCode.id"
                                            :value="schoolUserCode.id">
                                            {{ schoolUserCode.code }}
                                        </option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.wali_name" class="form-control"
                                        placeholder="Wali Name" required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.wali_phone" class="form-control"
                                        placeholder="Wali Phone" required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="file" @change="handleFaceDataUpload" class="form-control"
                                        placeholder="Face Data" required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="file" @change="handlePhotoProfileUpload" class="form-control"
                                        placeholder="Photo Profile" required>
                                </div>
                                <div class="input-group mb-3">
                                    <label for="address_id">Address</label>
                                    <select v-model="user.address_id" name="address_id" id="address_id"
                                        class="form-control select2" style="width: 100%;">
                                        <option v-for="addressData in addressDatas" :key="addressData.id"
                                            :value="addressData.id">
                                            {{ addressData.address }}
                                        </option>
                                    </select>
                                </div>
                                <div class="input-group mb-3">
                                    <textarea v-model="user.about_me" class="form-control" placeholder="About Me"
                                        required></textarea>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.nim" class="form-control" placeholder="NIM"
                                        required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.parent_id" class="form-control"
                                        placeholder="Parent ID" required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.sibling_id" class="form-control"
                                        placeholder="Sibling ID" required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.nip" class="form-control" placeholder="NIP"
                                        required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="checkbox" v-model="user.is_active"> Active
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" v-model="user.username" class="form-control"
                                        placeholder="Username" required>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" v-model="user.password" class="form-control"
                                        placeholder="Password" required>
                                </div>
                                <div class="row">
                                    <div class="col-4">
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
            </div>
        </div>
    </div>
</template>

<script>
import http from "@/plugins/axios";

export default {
    data() {
        return {
            user: {
                role_name_id: '',
                full_name: '',
                nickname: '',
                religion: '',
                phone_number: '',
                nisn: '',
                domicilie_id: '',
                birth_date: '',
                birth_place: '',
                nik_ktp: '',
                school_code: '',
                wali_name: '',
                wali_phone: '',
                face_data: null,
                photo_profile: null,
                address_id: '',
                about_me: '',
                nim: '',
                parent_id: '',
                sibling_id: '',
                nip: '',
                is_active: false,
                username: '',
                password: '',
            },
            religions: [],
            domicilies: [],
            rolenames: [],
            schoolUserCodes: [],
            addressDatas: [],
            error: null
        };
    },
    mounted() {
        this.fetchReligions();
        this.fetchDomicilies();
        this.fetchRoleNames();
        this.fetchSchoolUserDatas();
        this.fetchAddressDatas();
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
        async fetchDomicilies() {
            try {
                const response = await http.get('/domicilies');
                this.domicilies = response.data;
            } catch (error) {
                this.error = 'Failed to fetch domicilies';
            }
        },
        async fetchRoleNames() {
            try {
                const response = await http.get('/role-names');
                this.rolenames = response.data;
            } catch (error) {
                this.error = 'Failed to fetch religions';
            }
        },
        async fetchSchoolUserDatas() {
            try {
                const response = await http.get('/school-user-codes');
                this.schoolUserCodes = response.data;
            } catch (error) {
                this.error = 'Failed to fetch religions';
            }
        },
        async fetchAddressDatas() {
            try {
                const response = await http.get('/address-datas');
                this.addressDatas = response.data;
            } catch (error) {
                this.error = 'Failed to fetch religions';
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
        handleFaceDataUpload(event) {
            this.user.face_data = event.target.files[0];
        },
        handlePhotoProfileUpload(event) {
            this.user.photo_profile = event.target.files[0];
        }
    }
};
</script>


<style scoped>
.register-box {
    width: 700px;
    margin: 7% auto;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
}

.card-body {
    padding: 20px;
}
</style>
