<template>
    <div class="card mb-3">
        <div class="card-body register-card-body">
            <p class="login-box-msg">Register a new membership</p>

            <form @submit.prevent="handleRegister">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="ktp_file" name="ktp_file"
                                    @change="handleFileUpload($event, 'ktp_file')">
                                <label class="custom-file-label" for="ktp_file">{{ ktpFileName || 'Upload KTP'
                                    }}</label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="kk_file" name="kk_file"
                                    @change="handleFileUpload($event, 'kk_file')">
                                <label class="custom-file-label" for="kk_file">{{ kkFileName || 'Upload KK' }}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="akta_file" name="akta_file"
                                    @change="handleFileUpload($event, 'akta_file')">
                                <label class="custom-file-label" for="akta_file">{{ aktaFileName || 'Upload Akta'
                                    }}</label>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="ktm_file" name="ktm_file"
                                    @change="handleFileUpload($event, 'ktm_file')">
                                <label class="custom-file-label" for="ktm_file">{{ ktmFileName || 'Upload KTM'
                                    }}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="submit" class="btn btn-primary">Upload</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
    setup() {
        const user = ref({
            about_me: ''
        });

        const ktpFile = ref(null);
        const kkFile = ref(null);
        const aktaFile = ref(null);
        const ktmFile = ref(null);

        const ktpFileName = ref('');
        const kkFileName = ref('');
        const aktaFileName = ref('');
        const ktmFileName = ref('');

        const handleFileUpload = (event, fileType) => {
            const file = event.target.files[0];
            switch (fileType) {
                case 'ktp_file':
                    ktpFile.value = file;
                    ktpFileName.value = file.name;
                    break;
                case 'kk_file':
                    kkFile.value = file;
                    kkFileName.value = file.name;
                    break;
                case 'akta_file':
                    aktaFile.value = file;
                    aktaFileName.value = file.name;
                    break;
                case 'ktm_file':
                    ktmFile.value = file;
                    ktmFileName.value = file.name;
                    break;
            }
        };

        const handleRegister = async () => {
            const formData = new FormData();
            formData.append('ktp_file', ktpFile.value);
            formData.append('kk_file', kkFile.value);
            formData.append('akta_file', aktaFile.value);
            formData.append('ktm_file', ktmFile.value);
            formData.append('about_me', user.value.about_me);

            try {
                const response = await axios.post('your-api-endpoint/register', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log('Registration successful:', response.data);
            } catch (error) {
                console.error('Registration failed:', error.response.data);
            }
        };

        return {
            user,
            ktpFileName,
            kkFileName,
            aktaFileName,
            ktmFileName,
            handleFileUpload,
            handleRegister
        };
    }
};
</script>

<style>
/* Add your styles here */
</style>
