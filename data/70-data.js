const busKeys = ["거제", "거제시청", "구조라", "능포", "대교", "동부", "두모", "망치", "문동", "연담삼거리", "상동", "양화", "어구", "옥림", "지세포", "하둔", "학동"];

const bus_data_in   = [
    {
        "번호" : "67",
        "고현" : "5:40",
        "상동" : "5:47",
        "문동" : "5:50",
        "연담삼거리" : "5:55",
        "학동" : "6:20",
        "양화" : "시간 미제공",
        "망치" : "6:30",
        "구조라" : "6:40",
        "지세포" : "시간 미제공",
        "옥림" : "시간 미제공",
        "두모" : "시간 미제공",
        "능포" : "7:09",
        "비고" : ""
    },
    {
        "번호" : "130",
        "고현" : "6:55",
        "상동" : "7:02",
        "문동" : "7:05",
        "연담삼거리" : "7:10",
        "비고" : ""
    },

    {
        "번호" : "130",
        "고현" : "7:43",
        "상동" : "7:50",
        "문동" : "7:53",
        "연담삼거리" : "7:58",
        "비고" : "07:43분 터미널(순환)-계룡중-시청-상동 경유"
    },

    {
        "번호" : "71",
        "고현" : "7:45",
        "상동" : "7:52",
        "문동" : "7:55",
        "연담삼거리" : "8:00",
        "동부" : "8:15",
        "거제" : "8:20",
        "어구" : "8:45",
        "하둔" : "8:55",
        "대교" : "9:10",
        "비고" : ""
    },

    {
        "번호" : "71",
        "고현" : "9:30",
        "상동" : "9:37",
        "문동" : "9:40",
        "연담삼거리" : "9:45",
        "동부" : "10:00",
        "거제" : "10:05",
        "어구" : "10:30",
        "하둔" : "10:40",
        "대교" : "10:55",
        "비고" : ""
    },

    {
        "번호" : "71",
        "고현" : "11:30",
        "상동" : "11:37",
        "문동" : "11:40",
        "연담삼거리" : "11:45",
        "동부" : "12:00",
        "거제" : "12:05",
        "어구" : "12:30",
        "하둔" : "12:40",
        "대교" : "12:55",
        "비고" : ""
    },

    {
        "번호" : "71",
        "고현" : "13:30",
        "상동" : "13:37",
        "문동" : "13:40",
        "연담삼거리" : "13:45",
        "동부" : "14:00",
        "거제" : "14:05",
        "어구" : "14:30",
        "하둔" : "14:40",
        "대교" : "14:55",
        "비고" : ""
    },

    {
        "번호" : "71",
        "고현" : "15:30",
        "상동" : "15:37",
        "문동" : "15:40",
        "연담삼거리" : "15:45",
        "동부" : "16:00",
        "거제" : "16:05",
        "어구" : "16:30",
        "하둔" : "16:40",
        "대교" : "16:55",
        "비고" : ""
    },

    {
        "번호" : "71",
        "고현" : "17:30",
        "상동" : "17:37",
        "문동" : "17:40",
        "연담삼거리" : "17:45",
        "동부" : "18:00",
        "거제" : "18:05",
        "어구" : "18:30",
        "하둔" : "18:40",
        "대교" : "18:55",
        "비고" : ""
    },

    {
        "번호" : "70",
        "고현" : "18:30",
        "상동" : "18:37",
        "문동" : "18:40",
        "연담삼거리" : "18:45",
        "비고" : "고현-고현"
    },

    {
        "번호" : "71",
        "고현" : "19:30",
        "상동" : "19:37",
        "문동" : "19:40",
        "연담삼거리" : "19:45",
        "동부" : "20:00",
        "거제" : "20:05",
        "어구" : "20:30",
        "하둔" : "20:40",
        "대교" : "20:55",
        "비고" : ""
    },

    {
        "번호" : "70",
        "고현" : "22:10",
        "상동" : "22:17",
        "문동" : "22:20",
        "연담삼거리" : "22:25",
        "비고" : "고현-고현"
    }
];
const bus_data_out  = [
    {
        "번호" : "130",
        "연담삼거리" : "7:15",
        "문동" : "7:20",
        "상동" : "7:23",
        "거제시청" : "7:26",
        "고현" : "7:30",
        "비고" : ""
    },

    {
        "번호" : "70",
        "연담삼거리" : "8:05",
        "문동" : "8:10",
        "상동" : "8:13",
        "거제시청" : "8:16",
        "고현" : "8:20",
        "비고" : ""
    },

    {
        "번호" : "71-1",
        "대교" : "7:20",
        "하둔" : "7:35",
        "어구" : "7:42",
        "거제" : "8:05",
        "동부" : "8:10",
        "연담삼거리" : "8:20",
        "문동" : "8:25",
        "상동" : "8:28",
        "거제시청" : "8:31",
        "고현" : "8:35",
        "비고" : ""
    },

    {
        "번호" : "71-1",
        "대교" : "9:20",
        "하둔" : "9:35",
        "어구" : "9:42",
        "거제" : "10:05",
        "동부" : "10:10",
        "연담삼거리" : "10:20",
        "문동" : "10:30",
        "상동" : "10:33",
        "거제시청" : "10:36",
        "고현" : "10:40",
        "비고" : ""
    },

    {
        "번호" : "71-1",
        "대교" : "11:20",
        "하둔" : "11:35",
        "어구" : "11:42",
        "거제" : "12:00",
        "동부" : "12:05",
        "연담삼거리" : "12:15",
        "문동" : "12:25",
        "상동" : "12:28",
        "거제시청" : "12:31",
        "고현" : "12:35",
        "비고" : ""
    },

    {
        "번호" : "71-1",
        "대교" : "13:20",
        "하둔" : "13:35",
        "어구" : "13:42",
        "거제" : "14:00",
        "동부" : "14:05",
        "연담삼거리" : "14:15",
        "문동" : "14:25",
        "상동" : "14:28",
        "거제시청" : "14:31",
        "고현" : "14:35",
        "비고" : ""
    },

    {
        "번호" : "71-1",
        "대교" : "15:20",
        "하둔" : "15:35",
        "어구" : "15:42",
        "거제" : "16:00",
        "동부" : "16:05",
        "연담삼거리" : "16:15",
        "문동" : "16:25",
        "상동" : "16:28",
        "거제시청" : "16:31",
        "고현" : "16:35",
        "비고" : ""
    },

    {
        "번호" : "71",
        "대교" : "17:20",
        "하둔" : "17:35",
        "어구" : "17:42",
        "거제" : "18:00",
        "동부" : "18:05",
        "연담삼거리" : "18:15",
        "문동" : "18:25",
        "상동" : "18:28",
        "고현" : "18:35",
        "비고" : ""
    },

    {
        "번호" : "70",
        "연담삼거리" : "18:55",
        "문동" : "19:05",
        "상동" : "19:08",
        "고현" : "19:15",
        "비고" : "고현-고현"
    },

    {
        "번호" : "71",
        "대교" : "19:20",
        "하둔" : "19:35",
        "어구" : "19:42",
        "거제" : "20:00",
        "동부" : "20:05",
        "연담삼거리" : "20:15",
        "문동" : "20:25",
        "상동" : "20:28",
        "고현" : "20:35",
        "비고" : ""
    },

    {
        "번호" : "71",
        "대교" : "21:20",
        "하둔" : "21:35",
        "어구" : "21:42",
        "거제" : "22:00",
        "동부" : "22:05",
        "연담삼거리" : "22:15",
        "문동" : "22:25",
        "상동" : "22:28",
        "고현" : "22:35",
        "비고" : ""
    },

    {
        "번호" : "70",
        "연담삼거리" : "22:35",
        "문동" : "22:40",
        "상동" : "22:43",
        "고현" : "22:50",
        "비고" : "고현-고현"
    }
];

export {busKeys,bus_data_in,bus_data_out};