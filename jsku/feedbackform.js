//mengisi input nama yg dihiden di form feedback 
//secara otomatis berdasarkan session storage orang yg login
$(document).ready(function () {
    var namauser = sessionStorage.getItem('firstname');
        $("#nama").val(namauser);
    var tgluser= sessionStorage.getItem('tglkamu');
        $('#tgluser').val(tgluser)
    var tgldoi = sessionStorage.getItem('tgldoi');
        $('#tgldoi').val(tgldoi);
    var score = sessionStorage.getItem('score');
        $('#score').val(score);
    

});


//Codingan Range /Rate Penilaian di form feedback
$(document).ready(function(){
    $("#rate").change(function(){
        var val = $(this).val();
        var val = val * 20;
        if (val >= 70) {
            $("#keteranganrate").css('color','blue');
            $("#keteranganrate").html('Nilai Yang Diberikan '+val);
        } else {
            $("#keteranganrate").css('color','red');
            $("#keteranganrate").html('Nilai Yang Diberikan '+val);
        }
        
    })
})