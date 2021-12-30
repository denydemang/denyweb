$('.keluar').click(function(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('hpsTombol');
    sessionStorage.removeItem('hpsTombol1');
    sessionStorage.removeItem('lastname');
    sessionStorage.removeItem('weton');
    if (!(sessionStorage.getItem('udahMain'))){
        sessionStorage.removeItem('firstname')
    }
    document.location.href="index.html";
})