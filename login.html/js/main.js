// 히스토리 뒤로가기
$('.arrow_left').click(function(e){
 e.preventDefault();
 if(window.history.length >1){
    window.history.back();
 }else {
    location.href = './index.html';
 }

});