// 멘트 관련 기능
// 1. 요일별 감지 / 2. 요일별 멘트 지정 / 3. 요일별 멘트 출력

let date_info   = new Date();
let day         = date_info.getDay();  // 요일

let dbyd_ment   = document.querySelector('.dbyd_ment'); // 멘트를 집어넣을 선택자
let ment_val; // 멘트 내용을 받을 전역변수

switch(day){
    case 0:
        ment_val = "행복하고 좋은 주말 보내세요 :D";
        break;
    case 1:
        ment_val = "월요병 잘 이겨내세요! 파이팅!";
        break;
    case 2:
        ment_val = "좋은일이 생길 하루가 되길 바래요 :D";
        break;
    case 3:
        ment_val = "한주의 절반이에요! 우리 좀만 힘내봐요~ :D";
        break;
    case 4:
        ment_val = "오늘은 점심 맛있는거 드셨을려나요? :)";
        break;
    case 5:
        ment_val = "한주간 수고 많으셨어요~! :D";
        break;
    case 6:
        ment_val = "좋은 주말이네요! 행복하시길 바래요 :)";
        break;                                            
}
dbyd_ment.innerText = ment_val;
// 멘트 관련 기능 끝

