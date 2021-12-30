//Setelah user keluar(selesai bermain) maka akan muncul notif terimaksih dan permintaan untuk  mengisi form feedback , dengan menset sessionsttorage feeadback
if (sessionStorage.getItem('udahMain')== 'true'){
    Swal.fire('Terima Kasih Sudah Bermain :)  Jangan Lupa Kasih Feedback','','info').then(function(){
        sessionStorage.removeItem('udahMain');
        sessionStorage.setItem('feedback','true');
        location.reload();
    })
}

// Jika ada sessionStorage feedback maka tampilkan form modal feedback jika tidak maka sembunyikan form feedback
$(document).ready(function(){
    if ((sessionStorage.getItem('feedback'))=='true'){
        $('#Feedback').modal('show');
    }
})
