function hitungweton(value){
    const namaweton =["Kliwon", "Legi", "Pahing","Pon", "Wage"]
    var tgl = value;
    var split = tgl.split(', ');
    var tgl = split[1];
    var tgl = tgl.split('/')
    var tgl = tgl[1]+'/'+tgl[0]+'/'+tgl[2]
    var hari  = split[0];
    var tgl1 = new Date("1/1/1900");
    var tgl2 = new Date(tgl);
    //Hitung Weton
    var selisih = tgl2.getTime() - tgl1.getTime();
    var jmlhhari = selisih / (1000 * 3600 * 24);
    var weton = ( parseInt(jmlhhari) + 2) % 5
    var weton = hari +' '+namaweton[weton];
    return weton;
}
function ramalan(){
    // hari dan weton kamu
    var hari1= $('.hasilweton1').val();
    var split1 = hari1.split(' ');
    var hari1 = split1[0];
    var weton1 = split1[1];
    

    switch(hari1) {
            case 'Minggu':
                var hari1 = 5
                break;
            case 'Senin':
                var hari1 = 4
                break;
            case 'Selasa':
                var hari1 = 3
                break;
            case 'Rabu':
                var hari1 = 7
                break;
            case 'Kamis':
                var hari1 = 8
                break;
            case 'Jumat':
                var hari1 = 6
                break;
            case 'Sabtu':
                var hari1 = 9
                break;
        
    } 
    switch(weton1) {
            case 'Pahing':
                var weton1 = 9
                break;
            case 'Pon':
                var weton1 = 7
                break;
            case 'Wage':
                var weton1 = 4
                break;
            case 'Kliwon':
                var weton1 = 8
                break;
            case 'Legi':
                var weton1 = 5
                break;
                    
    } 
    //hari dan weton doi
    var hari2= $('.hasilweton2').val();
    var split2 = hari2.split(' ');
    var hari2 = split2[0];
    var weton2 = split2[1];
    switch(hari2) {
            case 'Minggu':
                var hari2 = 5
                break;
            case 'Senin':
                var hari2 = 4
                break;
            case 'Selasa':
                var hari2 = 3
                break;
            case 'Rabu':
                var hari2 = 7
                break;
            case 'Kamis':
                var hari2 = 8
                break;
            case 'Jumat':
                var hari2 = 6
                break;
            case 'Sabtu':
                var hari2 = 9
                break;
            
    } 
    switch(weton2) {
            case 'Pahing':
                var weton2 = 9
                break;
            case 'Pon':
                var weton2 = 7
                break;
            case 'Wage':
                var weton2 = 4
                break;
            case 'Kliwon':
                var weton2 = 8
                break;
            case 'Legi':
                var weton2 = 5
                break;
                    
    } 
    
    const jumlahneptu = (hari1 + weton1) + (hari2 + weton2);
    return jumlahneptu;
    
}
function hasilramalan(x){
    if (x == 1 || x == 9 || x == 10 || x == 18 || x == 19 || x == 27|| x == 28 || x == 36) {
        Swal.fire({
            icon: 'info',
            title: 'PEGAT '+'(Jumlah Neptu '+x+')',
            text : 'Kamu dan Si Doi masuk kategori "PEGAT", Menurut Primbon Jawa, Pasangan dengan Kategori "PEGAT" akan ada banyak masalah yang menerpa rumah tangga-nya mulai dari masalah ekonomi, kekuasaan, perselingkuhan yang bisa menyebabkan bercerai atau pegatan.'
        }).then(function(){
            Swal.fire({
                icon:'warning',
                title: 'Ingat ! Maut, Rezeki,dan Jodoh Semua Ada Ditangan Tuhan',
                text: 'Ini Hanya Buat Seruan-seruan aja yak, Jangan dibikin serius, Percaya Ramalan Syirik wkwk '
            }).then(function(){
                sessionStorage.setItem('tglkamu',$('#datetimepicker1').val());
                sessionStorage.setItem('tgldoi',$('#datetimepicker2').val());
                sessionStorage.setItem('hpsTombol1','true');
                sessionStorage.setItem('udahMain','true');
                sessionStorage.setItem('hpsTombol1','true');
                location.reload();
                
                
            })
        })
    }
    else if (x == 2 || x == 11 || x == 20 || x == 29 ) {
        Swal.fire({
            icon: 'info',
            title: 'RATU '+'(Jumlah Neptu '+x+')',
            text : 'Kamu dan Si Doi masuk kategori "Ratu", Menurut Primbon Jawa, Pasangan dengan Kategori "Ratu" ini bisa dibilang pasangan yang memang sudah jodohnya. Dihargai dan disegani oleh tetangga dan lingkungan sekitar. Saking harmonisnya, bahkan banyak orang yang iri akan keharmonisannya dalam membina rumah tangga.'
        }).then(function(){
            Swal.fire({
                icon:'warning',
                title: 'Ingat ! Maut, Rezeki, dan Jodoh Semua Ada Di Tangan Tuhan',
                text: 'Ini Hanya Buat Seruan-seruan aja yak, Jangan dibikin serius, Percaya Ramalan Syirik wkwk '
            }).then(function(){
                sessionStorage.setItem('tglkamu',$('#datetimepicker1').val());
                sessionStorage.setItem('tgldoi',$('#datetimepicker2').val());
                sessionStorage.setItem('udahMain','true');
                sessionStorage.setItem('hpsTombol1','true');
                location.reload();

            })
        })
    } else if (x == 3 || x == 12 || x == 21 || x == 30 ) {
        Swal.fire({
            icon: 'info',
            title: 'JODOH '+'(Jumlah Neptu '+x+')',
            text : 'Kamu dan Si Doi masuk kategori "Jodoh", Menurut Primbon Jawa,Pasangan dengan Kategori "Jodoh" , sesuai dengan namanya pasangan tersebut memang beneran cocok dan berjodoh. Pasangan ini bisa saling menerima segala kelebihan dan kekurangan masing-masing. Rumah tangga pasangan "Jodoh" ini bisa rukun sampai tua.'
        }).then(function(){
            Swal.fire({
                icon:'warning',
                title: 'Ingat ! Maut, Rezeki, dan Jodoh Semua Ada Di Tangan Tuhan',
                text: 'Ini Hanya Buat Seruan-seruan aja yak, Jangan dibikin serius, Percaya Ramalan Syirik wkwk '
            }).then(function(){
                sessionStorage.setItem('tglkamu',$('#datetimepicker1').val());
                sessionStorage.setItem('tgldoi',$('#datetimepicker2').val());
                sessionStorage.setItem('udahMain','true');
                sessionStorage.setItem('hpsTombol1','true');
                location.reload();

            })
        })
    } else if( x == 4 || x == 13 || x == 22 || x == 31){
        Swal.fire({
            icon: 'info',
            title: 'TOPO '+'(Jumlah Neptu '+x+')',
            text : 'Kamu dan Si Doi masuk kategori "Topo", Menurut Primbon Jawa,Pasangan dengan Kategori "Topo", dalam membina rumah tangga akan sering mengalami kesusahan di awal musim karena masih saling memahami tapi akan bahagia pada akhirnya. Masalah yang dihadapi bisa saja soal ekonomi dan lainnya. Nah, saat sudah memiliki anak dan cukup lama berumah tangga, akhirnya mereka akan hidup sukses dan bahagia.'
        }).then(function(){
            Swal.fire({
                icon:'warning',
                title: 'Ingat ! Maut, Rezeki, dan Jodoh Semua Ada Di Tangan Tuhan',
                text: 'Ini Hanya Buat Seruan-seruan aja yak, Jangan dibikin serius, Percaya Ramalan Syirik wkwk '
            }).then(function(){
                sessionStorage.setItem('tglkamu',$('#datetimepicker1').val());
                sessionStorage.setItem('tgldoi',$('#datetimepicker2').val());
                sessionStorage.setItem('udahMain','true');
                sessionStorage.setItem('hpsTombol1','true');
                location.reload();
            })
        })
    } else if ( x == 5 || x == 14 || x == 23 ||x == 32){
        Swal.fire({
            icon: 'info',
            title: 'TINARI '+'(Jumlah Neptu '+x+')',
            text : 'Kamu dan Si Doi masuk kategori "Tinari", Menurut Primbon Jawa,Pasangan dengan Kategori "Tinari" akan menemukan kebahagiaan. Dalam mencari rezeki diberikan kemudahan dan nggak sampai hidup kekurangan. Selain itu, hidupnya juga sering mendapat keberuntungan.'
        }).then(function(){
            Swal.fire({
                icon:'warning',
                title: 'Ingat ! Maut, Rezeki, dan Jodoh Semua Ada Di Tangan Tuhan',
                text: 'Ini Hanya Buat Seruan-seruan aja yak, Jangan dibikin serius, Percaya Ramalan Syirik wkwk '
            }).then(function(){
                sessionStorage.setItem('tglkamu',$('#datetimepicker1').val());
                sessionStorage.setItem('tgldoi',$('#datetimepicker2').val());
                sessionStorage.setItem('udahMain','true');
                sessionStorage.setItem('hpsTombol1','true');
                location.reload();
            })
        })
    } else if ( x == 6 || x == 15 || x == 24 ||x == 33){
        Swal.fire({
            icon: 'info',
            title: 'PADU '+'(Jumlah Neptu '+x+')',
            text : 'Kamu dan Si Doi masuk kategori "Padu", Menurut Primbon Jawa,Pasangan dengan Kategori "Padu", dalam berumah tangga, keduanya akan sering mengalami pertengkaran. Tapi meskipun sering bertengkar, keduanya nggak sampai cerai. Masalah pertengkaran tersebut bahkan bisa dipicu dari hal-hal yang sifatnya cukup sepele'
        }).then(function(){
            Swal.fire({
                icon:'warning',
                title: 'Ingat ! Maut, Rezeki, dan Jodoh Semua Ada Di Tangan Tuhan',
                text: 'Ini Hanya Buat Seruan-seruan aja yak, Jangan dibikin serius, Percaya Ramalan Syirik wkwk '
            }).then(function(){
                sessionStorage.setItem('tglkamu',$('#datetimepicker1').val());
                sessionStorage.setItem('tgldoi',$('#datetimepicker2').val());
                sessionStorage.setItem('udahMain','true');
                sessionStorage.setItem('hpsTombol1','true');
                sessionStorage.setItem('hpsTombol1','true');
                location.reload();
            })
        })
    } else if ( x == 7 || x == 16 || x == 25 ||x == 34){
        Swal.fire({
            icon: 'info',
            title: 'SUJANAN '+'(Jumlah Neptu '+x+')',
            text : 'Kamu dan Si Doi masuk kategori "Sujanan", Menurut Primbon Jawa,Pasangan dengan Kategori "Sujanan", dalam berumah tangga keduanya akan sering mengalami pertengkaran dan masalah perselingkuhan. Bisa itu dari pihak laki-laki maupun perempuan yang memulai perselingkuhan tersebut.'
        }).then(function(){
            Swal.fire({
                icon:'warning',
                title: 'Ingat ! Maut, Rezeki, dan Jodoh Semua Ada Di Tangan Tuhan',
                text: 'Ini Hanya Buat Seruan-seruan aja yak, Jangan dibikin serius, Percaya Ramalan Syirik wkwk '
            }).then(function(){
                sessionStorage.setItem('tglkamu',$('#datetimepicker1').val());
                sessionStorage.setItem('tgldoi',$('#datetimepicker2').val());
                sessionStorage.setItem('udahMain','true');
                sessionStorage.setItem('hpsTombol1','true');
                location.reload();
            })
        })
    } else if ( x == 8 || x == 17 || x == 26 ||x == 35){
        Swal.fire({
            icon: 'info',
            title: 'PESTHI '+'(Jumlah Neptu '+x+')',
            text : 'Kamu dan Si Doi masuk kategori "Pesthi", Menurut Primbon Jawa,Pasangan dengan Kategori "Pesthi", dalam berumah tangga akan rukun, tenteram, adem ayem sampai tua. Meskipun ada masalah apa pun tidak akan sampai merusak keharmonisan keluarga'
        }).then(function(){
            Swal.fire({
                icon:'warning',
                title: 'Ingat ! Maut, Rezeki, dan Jodoh Semua Ada Di Tangan Tuhan',
                text: 'Ini Hanya Buat Seruan-seruan aja yak, Jangan dibikin serius, Percaya Ramalan Syirik wkwk '
            }).then(function(){
                sessionStorage.setItem('tglkamu',$('#datetimepicker1').val());
                sessionStorage.setItem('tgldoi',$('#datetimepicker2').val());
                sessionStorage.setItem('udahMain','true');
                sessionStorage.setItem('hpsTombol1','true');
                location.reload();
                
            })
        })
    } else {
        Swal.fire({
            icon:'warning',
            title: 'Ooppss !',
            text : 'Pilih Tanggal Lahir Dulu Yakk !'
        })
    }
}