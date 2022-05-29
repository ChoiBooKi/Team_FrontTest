// Players = {
//   id: number,
//   //등번호
//   name: string,
//   already: boolean,
//   //들어가있는지 유무

//   //주장 유무랑 포지션 추가 예정
// }

export const positionsList = [
  {
    back: 52,//등번호
    circle: 1,//원 번호
    name: "이성훈",//원에 배치된 선수이름
    x : 145,//원 x값
    y : 0,//원 y값
    cid: 1,
    position: "ST"//현재 원의 포지션
    //팀네임
  },
  {
    back: 12,
    circle: 2,
    name: "최부기",
    x : 380,
    y : 0,
    cid: 1,
    position: "ST"
  },
  {
    back: 44,
    circle: 3,
    name: "윤성록",
    x : 25,
    y : 0,
    cid: 1,
    position: "LW"
  },
  {
    back: 15,
    circle: 4,
    name: "정지원",
    x : 160,
    y : 0,
    cid: 1,
    position: "ST"
  },
  {
    back: 33,
    circle: 5,
    name: "이재이",
    x : 350,
    y : 0,
    cid: 1,
    position: "ST"
  },
  {
    back: 26,
    circle: 6,
    name: "김동기",
    x : 500,
    y : 0,
    cid: 1,
    position: "RW"
  },
  {
    back: 37,
    circle: 7,
    name: "이진성",
    x : 30,
    y : 0,
    cid: 1,
    position: "LW"
  },
  {
    back: null,
    circle: 8,
    name: null,
    x : 160,
    y : 660,
    cid: 1,
    position: "CB"
  },
  {
    back: null,
    circle: 9,
    name: null,
    x : 350,
    y : 660,
    cid: 1,
    position: "CB"
  },
  {
    back: null,
    circle: 10,
    name: null,
    x : 485,
    y : 580,
    cid: 1,
    position: "RB"
  },
  {
    back: null,
    circle: 11,
    name: null,
    x : 260,
    y : 790,
    cid: 1,
    position: "GK"
  },
];


// 포메이션 드롭다운 목데이터
// [
//   {
//     circle: 1,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 2,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 3,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 4,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 5,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 6,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 7,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 8,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 9,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 10,
//     x : 0,
//     y : 0,
//   },
//   {
//     circle: 11,
//     x : 0,
//     y : 0,
//   },
// ]

[
  {
    from: "team",
    name: "팀부기",
    teamname: "SENT"
  },
  {
    from: "player",
    name: "선부기",
    teamname: "선수"
  }
] //알림 정보

[
  {
    teamname: "SENT",
    intro: "안녕하세요. SENT 입니다. 저희팀은 이러쿵 저러쿵 멋지고 잘생긴 사람만 있답니다.",
    leader: "차준혁",
    date: "2022-05-29",
    numofplayer: 9,
    age: "20대 중반",
    region: "경기도 수원시"
  }
]