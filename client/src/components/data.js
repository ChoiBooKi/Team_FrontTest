// Players = {
//   id: number,
//   //등번호
//   name: string,
//   already: boolean,
//   //들어가있는지 유무

//   //주장 유무랑 포지션 추가 예정
// }

export const PlayersList = [
    {
        back: 12,//등번호
        name: "최부기",//선수이름
        already: true,//배치됐는지 유무
        Change: true,//필요없음
        like: "ST",//선호포지션
        select: "ST",//현재 선택한 포지션
        email: "부기@naver.com"
        //이메일 -> 선수정보로 유저정보 찾기위한 도구일뿐/ 넣을지 말지는 미정
        //팀네임
        //선수-> 팀 신청 확인용 0 1 A B C
        //팀 -> 선수 신청 확인용 0 1
        //원인덱스
    },
    {
        back: 52,
        name: "차준혁",
        already: false,
        Change: true,
        like: "ST",
        select: "ST",
        email: "준혁@naver.com"
    },
    {
        back: 33,
        name: "이성훈",
        already: true,
        Change: true,
        like: "ST",
        select: "ST",
        email: "성훈@naver.com"
    },
    {
        back: 44,
        name: "윤성록",
        already: true,
        Change: true,
        like: "ST",
        select: "LW",
        email: "성록@naver.com"
    },
    {
        back: 15,
        name: "정지원",
        already: true,
        Change: true,
        like: "ST",
        select: "ST",
        email: "지원@naver.com"
    },
    {
        back: 26,
        name: "이찬근",
        already: false,
        Change: true,
        like: "ST",
        select: "ST",
        email: "찬근@naver.com"
    },
    {
        back: 37,
        name: "이진성",
        already: true,
        Change: true,
        like: "ST",
        select: "LW",
        email: "진성@naver.com"
    },
    {
        back: 28,
        name: "이지현",
        already: false,
        Change: true,
        like: "ST",
        select: "ST",
        email: "지현@naver.com"
    },
    {
        back: 19,
        name: "이재이",
        already: true,
        Change: true,
        like: "ST",
        select: "ST",
        email: "재이@naver.com"
    },
    {
        back: 31,
        name: "신승우",
        already: false,
        Change: true,
        like: "ST",
        select: "ST",
        email: "신승우@naver.com"
    },
    {
        back: 41,
        name: "박승태",
        already: false,
        Change: true,
        like: "ST",
        select: "ST",
        email: "승태@naver.com"
    },
    {
        back: 62,
        name: "박길우",
        already: false,
        Change: true,
        like: "ST",
        select: "ST",
        email: "길우@naver.com"
    },
    {
        back: 73,
        name: "김동기",
        already: true,
        Change: true,
        like: "ST",
        select: "RW",
        email: "동기@naver.com"
    },
    {
        back: 84,
        name: "강승우",
        already: false,
        Change: true,
        like: "ST",
        select: "ST",
        email: "승우@naver.com"
    },
];

let body = {
    fromEmail : '누가', //일정을 예약
    toEmail : '누구에게',
    //teamName : '어떤 팀에서' 팀가입거절 가입승인 
    value : '무엇을'
}