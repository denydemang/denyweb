let datauser = [
    {   namadepan : "shinta",
        namabelakang: "restika"
    },
    {   namadepan : "deny",
        namabelakang: "kurniawan"
    },
    {   namadepan : "arif",
        namabelakang: "fajar"
    },
    {   namadepan : "ridwan",
        namabelakang: "adi nugroho"
    },
    {   namadepan : "isti",
        namabelakang: "ista"
    },
    {   namadepan : "dimas",
        namabelakang: "feri cuy",
    },
    {   namadepan : "rizal",
        namabelakang: "adi nugroho",
    },
    {   namadepan : "dedy",
        namabelakang: "suprayogi",
    },
    {   namadepan : "yasin",
        namabelakang: "fajar",
    },
    {   namadepan : "paramudhitya",
        namabelakang: "fajar",
    },
    {   namadepan : "dewi",
        namabelakang: "cahyaning",
    },
    {   namadepan : "ozata",
        namabelakang: "maurinka",
    },
    {   namadepan : "vina",
        namabelakang: "havita",
    },
    {   namadepan : "hasta",
        namabelakang: "prasetya",
    },
    {   namadepan : "muhammad",
        namabelakang: "salahudin",
    },
    {   namadepan : "krisnadi",
        namabelakang: "toyeng",
    },
    {   namadepan : "fiolla",
        namabelakang: "nazwira",
    },
    {   namadepan : "faisal",
        namabelakang: "dwi kuncoro",
    },
    {   namadepan : "diyah",
        namabelakang: "",
    },
]
$(document).ready(function(){
    $('.submit').click(function(){
        let namadepan = $('.namadepan').val();
        let namadepankecil = namadepan.toLowerCase();
        let namabelakang = $('.namabelakang').val();
        let namabelakangkecil = namabelakang.toLowerCase();
        for ( i = 0 ; i < datauser.length ; i++ ){
            if (((namabelakangkecil == datauser[i].namabelakang) && (namadepankecil == datauser[i].namadepan))){
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: 'Monggo Pinarak :)',
                    showConfirmButton: false,
                    timer: 1500
                    });
                setTimeout(function(){
                    document.location.href="permainan.html";
                    sessionStorage.setItem('firstname',namadepankecil);
                    sessionStorage.setItem('lastname',namabelakangkecil);
                    sessionStorage.setItem('login','true');
                },1350)
                return
            } 
        }       if ((namabelakangkecil=="") && (namadepankecil =="")){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Isi Dulu Nama Depan dan Belakang Kamu Kak ', 
                })  
                }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...Maaf Nama Kamu Tidak Terdaftar',
                text: 'Silakan Hubungi Pembuat Website Terkait', 
            }).then(function(){
                location.reload();
            })
        }
    
    })
})
