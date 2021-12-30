$('#kuiss').click(function(){
    let namadepan = sessionStorage.getItem('firstname');
    let nama = namadepan[0].toUpperCase() + namadepan.substring(1);
    Swal.fire({
            icon: 'question',
            title: 'Hai Kak ' +nama+ ', Apa Kabar?', 
            text: 'Main Game Tebak-Tebakan Yuk',
            confirmButtonText: 'Hayuk !'
        }).then(function(){
            Swal.fire ({
                icon: 'warning',
                title: 'Eitts',
                text: 'Sebelum Ke Game Tebakkan Jawab Dulu Pertanyaan Satu Ini',
                confirmButtonText: 'Apa Itu ?'
            }).then(function(){
                Swal.fire({
                    icon: 'question',
                    showDenyButton: true,
                    title: 'Mending Cowok Mapan Atau Tampan?', 
                    confirmButtonText: 'Yang Mapan Deh',
                    denyButtonText: `Yang Tampan Dong`,
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            icon: 'info',
                            title: 'PILIHAN YANG BIJAK',
                            text: 'Yapp Pria mapan tidak selalu identik dengan yang kaya dan tajir. Bahkan Pria mapan cenderung berpikir ke depan dan kreatif, kebanyakan mereka lebih realistis dan typical bekerja keras. Pria yang tidak akan rela jika pasangannya bersusah payah dalam menjalani hidup. Pria mapan akan selalu berjuang yang terbaik bagi orang yang ia sayangi (Jarene sih ngno, aja percaya2 bgt anu gur copas aku :D )',
                            confirmButtonText: 'Iyain Aja',
                        }).then((result) =>{
                            if (result.isConfirmed){
                                Swal.fire({
                                    icon: 'question',
                                    title: 'Lanjut Main Tebak-Tebakan?',
                                    showDenyButton: true,
                                    confirmButtonText: 'Lanjut',
                                    denyButtonText: `Tidak`,
                                }).then((result) =>{
                                    if (result.isConfirmed){
                                        const {
                                            value: name
                                                } = Swal.fire({
                                            icon: 'question',
                                            title: 'Jika ada 10 pejuang Indonesia yang berperang, lalu ada satu orang yang gugur, ada berapa orang yang akan kembali ke markas?',
                                            text: 'Tulis Jawaban Kamu di bawah (Jawab dengan angka)',
                                            input: 'text',
                                            inputLabel: '',
                                            confirmButtonText: 'Jawab',
                                            showDenyButton: true,
                                            denyButtonText: 'Nyerah',
                                            inputValidator: (value) => {
                                            if (!value){
                                            return 'Dijawab Dulu Kak!';
                                            } else if (value !== '1009'){
                                            return 'Jawaban Kamu Salah :D '
                                            }
                                            }
                                        }).then((result) =>{
                                            if (result.isConfirmed){
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Jawaban Kamu Benar :D',
                                                    text : 'Yap Betul Jawabannya 1009, karena mati satu tumbuh seribu.',
                                                    confirmButtonText: 'Lanjut',
                                                }).then(function(){
                                                    Swal.fire({
                                                        title: 'Lanjut Ke Pertanyaan Ke-2 '
                                                    }).then(function(){
                                                        const {
                                                                value: name
                                                                } = Swal.fire({
                                                                    icon: 'question',
                                                                    title: 'Jika ada 1 kg batu dan ada 1 kg kapas, ketika dijatuhkan ke atas kaki, mana yang lebih sakit?',
                                                                    text: 'Tulis Jawaban Kamu di bawah (Jawab Dengan Satu Kata Saja)',
                                                                    input: 'text',
                                                                    inputLabel: '',
                                                                    confirmButtonText: 'Jawab',
                                                                    showDenyButton: true,
                                                                    denyButtonText: 'Nyerah',
                                                                    inputValidator: (value) => {
                                                                        if (!value) {
                                                                        return 'Dijawab Dulu Kak !';
                                                                        } else if (!(value == 'kaki' || value =='Kaki')){
                                                                        return 'Jawaban Kamu Salah :D '
                                                                        }
                                                                    }
                                                                }).then((result) =>{
                                                                    if (result.isConfirmed){
                                                                        Swal.fire({
                                                                        icon: 'success',
                                                                        title: 'Jawaban Kamu Benar :D',
                                                                        text : 'Yap Betul Jawabannya Kaki,',
                                                                        confirmButtonText: 'Lanjut',
                                                                    }).then(function(){
                                                                        Swal.fire({
                                                                            title: 'Lanjut Ke Pertanyaan Ke-3 '
                                                                        }).then(function(){
                                                                            const {
                                                                                    value: name
                                                                                    } = Swal.fire({
                                                                                        icon: 'question',
                                                                                        title: 'Kalau saja ada sekolah yang berisi semua jenis hewan, siapa yang sering terlambat?',
                                                                                        text: 'Tulis Jawaban Kamu di bawah',
                                                                                        input: 'text',
                                                                                        inputLabel: '',
                                                                                        confirmButtonText: 'Jawab',
                                                                                        showDenyButton: true,
                                                                                        denyButtonText: 'Nyerah',
                                                                                        inputValidator: (value) => {
                                                                                        if (!value){ 
                                                                                        return 'Dijawab Dulu Kak!';
                                                                                        } else if (!(value =='Kaki Seribu' || value=='kaki seribu' || value=='Kaki seribu')) {
                                                                                            return 'Jawaban Kamu Salah :D'
                                                                                        }
                                                                                    }
                                                                                }).then((result) => {
                                                                                    if (result.isConfirmed){
                                                                                        Swal.fire ({
                                                                                            icon: 'success',
                                                                                            title: 'Yab Betul Jawabanya Kaki Seribu',
                                                                                            text: 'Karena Kaki Seribu kakinya banyak makanya kalo pake sepatu lama :D'
                                                                                        }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title : 'Hebat, Kamu Berhasil Menjawab Seluruh Pertanyaan !',
                                                                                                        
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Terima Kasih Kak '+nama,
                                                                                                    text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                }).then(function(){
                                                                                                    sessionStorage.setItem('hpsTombol','true');
                                                                                                    sessionStorage.setItem('udahMain','true');
                                                                                                    location.reload();
                                                                                            })
                                                                                            })
                                                                                        
                                                                                        })
                                                                                    } else if (result.isDenied){
                                                                                        Swal.fire ({
                                                                                            title: 'Cemen Gitu Aja Nyerah :V',
                                                                                            confirmButtonText: 'Ya Ben',
                                                                                        }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title: 'Jawabannya Adalah "Kaki Seribu"',
                                                                                                text: 'Karena Kakinya Banyak ,jadi kalo pakai sepatu lama, wkwk',
                                                                                                confirmButtonText: 'Bisa Ae'
                                                                                            }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title : 'Hebat, Kamu Berhasil Menjawab 2 dari 3 Pertanyaan !',
                                                                                                        
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Terima Kasih Kak '+nama,
                                                                                                    text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                }).then(function(){
                                                                                                    sessionStorage.setItem('hpsTombol','true');
                                                                                                    sessionStorage.setItem('udahMain','true');
                                                                                                    location.reload();
                                                                                            })
                                                                                            })
                                                                                        
                                                                                        })         
                                                                                        })
                                                                                    }
                                                                                })
                                                                        })
                                                                    })
                                                                    } else if (result.isDenied){
                                                                        Swal.fire('Cie Nyeraah ,Cemen Lu Ah :D').then(function(){
                                                                            Swal.fire({
                                                                                icon: 'info',
                                                                                title: 'Jawabanya Adalah "Kaki"',
                                                                                text: 'Ya Jelas lah antara 1 KG Kapas Sama 1Kg batu kalo dijatuhkan keatas kaki yang ada kaki lu yang sakit bambang',
                                                                                confirmButtonText: 'Lanjut',
                                                                            }).then(function(){
                                                                                Swal.fire('Lanjut Ke Pertanyaan ke-3').then(function(){
                                                                                    const {
                                                                                        value: name
                                                                                            } = Swal.fire({
                                                                                            icon: 'question',
                                                                                            title: 'Kalau saja ada sekolah yang berisi semua jenis hewan, siapa yang sering terlambat?',
                                                                                            text: 'Tulis Jawaban Kamu di bawah',
                                                                                            input: 'text',
                                                                                            inputLabel: '',
                                                                                            confirmButtonText: 'Jawab',
                                                                                            showDenyButton: true,
                                                                                            denyButtonText: 'Nyerah',
                                                                                            inputValidator: (value) => {
                                                                                            if (!value){ 
                                                                                            return 'Dijawab Dulu Kak!';
                                                                                            } else if (!(value =='Kaki Seribu' || value=='kaki seribu' || value=='Kaki seribu')) {
                                                                                                return 'Jawaban Kamu Salah :D'
                                                                                            }
                                                                                        }
                                                                                    }).then((result) =>{
                                                                                        if (result.isConfirmed){
                                                                                            Swal.fire ({
                                                                                            icon: 'success',
                                                                                            title: 'Yab Betul Jawabanya Kaki Seribu',
                                                                                            text: 'Karena Kaki Seribu kakinya banyak makanya kalo pake sepatu lama :D'
                                                                                        }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title : 'Hebat, Kamu Berhasil Menjawab 2 dari 3 Pertanyaan !',     
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Terima Kasih Kak '+nama,
                                                                                                    text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                }).then(function(){
                                                                                                    sessionStorage.setItem('hpsTombol','true');
                                                                                                    sessionStorage.setItem('udahMain','true');
                                                                                                    location.reload();
                                                                                            })
                                                                                            })
                                                                                        })
                                                                                        } else if (result.isDenied){
                                                                                            Swal.fire ({
                                                                                            title: 'Cemen Gitu Aja Nyerah :V',
                                                                                            confirmButtonText: 'Ya Ben',
                                                                                        }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title: 'Jawabannya Adalah "Kaki Seribu"',
                                                                                                text: 'Karena Kakinya Banyak ,jadi kalo pakai sepatu lama, wkwk',
                                                                                                confirmButtonText: 'Bisa Ae'
                                                                                            }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title : 'Sayang Sekali, Kamu Hanya Bisa Menjawab 1 dari 3 Pertanyaan !',     
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Terima Kasih Kak '+nama,
                                                                                                    text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                }).then(function(){
                                                                                                    sessionStorage.setItem('hpsTombol','true');
                                                                                                    sessionStorage.setItem('udahMain','true');
                                                                                                    location.reload();
                                                                                            })
                                                                                            })
                                                                                        })
                                                                                        })
                                                                                        }
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    }
                                                                })

                                                    })
                                                })
                                            } else if (result.isDenied){
                                                Swal.fire({
                                                    title: 'Yah Cemen Gitu Aja Nyerah wkwk :D'
                                                }).then(function(){
                                                    Swal.fire({
                                                        icon: 'info',
                                                        title: 'Jawaban nya Adalah 1009',
                                                        text:  'Karena mati satu tumbuh seribu jadi 10-1+1000 = 1009 haha ',
                                                        confirmButtonText: 'Lanjut',
                                                    }).then(function(){
                                                        Swal.fire('Lanjut Ke Pertanyaan Ke-2').then(function(){
                                                            const {
                                                                value: name
                                                                } = Swal.fire({
                                                                    icon: 'question',
                                                                    title: 'Jika ada 1 kg batu dan ada 1 kg kapas, ketika dijatuhkan ke atas kaki, mana yang lebih sakit?',
                                                                    text: 'Tulis Jawaban Kamu di bawah (Jawab Dengan Satu Kata Saja)',
                                                                    input: 'text',
                                                                    inputLabel: '',
                                                                    confirmButtonText: 'Jawab',
                                                                    showDenyButton: true,
                                                                    denyButtonText: 'Nyerah',
                                                                    inputValidator: (value) => {
                                                                        if (!value) {
                                                                        return 'Dijawab Dulu Kak!';
                                                                        } else if (!(value == 'kaki' || value =='Kaki')){
                                                                        return 'Jawaban Kamu Salah :D '
                                                                        }
                                                                    }
                                                                }).then((result) =>{
                                                                    if (result.isConfirmed){
                                                                        Swal.fire({
                                                                        icon: 'success',
                                                                        title: 'Jawaban Kamu Benar :D',
                                                                        text : 'Yap Betul Jawabannya Kaki,',
                                                                        confirmButtonText: 'Lanjut',
                                                                    }).then(function(){
                                                                        Swal.fire({
                                                                            title: 'Lanjut Ke Pertanyaan Ke-3 '
                                                                        }).then(function(){
                                                                            const {
                                                                                value: name
                                                                                    } = Swal.fire({
                                                                                    icon: 'question',
                                                                                    title: 'Kalau saja ada sekolah yang berisi semua jenis hewan, siapa yang sering terlambat?',
                                                                                    text: 'Tulis Jawaban Kamu di bawah',
                                                                                    input: 'text',
                                                                                    inputLabel: '',
                                                                                    confirmButtonText: 'Jawab',
                                                                                    showDenyButton: true,
                                                                                    denyButtonText: 'Nyerah',
                                                                                    inputValidator: (value) => {
                                                                                    if (!value){ 
                                                                                    return 'Dijawab Dulu Kak!';
                                                                                    } else if (!(value =='Kaki Seribu' || value=='kaki seribu' || value=='Kaki seribu')) {
                                                                                        return 'Jawaban Kamu Salah :D'
                                                                                    }
                                                                                }
                                                                            }).then((result) =>{
                                                                                if (result.isConfirmed){
                                                                                    Swal.fire ({
                                                                                        icon: 'success',
                                                                                        title: 'Yab Betul Jawabanya Kaki Seribu',
                                                                                        text: 'Karena Kaki Seribu kakinya bnyak jadinya make sepatunya lama :D'
                                                                                    }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title : 'Hebat, Kamu Berhasil Menjawab 2 dari 3 Pertanyaan !',     
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Terima Kasih Kak '+nama,
                                                                                                    text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                }).then(function(){
                                                                                                    sessionStorage.setItem('hpsTombol','true');
                                                                                                    sessionStorage.setItem('udahMain','true');
                                                                                                    location.reload();
                                                                                            })
                                                                                            })
                                                                                        })
                                                                                }else if (result.isDenied){
                                                                                        Swal.fire ({
                                                                                            title: 'Cemen Gitu Aja Nyerah :V',
                                                                                            confirmButtonText: 'Ya Ben',
                                                                                        }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title: 'Jawabannya Adalah "Kaki Seribu"',
                                                                                                text: 'Karena Kakinya Banyak ,jadi kalo pakai sepatu lama, wkwk',
                                                                                                confirmButtonText: 'Bisa Ae'
                                                                                            }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title : 'Sayang Sekali Kamu Cuman Bisa Menjawab Seluruh Pertanyaan!',
                                                                                                text: 'Coba Lagi Lain Waktu Ya Wkwkw'     
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Terima Kasih Kak '+nama,
                                                                                                    text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                }).then(function(){
                                                                                                    sessionStorage.setItem('hpsTombol','true');
                                                                                                    sessionStorage.setItem('udahMain','true');
                                                                                                    location.reload();
                                                                                                
                                                                                            })
                                                                                            })
                                                                                        })          
                                                                                        })
                                                                                    }
                                                                            })

                                                                            
                                                                        })
                                                                    })
                                                                    } else if (result.isDenied){
                                                                        Swal.fire('Nyerah Nih Yee :V').then(function(){
                                                                            Swal.fire({
                                                                                icon: 'info',
                                                                                title: 'Jawabanya Adalah "Kaki"',
                                                                                text: 'Ya Jelas lah antara 1 kg Kapas Sama 1 kg batu kalo dijatuhkan keatas kaki yang ada kaki lu yang sakit bambang',
                                                                                confirmButtonText: 'Lanjut',
                                                                            }).then(function(){
                                                                                Swal.fire('Lanjut Ke Pertanyaan ke-3').then(function(){
                                                                            const {
                                                                                value: name
                                                                                    } = Swal.fire({
                                                                                    icon: 'question',
                                                                                    title: 'Kalau saja ada sekolah yang berisi semua jenis hewan, siapa yang sering terlambat?',
                                                                                    text: 'Tulis Jawaban Kamu di bawah',
                                                                                    input: 'text',
                                                                                    inputLabel: '',
                                                                                    confirmButtonText: 'Jawab',
                                                                                    showDenyButton: true,
                                                                                    denyButtonText: 'Nyerah',
                                                                                    inputValidator: (value) => {
                                                                                    if (!value){ 
                                                                                    return 'Dijawab Dulu Kak!';
                                                                                    } else if (!(value =='Kaki Seribu' || value=='kaki seribu' || value=='Kaki seribu')) {
                                                                                        return 'Jawaban Kamu Salah :D'
                                                                                    }
                                                                                }
                                                                            }).then((result) =>{
                                                                                if (result.isConfirmed){
                                                                                    Swal.fire ({
                                                                                        icon: 'success',
                                                                                        title: 'Yab Betul Jawabanya Kaki Seribu',
                                                                                        text: 'Karena Kaki Seribu kakinya banyak jadinya make sepatunya lama :D'
                                                                                    }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title : 'Sayang Sekali Kamu Cuma Bisa Menjawab Satu Pertanyaan Saja!', 
                                                                                                text: 'Semoga Beruntung Lain Waktu Ya Wkwk'    
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Terima Kasih Kak '+nama,
                                                                                                    text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                }).then(function(){
                                                                                                    sessionStorage.setItem('hpsTombol','true');
                                                                                                    sessionStorage.setItem('udahMain','true');
                                                                                                    location.reload();
                                                                                                
                                                                                            })
                                                                                            })
                                                                                        })
                                                                                }else if (result.isDenied){
                                                                                        Swal.fire ({
                                                                                            title: 'Cemen Gitu Aja Nyerah :V',
                                                                                            confirmButtonText: 'Ya Ben',
                                                                                        }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title: 'Jawabannya Adalah "Kaki Seribu"',
                                                                                                text: 'Karena Kakinya Banyak ,jadi kalo pakai sepatu lama, wkwk',
                                                                                                confirmButtonText: 'Bisa Ae'
                                                                                            }).then(function(){
                                                                                            Swal.fire({
                                                                                                icon: 'info',
                                                                                                title : 'Sayang Sekali Tidak Ada Satupun Pertanyaan Yang Bisa Dijawab :(',     
                                                                                                text: 'Coba lagi Lain Waktu Ya Wkwk'
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Terima Kasih Kak '+nama,
                                                                                                    text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                }).then(function(){
                                                                                                    sessionStorage.setItem('hpsTombol','true');
                                                                                                    sessionStorage.setItem('udahMain','true');
                                                                                                    location.reload();
                                                                                            })
                                                                                            })
                                                                                        })           
                                                                                        })
                                                                                    }
                                                                            })

                                                                            
                                                                        })
                                                                            })
                                                                        })
                                                                    }
                                                                })                 
                                                        })
                                                    })
                                                })
                                            }
                                        })
                                    }else if (result.isDenied){
                                        Swal.fire('Okey Lah Kalo Begitu, Bye')
                                    }
                                })
                            }
                        })
                    } else if (result.isDenied) {
                        Swal.fire({
                            icon: 'info',
                            title: 'Yang Tampan Yang Menawan',
                            text: 'Tidak dipungkiri penampilan fisik memang menjadi daya tarik pertama yang dilihat oleh lawan jenis. Mempunyai pasangan yang memiliki good appperance/ good looking boleh jadi suatu kebanggan dan kesenangan tersendiri. Ya Iyalah Siapa sih yang ngga bangga punya cowok yang ganteng? Yang wajah dan posturnya oke punya. Sampai bikin kamu merasa jadi cewek yang paling beruntung sedunia. Apalagi di awal-awal jadian, beuuh,,, setiap jalan sama dia hatimu berbunga. Iya, karena wajah pacarmu jadi sorotan banyak cewek lainnya. Belum lagi tiap kamu upload fotonya di sosmed, bikin cewek lain pada iri. Duh, kamu serasa jadi princess yang pada akhirnya mampu mendapatkan hati sang pangeran.',
                            confirmButtonText: 'Iyain Aja',
                        }).then(function(){
                            Swal.fire({
                            icon: 'info',
                            title: 'Eitss',
                            text: 'Tapi... seiring berjalannya waktu, kamu justru ngerasa punya cowok ganteng itu banyak ujiannya. Dari mulai khawatir ditikung orang sampai khawatir dia diam-diam mendua. Karena dengan modal tampangnya, dia bisa dengan mudahnya dekat dengan banyak wanita. Kamu, yang kebetulan punya atau sempat punya pacar ganteng,kekhawatiran ini mungkin bikin kamu akhirnya mikir mending cari yang wajahnya biasa-biasa aja.',
                            confirmButtonText: 'Iyain Aja',
                            }).then((result) => {
                                if (result.isConfirmed){
                                    Swal.fire({
                                        icon: 'question',
                                        title: 'Lanjut Main Tebak-Tebakan?',
                                        showDenyButton: true,
                                        confirmButtonText: 'Lanjut',
                                        denyButtonText: `Tidak`,
                                    }).then((result) =>{
                                        if (result.isConfirmed){
                                            const {
                                                value: name
                                                    } = Swal.fire({
                                                icon: 'question',
                                                title: 'Jika ada 10 pejuang Indonesia yang berperang, lalu ada satu orang yang gugur, ada berapa orang yang akan kembali ke markas?',
                                                text: 'Tulis Jawaban Kamu di bawah (Jawab dengan angka)',
                                                input: 'text',
                                                inputLabel: '',
                                                confirmButtonText: 'Jawab',
                                                showDenyButton: true,
                                                denyButtonText: 'Nyerah',
                                                inputValidator: (value) => {
                                                if (!value){
                                                return 'Dijawab Dulu Kak!';
                                                } else if (value !== '1009'){
                                                return 'Jawaban Kamu Salah :D '
                                                }
                                                }
                                            }).then((result) =>{
                                                if (result.isConfirmed){
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Jawaban Kamu Benar :D',
                                                        text : 'Yap Betul Jawabannya 1009, karena mati satu tumbuh seribu.',
                                                        confirmButtonText: 'Lanjut',
                                                    }).then(function(){
                                                        Swal.fire({
                                                            title: 'Lanjut Ke Pertanyaan Ke-2 '
                                                        }).then(function(){
                                                            const {
                                                                    value: name
                                                                    } = Swal.fire({
                                                                        icon: 'question',
                                                                        title: 'Jika ada 1 kg batu dan ada 1 kg kapas, ketika dijatuhkan ke atas kaki, mana yang lebih sakit?',
                                                                        text: 'Tulis Jawaban Kamu di bawah (Jawab Dengan Satu Kata Saja)',
                                                                        input: 'text',
                                                                        inputLabel: '',
                                                                        confirmButtonText: 'Jawab',
                                                                        showDenyButton: true,
                                                                        denyButtonText: 'Nyerah',
                                                                        inputValidator: (value) => {
                                                                            if (!value) {
                                                                            return 'Dijawab Dulu Kak !';
                                                                            } else if (!(value == 'kaki' || value =='Kaki')){
                                                                            return 'Jawaban Kamu Salah :D '
                                                                            }
                                                                        }
                                                                    }).then((result) =>{
                                                                        if (result.isConfirmed){
                                                                            Swal.fire({
                                                                            icon: 'success',
                                                                            title: 'Jawaban Kamu Benar :D',
                                                                            text : 'Yap Betul Jawabannya Kaki,',
                                                                            confirmButtonText: 'Lanjut',
                                                                        }).then(function(){
                                                                            Swal.fire({
                                                                                title: 'Lanjut Ke Pertanyaan Ke-3 '
                                                                            }).then(function(){
                                                                                const {
                                                                                        value: name
                                                                                        } = Swal.fire({
                                                                                            icon: 'question',
                                                                                            title: 'Kalau saja ada sekolah yang berisi semua jenis hewan, siapa yang sering terlambat?',
                                                                                            text: 'Tulis Jawaban Kamu di bawah',
                                                                                            input: 'text',
                                                                                            inputLabel: '',
                                                                                            confirmButtonText: 'Jawab',
                                                                                            showDenyButton: true,
                                                                                            denyButtonText: 'Nyerah',
                                                                                            inputValidator: (value) => {
                                                                                            if (!value){ 
                                                                                            return 'Dijawab Dulu Kak!';
                                                                                            } else if (!(value =='Kaki Seribu' || value=='kaki seribu' || value=='Kaki seribu')) {
                                                                                                return 'Jawaban Kamu Salah :D'
                                                                                            }
                                                                                        }
                                                                                    }).then((result) => {
                                                                                        if (result.isConfirmed){
                                                                                            Swal.fire ({
                                                                                                icon: 'success',
                                                                                                title: 'Yab Betul Jawabanya Kaki Seribu',
                                                                                                text: 'Karena Kaki Seribu kakinya banyak makanya kalo pake sepatu lama :D'
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title : 'Hebat, Kamu Berhasil Menjawab Seluruh Pertanyaan !',
                                                                                                            
                                                                                                }).then(function(){
                                                                                                    Swal.fire({
                                                                                                        icon: 'info',
                                                                                                        title: 'Terima Kasih Kak '+nama,
                                                                                                        text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                    }).then(function(){
                                                                                                        sessionStorage.setItem('hpsTombol','true');
                                                                                                        sessionStorage.setItem('udahMain','true');
                                                                                                        location.reload();
                                                                                                })
                                                                                                })
                                                                                            
                                                                                            })
                                                                                        } else if (result.isDenied){
                                                                                            Swal.fire ({
                                                                                                title: 'Cemen Gitu Aja Nyerah :V',
                                                                                                confirmButtonText: 'Ya Ben',
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Jawabannya Adalah "Kaki Seribu"',
                                                                                                    text: 'Karena Kakinya Banyak ,jadi kalo pakai sepatu lama, wkwk',
                                                                                                    confirmButtonText: 'Bisa Ae'
                                                                                                }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title : 'Hebat, Kamu Berhasil Menjawab 2 dari 3 Pertanyaan !',
                                                                                                            
                                                                                                }).then(function(){
                                                                                                    Swal.fire({
                                                                                                        icon: 'info',
                                                                                                        title: 'Terima Kasih Kak '+nama,
                                                                                                        text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                    }).then(function(){
                                                                                                        sessionStorage.setItem('hpsTombol','true');
                                                                                                        sessionStorage.setItem('udahMain','true');
                                                                                                        location.reload();
                                                                                                })
                                                                                                })
                                                                                            
                                                                                            })         
                                                                                            })
                                                                                        }
                                                                                    })
                                                                            })
                                                                        })
                                                                        } else if (result.isDenied){
                                                                            Swal.fire('Cie Nyeraah ,Cemen Lu Ah :D').then(function(){
                                                                                Swal.fire({
                                                                                    icon: 'info',
                                                                                    title: 'Jawabanya Adalah "Kaki"',
                                                                                    text: 'Ya Jelas lah antara 1 KG Kapas Sama 1Kg batu kalo dijatuhkan keatas kaki yang ada kaki lu yang sakit bambang',
                                                                                    confirmButtonText: 'Lanjut',
                                                                                }).then(function(){
                                                                                    Swal.fire('Lanjut Ke Pertanyaan ke-3').then(function(){
                                                                                        const {
                                                                                            value: name
                                                                                                } = Swal.fire({
                                                                                                icon: 'question',
                                                                                                title: 'Kalau saja ada sekolah yang berisi semua jenis hewan, siapa yang sering terlambat?',
                                                                                                text: 'Tulis Jawaban Kamu di bawah',
                                                                                                input: 'text',
                                                                                                inputLabel: '',
                                                                                                confirmButtonText: 'Jawab',
                                                                                                showDenyButton: true,
                                                                                                denyButtonText: 'Nyerah',
                                                                                                inputValidator: (value) => {
                                                                                                if (!value){ 
                                                                                                return 'Dijawab Dulu Kak!';
                                                                                                } else if (!(value =='Kaki Seribu' || value=='kaki seribu' || value=='Kaki seribu')) {
                                                                                                    return 'Jawaban Kamu Salah :D'
                                                                                                }
                                                                                            }
                                                                                        }).then((result) =>{
                                                                                            if (result.isConfirmed){
                                                                                                Swal.fire ({
                                                                                                icon: 'success',
                                                                                                title: 'Yab Betul Jawabanya Kaki Seribu',
                                                                                                text: 'Karena Kaki Seribu kakinya banyak makanya kalo pake sepatu lama :D'
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title : 'Hebat, Kamu Berhasil Menjawab 2 dari 3 Pertanyaan !',     
                                                                                                }).then(function(){
                                                                                                    Swal.fire({
                                                                                                        icon: 'info',
                                                                                                        title: 'Terima Kasih Kak '+nama,
                                                                                                        text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                    }).then(function(){
                                                                                                        sessionStorage.setItem('hpsTombol','true');
                                                                                                        sessionStorage.setItem('udahMain','true');
                                                                                                        location.reload();
                                                                                                })
                                                                                                })
                                                                                            })
                                                                                            } else if (result.isDenied){
                                                                                                Swal.fire ({
                                                                                                title: 'Cemen Gitu Aja Nyerah :V',
                                                                                                confirmButtonText: 'Ya Ben',
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Jawabannya Adalah "Kaki Seribu"',
                                                                                                    text: 'Karena Kakinya Banyak ,jadi kalo pakai sepatu lama, wkwk',
                                                                                                    confirmButtonText: 'Bisa Ae'
                                                                                                }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title : 'Sayang Sekali, Kamu Hanya Bisa Menjawab 1 dari 3 Pertanyaan !',     
                                                                                                }).then(function(){
                                                                                                    Swal.fire({
                                                                                                        icon: 'info',
                                                                                                        title: 'Terima Kasih Kak '+nama,
                                                                                                        text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                    }).then(function(){
                                                                                                        sessionStorage.setItem('hpsTombol','true');
                                                                                                        sessionStorage.setItem('udahMain','true');
                                                                                                        location.reload();
                                                                                                })
                                                                                                })
                                                                                            })
                                                                                            })
                                                                                            }
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        }
                                                                    })
    
                                                        })
                                                    })
                                                } else if (result.isDenied){
                                                    Swal.fire({
                                                        title: 'Yah Cemen Gitu Aja Nyerah wkwk :D'
                                                    }).then(function(){
                                                        Swal.fire({
                                                            icon: 'info',
                                                            title: 'Jawaban nya Adalah 1009',
                                                            text:  'Karena mati satu tumbuh seribu jadi 10-1+1000 = 1009 haha ',
                                                            confirmButtonText: 'Lanjut',
                                                        }).then(function(){
                                                            Swal.fire('Lanjut Ke Pertanyaan Ke-2').then(function(){
                                                                const {
                                                                    value: name
                                                                    } = Swal.fire({
                                                                        icon: 'question',
                                                                        title: 'Jika ada 1 kg batu dan ada 1 kg kapas, ketika dijatuhkan ke atas kaki, mana yang lebih sakit?',
                                                                        text: 'Tulis Jawaban Kamu di bawah (Jawab Dengan Satu Kata Saja)',
                                                                        input: 'text',
                                                                        inputLabel: '',
                                                                        confirmButtonText: 'Jawab',
                                                                        showDenyButton: true,
                                                                        denyButtonText: 'Nyerah',
                                                                        inputValidator: (value) => {
                                                                            if (!value) {
                                                                            return 'Dijawab Dulu Kak!';
                                                                            } else if (!(value == 'kaki' || value =='Kaki')){
                                                                            return 'Jawaban Kamu Salah :D '
                                                                            }
                                                                        }
                                                                    }).then((result) =>{
                                                                        if (result.isConfirmed){
                                                                            Swal.fire({
                                                                            icon: 'success',
                                                                            title: 'Jawaban Kamu Benar :D',
                                                                            text : 'Yap Betul Jawabannya Kaki,',
                                                                            confirmButtonText: 'Lanjut',
                                                                        }).then(function(){
                                                                            Swal.fire({
                                                                                title: 'Lanjut Ke Pertanyaan Ke-3 '
                                                                            }).then(function(){
                                                                                const {
                                                                                    value: name
                                                                                        } = Swal.fire({
                                                                                        icon: 'question',
                                                                                        title: 'Kalau saja ada sekolah yang berisi semua jenis hewan, siapa yang sering terlambat?',
                                                                                        text: 'Tulis Jawaban Kamu di bawah',
                                                                                        input: 'text',
                                                                                        inputLabel: '',
                                                                                        confirmButtonText: 'Jawab',
                                                                                        showDenyButton: true,
                                                                                        denyButtonText: 'Nyerah',
                                                                                        inputValidator: (value) => {
                                                                                        if (!value){ 
                                                                                        return 'Dijawab Dulu Kak!';
                                                                                        } else if (!(value =='Kaki Seribu' || value=='kaki seribu' || value=='Kaki seribu')) {
                                                                                            return 'Jawaban Kamu Salah :D'
                                                                                        }
                                                                                    }
                                                                                }).then((result) =>{
                                                                                    if (result.isConfirmed){
                                                                                        Swal.fire ({
                                                                                            icon: 'success',
                                                                                            title: 'Yab Betul Jawabanya Kaki Seribu',
                                                                                            text: 'Karena Kaki Seribu kakinya bnyak jadinya make sepatunya lama :D'
                                                                                        }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title : 'Hebat, Kamu Berhasil Menjawab 2 dari 3 Pertanyaan !',     
                                                                                                }).then(function(){
                                                                                                    Swal.fire({
                                                                                                        icon: 'info',
                                                                                                        title: 'Terima Kasih Kak '+nama,
                                                                                                        text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                    }).then(function(){
                                                                                                        sessionStorage.setItem('hpsTombol','true');
                                                                                                        sessionStorage.setItem('udahMain','true');
                                                                                                        location.reload();
                                                                                                })
                                                                                                })
                                                                                            })
                                                                                    }else if (result.isDenied){
                                                                                            Swal.fire ({
                                                                                                title: 'Cemen Gitu Aja Nyerah :V',
                                                                                                confirmButtonText: 'Ya Ben',
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Jawabannya Adalah "Kaki Seribu"',
                                                                                                    text: 'Karena Kakinya Banyak ,jadi kalo pakai sepatu lama, wkwk',
                                                                                                    confirmButtonText: 'Bisa Ae'
                                                                                                }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title : 'Sayang Sekali Kamu Cuman Bisa Menjawab Seluruh Pertanyaan!',
                                                                                                    text: 'Coba Lagi Lain Waktu Ya Wkwkw'     
                                                                                                }).then(function(){
                                                                                                    Swal.fire({
                                                                                                        icon: 'info',
                                                                                                        title: 'Terima Kasih Kak '+nama,
                                                                                                        text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                    }).then(function(){
                                                                                                        sessionStorage.setItem('hpsTombol','true');
                                                                                                        sessionStorage.setItem('udahMain','true');
                                                                                                        location.reload();
                                                                                                    
                                                                                                })
                                                                                                })
                                                                                            })          
                                                                                            })
                                                                                        }
                                                                                })
    
                                                                                
                                                                            })
                                                                        })
                                                                        } else if (result.isDenied){
                                                                            Swal.fire('Nyerah Nih Yee :V').then(function(){
                                                                                Swal.fire({
                                                                                    icon: 'info',
                                                                                    title: 'Jawabanya Adalah "Kaki"',
                                                                                    text: 'Ya Jelas lah antara 1 kg Kapas Sama 1 kg batu kalo dijatuhkan keatas kaki yang ada kaki lu yang sakit bambang',
                                                                                    confirmButtonText: 'Lanjut',
                                                                                }).then(function(){
                                                                                    Swal.fire('Lanjut Ke Pertanyaan ke-3').then(function(){
                                                                                const {
                                                                                    value: name
                                                                                        } = Swal.fire({
                                                                                        icon: 'question',
                                                                                        title: 'Kalau saja ada sekolah yang berisi semua jenis hewan, siapa yang sering terlambat?',
                                                                                        text: 'Tulis Jawaban Kamu di bawah',
                                                                                        input: 'text',
                                                                                        inputLabel: '',
                                                                                        confirmButtonText: 'Jawab',
                                                                                        showDenyButton: true,
                                                                                        denyButtonText: 'Nyerah',
                                                                                        inputValidator: (value) => {
                                                                                        if (!value){ 
                                                                                        return 'Dijawab Dulu Kak!';
                                                                                        } else if (!(value =='Kaki Seribu' || value=='kaki seribu' || value=='Kaki seribu')) {
                                                                                            return 'Jawaban Kamu Salah :D'
                                                                                        }
                                                                                    }
                                                                                }).then((result) =>{
                                                                                    if (result.isConfirmed){
                                                                                        Swal.fire ({
                                                                                            icon: 'success',
                                                                                            title: 'Yab Betul Jawabanya Kaki Seribu',
                                                                                            text: 'Karena Kaki Seribu kakinya banyak jadinya make sepatunya lama :D'
                                                                                        }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title : 'Sayang Sekali Kamu Cuma Bisa Menjawab Satu Pertanyaan Saja!', 
                                                                                                    text: 'Semoga Beruntung Lain Waktu Ya Wkwk'    
                                                                                                }).then(function(){
                                                                                                    Swal.fire({
                                                                                                        icon: 'info',
                                                                                                        title: 'Terima Kasih Kak '+nama,
                                                                                                        text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                    }).then(function(){
                                                                                                        sessionStorage.setItem('hpsTombol','true');
                                                                                                        sessionStorage.setItem('udahMain','true');
                                                                                                        location.reload();
                                                                                                    
                                                                                                })
                                                                                                })
                                                                                            })
                                                                                    }else if (result.isDenied){
                                                                                            Swal.fire ({
                                                                                                title: 'Cemen Gitu Aja Nyerah :V',
                                                                                                confirmButtonText: 'Ya Ben',
                                                                                            }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title: 'Jawabannya Adalah "Kaki Seribu"',
                                                                                                    text: 'Karena Kakinya Banyak ,jadi kalo pakai sepatu lama, wkwk',
                                                                                                    confirmButtonText: 'Bisa Ae'
                                                                                                }).then(function(){
                                                                                                Swal.fire({
                                                                                                    icon: 'info',
                                                                                                    title : 'Sayang Sekali Tidak Ada Satupun Pertanyaan Yang Bisa Dijawab :(',     
                                                                                                    text: 'Coba lagi Lain Waktu Ya Wkwk'
                                                                                                }).then(function(){
                                                                                                    Swal.fire({
                                                                                                        icon: 'info',
                                                                                                        title: 'Terima Kasih Kak '+nama,
                                                                                                        text: 'Mau Bersedia Meluangkan Waktunya Menjawab Pertanyaan-pertanyan absurd tadi wkwk',
                                                                                                    }).then(function(){
                                                                                                        sessionStorage.setItem('hpsTombol','true');
                                                                                                        sessionStorage.setItem('udahMain','true');
                                                                                                        location.reload();
                                                                                                })
                                                                                                })
                                                                                            })           
                                                                                            })
                                                                                        }
                                                                                })
    
                                                                                
                                                                            })
                                                                                })
                                                                            })
                                                                        }
                                                                    })                 
                                                            })
                                                        })
                                                    })
                                                }
                                            })
                                        }else if (result.isDenied){
                                            Swal.fire('Okey Lah Kalo Begitu, Bye')
                                        }
                                    })
                                }
                            })
                                
                            
                        })
                    }
                })
                    
                
            })
        })
    })