const busKeys = ['가배', '거제','구조라', '구천', '능포', '다대', '다포', '동부', '두모', '망치', '문동', '부춘', '사곡', '삼거리', '상동', '수산', '쌍근', '양화', '여차', '연담', '옥림', '율포', '장평', '저구', '지세포', '탑포', '학동', '해금강', '홍포'];

const bus_data_in = [
    {
        "번호" : "52",
        "고현" : "5:30",
        "장평" : "5:40",
        "사곡" : "5:48",
        "거제" : "6:03",
        "동부" : "6:08",
        "가배" : "6:23",
        "율포" : "6:26",
        "탑포" : "6:29",
        "쌍근" : "6:31",
        "비고" : "변경"
    },
    {
        "번호" : "67",
        "고현" : "5:40",
        "상동" : "시간 미제공",
        "문동" : "5:53",
        "삼거리" : "시간 미제공",
        "구천" : "시간 미제공",
        "연담" : "6:13",
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
        "번호" : "53-1",
        "고현" : "5:50",
        "거제" : "6:10",
        "동부" : "6:15",
        "부춘" : "6:20",
        "탑포" : "6:30",
        "저구" : "6:40",
        "홍포" : "6:50",
        "비고" : "부춘-탑포도로 경유\n장평,사곡 미경유"
    },

    {
        "번호" : "50",
        "고현" : "6:00",
        "장평" : "6:10",
        "사곡" : "6:18",
        "거제" : "6:33",
        "동부" : "6:38",
        "비고" : ""
    },

    {
        "번호" : "52",
        "고현" : "6:15",
        "장평" : "6:25",
        "사곡" : "6:33",
        "거제" : "6:48",
        "동부" : "6:53",
        "가배" : "7:08",
        "율포" : "7:11",
        "탑포" : "7:14",
        "쌍근" : "7:16",
        "비고" : ""
    },

    {
        "번호" : "55",
        "고현" : "6:25",
        "거제" : "6:45",
        "동부" : "6:50",
        "연담" : "6:55",
        "학동" : "7:05",
        "해금강" : "7:15",
        "비고" : "장평,사곡 미경유"
    },

    {
        "번호" : "51",
        "고현" : "6:40",
        "장평" : "6:50",
        "사곡" : "6:58",
        "거제" : "7:13",
        "동부" : "7:18",
        "부춘" : "7:23",
        "비고" : "해양사 종점"
    },
    {
        "번호" : "54-1",
        "고현" : "7:05",
        "거제" : "7:25",
        "동부" : "7:30",
        "부춘" : "7:35",
        "탑포" : "7:45",
        "저구" : "7:55",
        "여차" : "8:10",
        "비고" : "부춘-탑포도로 경유\n장평,사곡 미경유\n다포, 다대경유"
    },

    {
        "번호" : "51",
        "고현" : "7:25",
        "장평" : "7:35",
        "사곡" : "7:43",
        "거제" : "7:58",
        "동부" : "8:03",
        "부춘" : "8:08",
        "비고" : "해양사 종점"
    },
    {
        "번호" : "53",
        "고현" : "7:50",
        "거제" : "8:10",
        "동부" : "8:15",
        "가배" : "8:30",
        "율포" : "8:33",
        "탑포" : "8:35",
        "저구" : "8:45",
        "홍포" : "8:55",
        "비고" : "장평,사곡 미경유"
    },

    {
        "번호" : "67-1",
        "고현" : "8:05",
        "장평" : "8:15",
        "사곡" : "8:23",
        "거제" : "8:38",
        "동부" : "8:43",
        "부춘" : "8:46",
        "학동" : "9:00",
        "수산" : "시간 미제공",
        "양화" : "시간 미제공",
        "망치" : "9:20",
        "구조라" : "시간 미제공",
        "지세포" : "시간 미제공",
        "능포" : "시간 미제공",
        "비고" : "부춘-평지도로 경유"
    },
    {
        "번호" : "50",
        "고현" : "8:25",
        "장평" : "8:35",
        "사곡" : "8:43",
        "거제" : "8:58",
        "동부" : "9:03",
        "비고" : "오수마을 경유"
    },

    {
        "번호" : "52",
        "고현" : "8:45",
        "장평" : "8:55",
        "사곡" : "9:03",
        "거제" : "9:18",
        "동부" : "9:23",
        "가배" : "9:38",
        "율포" : "9:41",
        "탑포" : "9:44",
        "쌍근" : "9:46",
        "비고" : ""
    },

    {
        "번호" : "55",
        "고현" : "9:05",
        "거제" : "9:25",
        "동부" : "9:30",
        "연담" : "9:35",
        "학동" : "9:45",
        "해금강" : "9:55",
        "비고" : "장평,사곡 미경유\n거제케이블카승강장 경유"
    },

    {
        "번호" : "50",
        "고현" : "9:25",
        "장평" : "9:35",
        "사곡" : "9:43",
        "거제" : "9:58",
        "동부" : "10:03",
        "비고" : ""
    },
    {
        "번호" : "53",
        "고현" : "9:45",
        "거제" : "10:05",
        "동부" : "10:10",
        "가배" : "10:25",
        "율포" : "10:28",
        "탑포" : "10:30",
        "저구" : "10:40",
        "홍포" : "10:50",
        "비고" : "장평,사곡 미경유"
    },
    {
        "번호" : "67-1",
        "고현" : "10:05",
        "장평" : "10:15",
        "사곡" : "10:23",
        "거제" : "10:38",
        "동부" : "10:43",
        "부춘" : "10:46",
        "학동" : "11:00",
        "수산" : "시간 미제공",
        "양화" : "시간 미제공",
        "망치" : "11:20",
        "구조라" : "시간 미제공",
        "지세포" : "시간 미제공",
        "능포" : "시간 미제공",
        "비고" : "부춘-평지도로 경유"
    },

    {
        "번호" : "50",
        "고현" : "10:25",
        "장평" : "10:35",
        "사곡" : "10:43",
        "거제" : "10:58",
        "동부" : "11:03",
        "비고" : "오수마을 경유"
    },

    {
        "번호" : "52",
        "고현" : "10:45",
        "장평" : "10:55",
        "사곡" : "11:03",
        "거제" : "11:18",
        "동부" : "11:23",
        "가배" : "11:38",
        "율포" : "11:41",
        "탑포" : "11:44",
        "쌍근" : "11:46",
        "비고" : ""
    },

    {
        "번호" : "55",
        "고현" : "11:05",
        "거제" : "11:25",
        "동부" : "11:30",
        "연담" : "11:35",
        "학동" : "11:45",
        "해금강" : "11:55",
        "비고" : "장평,사곡 미경유\n거제케이블카승강장 경유"
    },

    {
        "번호" : "50",
        "고현" : "11:25",
        "장평" : "11:35",
        "사곡" : "11:43",
        "거제" : "11:58",
        "동부" : "12:03",
        "비고" : ""
    },
    {
        "번호" : "54-1",
        "고현" : "11:45",
        "거제" : "12:05",
        "동부" : "12:10",
        "가배" : "12:25",
        "율포" : "12:28",
        "탑포" : "12:30",
        "저구" : "12:40",
        "여차" : "12:55",
        "비고" : "장평,사곡 미경유\n다포,다대 경유"
    },

    {
        "번호" : "52",
        "고현" : "12:45",
        "장평" : "12:55",
        "사곡" : "13:03",
        "거제" : "13:18",
        "동부" : "13:23",
        "가배" : "13:38",
        "율포" : "13:41",
        "탑포" : "13:44",
        "쌍근" : "13:46",
        "비고" : ""
    },
    {
        "번호" : "67-1",
        "고현" : "12:15",
        "장평" : "12:25",
        "사곡" : "12:33",
        "거제" : "12:48",
        "동부" : "12:53",
        "부춘" : "12:56",
        "학동" : "13:10",
        "수산" : "시간 미제공",
        "양화" : "시간 미제공",
        "망치" : "10:30",
        "구조라" : "시간 미제공",
        "지세포" : "시간 미제공",
        "능포" : "시간 미제공",
        "비고" : "부춘-평지도로 경유"
    },

    {
        "번호" : "55",
        "고현" : "13:05",
        "거제" : "13:25",
        "동부" : "13:30",
        "연담" : "13:35",
        "학동" : "13:45",
        "해금강" : "13:55",
        "비고" : "장평,사곡 미경유\n거제케이블카승강장 경유"
    },

    {
        "번호" : "50",
        "고현" : "13:25",
        "장평" : "13:35",
        "사곡" : "13:43",
        "거제" : "13:58",
        "동부" : "14:03",
        "비고" : "오수마을 경유"
    },
    {
        "번호" : "53",
        "고현" : "13:45",
        "거제" : "14:05",
        "동부" : "14:10",
        "가배" : "14:25",
        "율포" : "14:28",
        "탑포" : "14:31",
        "다포" : "시간 미제공",
        "다대" : "시간 미제공",
        "저구" : "14:48",
        "홍포" : "14:58",
        "비고" : "장평,사곡 미경유\n다포,다대 경유"
    },

    {
        "번호" : "67-1",
        "고현" : "14:05",
        "장평" : "14:15",
        "사곡" : "14:23",
        "거제" : "14:38",
        "동부" : "14:43",
        "부춘" : "14:46",
        "학동" : "15:00",
        "수산" : "시간 미제공",
        "양화" : "시간 미제공",
        "망치" : "15:20",
        "구조라" : "시간 미제공",
        "지세포" : "시간 미제공",
        "능포" : "시간 미제공",
        "비고" : "부춘-평지도로 경유"
    },

    {
        "번호" : "52",
        "고현" : "14:45",
        "장평" : "14:55",
        "사곡" : "15:03",
        "거제" : "15:18",
        "동부" : "15:23",
        "가배" : "15:38",
        "율포" : "15:41",
        "탑포" : "15:44",
        "쌍근" : "15:46",
        "비고" : ""
    },
    {
        "번호" : "55-1",
        "고현" : "15:05",
        "거제" : "15:25",
        "동부" : "15:30",
        "가배" : "15:45",
        "저구" : "시간 미제공",
        "다대" : "시간 미제공",
        "다포" : "시간 미제공",
        "해금강" : "16:10",
        "비고" : "장평,사곡 미경유\n다포,다대 경유"
    },
    {
        "번호" : "50",
        "고현" : "15:25",
        "장평" : "15:35",
        "사곡" : "15:43",
        "거제" : "15:58",
        "동부" : "16:03",
        "비고" : "오수마을 경유"
    },
    {
        "번호" : "53",
        "고현" : "15:45",
        "거제" : "16:05",
        "동부" : "16:10",
        "가배" : "16:25",
        "율포" : "16:28",
        "탑포" : "16:31",
        "다포" : "시간 미제공",
        "다대" : "시간 미제공",
        "저구" : "16:48",
        "홍포" : "16:58",
        "비고" : "장평,사곡 미경유\n다포,다대 경유"
    },

    {
        "번호" : "67-1",
        "고현" : "16:05",
        "장평" : "16:15",
        "사곡" : "16:23",
        "거제" : "16:38",
        "동부" : "16:43",
        "부춘" : "16:46",
        "학동" : "17:00",
        "수산" : "시간 미제공",
        "양화" : "시간 미제공",
        "망치" : "17:20",
        "구조라" : "시간 미제공",
        "지세포" : "시간 미제공",
        "능포" : "시간 미제공",
        "비고" : "부춘-평지도로 경유"
    },

    {
        "번호" : "50",
        "고현" : "16:25",
        "장평" : "16:35",
        "사곡" : "16:43",
        "거제" : "16:58",
        "동부" : "17:03",
        "비고" : "오수마을 경유"
    },

    {
        "번호" : "52",
        "고현" : "16:45",
        "장평" : "16:55",
        "사곡" : "17:03",
        "거제" : "17:18",
        "동부" : "17:23",
        "가배" : "17:38",
        "율포" : "17:41",
        "탑포" : "17:44",
        "쌍근" : "17:46",
        "비고" : ""
    },

    {
        "번호" : "55",
        "고현" : "17:05",
        "거제" : "17:25",
        "동부" : "17:30",
        "연담" : "17:35",
        "학동" : "17:45",
        "해금강" : "17:55",
        "비고" : "장평,사곡 미경유\n거제케이블카승강장 경유"
    },

    {
        "번호" : "50",
        "고현" : "17:25",
        "장평" : "17:35",
        "사곡" : "17:43",
        "거제" : "17:58",
        "동부" : "18:03",
        "비고" : ""
    },
    {
        "번호" : "53",
        "고현" : "17:45",
        "거제" : "18:05",
        "동부" : "18:10",
        "가배" : "18:25",
        "율포" : "18:28",
        "탑포" : "18:31",
        "다포" : "시간 미제공",
        "다대" : "시간 미제공",
        "저구" : "18:48",
        "홍포" : "18:58",
        "비고" : "장평,사곡 미경유\n다포,다대 경유"
    },

    {
        "번호" : "67-1",
        "고현" : "18:05",
        "장평" : "18:15",
        "사곡" : "18:23",
        "거제" : "18:38",
        "동부" : "18:43",
        "부춘" : "18:46",
        "학동" : "19:00",
        "수산" : "시간 미제공",
        "양화" : "시간 미제공",
        "망치" : "19:20",
        "구조라" : "시간 미제공",
        "지세포" : "시간 미제공",
        "능포" : "시간 미제공",
        "비고" : "부춘-평지도로 경유"
    },

    {
        "번호" : "50",
        "고현" : "18:25",
        "장평" : "18:35",
        "사곡" : "18:43",
        "거제" : "18:58",
        "동부" : "19:03",
        "비고" : "오수마을 경유"
    },

    {
        "번호" : "52",
        "고현" : "18:45",
        "장평" : "18:55",
        "사곡" : "19:03",
        "거제" : "19:18",
        "동부" : "19:23",
        "가배" : "19:38",
        "율포" : "19:41",
        "탑포" : "19:44",
        "쌍근" : "19:46",
        "비고" : ""
    },

    {
        "번호" : "55",
        "고현" : "19:15",
        "거제" : "19:35",
        "동부" : "19:40",
        "연담" : "19:45",
        "학동" : "19:55",
        "해금강" : "20:05",
        "비고" : "장평,사곡 미경유"
    },
    {
        "번호" : "53",
        "고현" : "19:45",
        "거제" : "20:05",
        "동부" : "20:10",
        "가배" : "20:25",
        "율포" : "20:28",
        "탑포" : "20:31",
        "다포" : "시간 미제공",
        "다대" : "시간 미제공",
        "저구" : "20:48",
        "홍포" : "20:58",
        "비고" : "장평,사곡 미경유\n다포,다대 경유"
    },
    {
        "번호" : "50",
        "고현" : "20:15",
        "장평" : "20:25",
        "사곡" : "20:33",
        "거제" : "20:48",
        "동부" : "20:53",
        "비고" : "오수마을 경유"
    },

    {
        "번호" : "50",
        "고현" : "20:35",
        "장평" : "20:45",
        "사곡" : "20:53",
        "거제" : "21:08",
        "동부" : "21:13",
        "비고" : ""
    },

    {
        "번호" : "52",
        "고현" : "21:15",
        "장평" : "21:25",
        "사곡" : "21:33",
        "거제" : "21:48",
        "동부" : "21:53",
        "가배" : "22:08",
        "율포" : "22:11",
        "탑포" : "22:14",
        "쌍근" : "22:16",
        "비고" : ""
    },

    {
        "번호" : "50",
        "고현" : "21:40",
        "장평" : "21:50",
        "사곡" : "21:58",
        "거제" : "22:13",
        "동부" : "22:18",
        "비고" : ""
    },

    {
        "번호" : "50",
        "고현" : "22:00",
        "장평" : "22:10",
        "사곡" : "22:18",
        "거제" : "22:33",
        "동부" : "22:38",
        "비고" : ""
    }
];
const bus_data_out= [
    {
        "번호": "50",
        "동부": "6:55",
        "거제": "7:00",
        "사곡": "7:17",
        "장평": "7:25",
        "고현": "7:33",
        "비고": "오수마을 경유"
    },

    {
        "번호": "52",
        "쌍근": "6:35",
        "탑포": "6:38",
        "율포": "6:42",
        "가배": "6:47",
        "동부": "7:05",
        "거제": "7:10",
        "사곡": "7:27",
        "장평": "7:35",
        "고현": "7:43",
        "비고": "(등교시)중앙고 운행"
    },

    {
        "번호": "51",
        "부춘": "7:30",
        "동부": "7:37",
        "거제": "7:42",
        "사곡": "7:59",
        "장평": "8:07",
        "고현": "8:15",
        "비고": "해양사 발 오수마을 경유 \n경남아너스빌@(08:05) 경유"
    },

    {
        "번호": "67-1",
        "능포": "6:50",
        "옥림": "시간 미제공",
        "지세포": "7:10",
        "구조라": "7:15",
        "망치": "시간 미제공",
        "양화": "시간 미제공",
        "학동": "7:40",
        "동부": "7:55",
        "거제": "8:00",
        "사곡": "8:17",
        "장평": "8:25",
        "고현": "8:33",
        "비고": "평지-부춘 도로 운행"
    },

    {
        "번호": "53",
        "홍포": "7:10",
        "저구": "7:20",
        "다포": "시간 미제공",
        "다대": "시간 미제공",
        "탑포": "7:40",
        "율포": "7:43",
        "가배": "7:48",
        "동부": "8:00",
        "거제": "8:05",
        "고현": "8:25",
        "비고": "사곡, 장평시내 미경유\n다포,다대 경유"
    },

    {
        "번호": "55",
        "해금강": "7:35",
        "학동": "7:47",
        "연담": "7:57",
        "동부": "8:05",
        "거제": "8:10",
        "고현": "8:30",
        "비고": "사곡, 장평시내 미경유"
    },

    {
        "번호": "52",
        "쌍근": "7:40",
        "탑포": "7:43",
        "율포": "7:47",
        "가배": "7:52",
        "동부": "8:10",
        "거제": "8:15",
        "사곡": "8:32",
        "장평": "8:40",
        "고현": "8:48",
        "비고": ""
    },

    {
        "번호": "50",
        "동부": "8:20",
        "거제": "8:25",
        "사곡": "8:42",
        "장평": "8:50",
        "고현": "8:58",
        "비고": "방학중 운행중지"
    },

    {
        "번호": "51",
        "부춘": "8:20",
        "동부": "8:27",
        "거제": "8:32",
        "사곡": "8:49",
        "장평": "8:57",
        "고현": "9:05",
        "비고": "해양사 발 오수마을 경유"
    },

    {
        "번호": "54-1",
        "여차": "8:20",
        "저구": "8:30",
        "탑포": "8:37",
        "율포": "8:40",
        "가배": "8:45",
        "동부": "9:05",
        "거제": "9:10",
        "고현": "9:30",
        "비고": "사곡, 장평시내 미경유\n다포,다대 경유"
    },


    {
        "번호": "50",
        "동부": "9:25",
        "거제": "9:30",
        "사곡": "9:47",
        "장평": "9:55",
        "고현": "10:03",
        "비고": "오수마을 경유"
    },

    {
        "번호": "67-1",
        "능포": "8:40",
        "옥림": "시간 미제공",
        "지세포": "9:00",
        "구조라": "9:05",
        "망치": "시간 미제공",
        "양화": "시간 미제공",
        "학동": "9:30",
        "동부": "9:45",
        "거제": "9:50",
        "사곡": "10:07",
        "고현": "10:20",
        "비고": "장평시내 미경유\n평지-부춘 도로 운행"
    },

    {
        "번호": "53",
        "홍포": "9:10",
        "저구": "9:20",
        "다포": "시간 미제공",
        "다대": "시간 미제공",
        "탑포": "9:40",
        "율포": "9:43",
        "가배": "9:48",
        "동부": "10:05",
        "거제": "10:10",
        "고현": "10:30",
        "비고": "사곡, 장평시내 미경유\n다포,다대 경유"
    },

    {
        "번호": "50",
        "동부": "10:25",
        "거제": "10:30",
        "사곡": "10:47",
        "장평": "10:55",
        "고현": "11:03",
        "비고": ""
    },

    {
        "번호": "52",
        "쌍근": "10:15",
        "탑포": "10:18",
        "율포": "10:22",
        "가배": "10:27",
        "동부": "10:45",
        "거제": "10:50",
        "사곡": "11:07",
        "고현": "11:20",
        "비고": "장평시내 미경유"
    },

    {
        "번호": "55-1",
        "해금강": "10:20",
        "다대": "시간 미제공",
        "다포": "시간 미제공",
        "저구": "10:30",
        "탑포": "시간 미제공",
        "율포": "시간 미제공",
        "가배": "시간 미제공",
        "동부": "11:05",
        "거제": "11:10",
        "고현": "11:30",
        "비고": "장평,사곡 미경유\n다포,다대 경유"
    },

    {
        "번호": "50",
        "동부": "11:25",
        "거제": "11:30",
        "사곡": "11:47",
        "장평": "11:55",
        "고현": "12:03",
        "비고": "오수마을 경유"
    },

    {
        "번호": "67-1",
        "능포": "10:40",
        "옥림": "시간 미제공",
        "지세포": "11:00",
        "구조라": "11:05",
        "망치": "시간 미제공",
        "양화": "시간 미제공",
        "학동": "11:30",
        "동부": "11:45",
        "거제": "11:50",
        "사곡": "12:07",
        "고현": "12:20",
        "비고": "장평시내 미경유\n평지-부춘 도로 운행"
    },

    {
        "번호": "53",
        "홍포": "11:10",
        "저구": "11:20",
        "다포": "시간 미제공",
        "다대": "시간 미제공",
        "탑포": "11:40",
        "율포": "11:43",
        "가배": "11:48",
        "동부": "12:05",
        "거제": "12:10",
        "고현": "12:30",
        "비고": "사곡, 장평시내 미경유\n다포,다대 경유"
    },

    {
        "번호": "50",
        "동부": "12:25",
        "거제": "12:30",
        "사곡": "12:47",
        "장평": "12:55",
        "고현": "13:03",
        "비고": "오수마을 경유"
    },

    {
        "번호": "52",
        "쌍근": "12:15",
        "탑포": "12:18",
        "율포": "12:22",
        "가배": "12:27",
        "동부": "12:45",
        "거제": "12:50",
        "사곡": "13:07",
        "고현": "13:20",
        "비고": "사곡, 장평시내 미경유"
    },

    {
        "번호": "55",
        "해금강": "12:48",
        "학동": "13:00",
        "연담": "13:10",
        "동부": "13:15",
        "거제": "13:20",
        "고현": "13:40",
        "비고": "사곡, 장평 미경유"
    },

    {
        "번호": "67-1",
        "능포": "12:40",
        "옥림": "시간 미제공",
        "지세포": "13:00",
        "구조라": "13:05",
        "망치": "시간 미제공",
        "양화": "시간 미제공",
        "학동": "13:30",
        "동부": "13:45",
        "거제": "13:50",
        "사곡": "14:07",
        "고현": "14:20",
        "비고": "장평시내 미경유\n평지-부춘 도로 운행"
    },

    {
        "번호": "54-1",
        "여차": "13:20",
        "저구": "13:30",
        "탑포": "13:37",
        "율포": "13:39",
        "가배": "13:47",
        "동부": "14:05",
        "거제": "14:10",
        "고현": "14:30",
        "비고": "사곡, 장평시내 미경유\n다포,다대 경유"
    },
    {
        "번호": "50",
        "동부": "14:25",
        "거제": "14:30",
        "사곡": "14:47",
        "장평": "14:55",
        "고현": "15:03",
        "비고": "오수마을 경유"
    },

    {
        "번호": "52",
        "쌍근": "14:15",
        "탑포": "14:18",
        "율포": "14:22",
        "가배": "14:27",
        "동부": "14:45",
        "거제": "14:50",
        "사곡": "15:07",
        "고현": "15:20",
        "비고": "장평시내 미경유"
    },

    {
        "번호": "55",
        "해금강": "14:48",
        "학동": "15:00",
        "연담": "15:10",
        "동부": "15:15",
        "거제": "15:20",
        "고현": "15:40",
        "비고": "사곡, 장평시내 미경유"
    },

    {
        "번호": "67-1",
        "능포": "14:40",
        "옥림": "시간 미제공",
        "지세포": "15:00",
        "구조라": "15:05",
        "망치": "시간 미제공",
        "양화": "시간 미제공",
        "학동": "15:30",
        "동부": "15:45",
        "거제": "15:50",
        "사곡": "16:07",
        "고현": "16:20",
        "비고": "장평 미경유\n평지-부춘 도로 운행"
    },

    {
        "번호": "53-1",
        "홍포": "15:20",
        "저구": "15:30",
        "다포": "시간 미제공",
        "다대": "시간 미제공",
        "탑포": "15:50",
        "부춘": "15:58",
        "동부": "16:05",
        "거제": "16:10",
        "고현": "16:30",
        "비고": "부춘-탑포도로 경유\n사곡, 장평시내 미경유\n다포,다대 경유"
    },


    {
        "번호": "50",
        "동부": "16:25",
        "거제": "16:30",
        "사곡": "16:47",
        "장평": "16:55",
        "고현": "17:03",
        "비고": "오수마을 경유"
    },

    {
        "번호": "52",
        "쌍근": "16:15",
        "탑포": "16:18",
        "율포": "16:22",
        "가배": "16:27",
        "동부": "16:45",
        "거제": "16:50",
        "사곡": "17:07",
        "고현": "17:20",
        "비고": "장평시내 미경유"
    },

    {
        "번호": "55",
        "해금강": "16:38",
        "학동": "16:50",
        "연담": "17:00",
        "동부": "17:05",
        "거제": "17:10",
        "고현": "17:30",
        "비고": "사곡, 장평시내 미경유"
    },

    {
        "번호": "50",
        "동부": "17:25",
        "거제": "17:30",
        "사곡": "17:47",
        "장평": "17:55",
        "고현": "18:03",
        "비고": "오수마을 경유"
    },

    {
        "번호": "67-1",
        "능포": "16:40",
        "옥림": "시간 미제공",
        "지세포": "17:00",
        "구조라": "17:05",
        "망치": "시간 미제공",
        "양화": "시간 미제공",
        "학동": "17:30",
        "동부": "17:45",
        "거제": "17:50",
        "사곡": "18:07",
        "고현": "18:20",
        "비고": "장평시내 미경유\n평지-부춘 도로 운행"
    },

    {
        "번호": "53",
        "홍포": "17:20",
        "저구": "17:30",
        "탑포": "17:37",
        "율포": "17:41",
        "가배": "17:44",
        "동부": "18:10",
        "거제": "18:15",
        "고현": "18:35",
        "비고": "사곡, 장평시내 미경유"
    },

    {
        "번호": "50",
        "동부": "18:25",
        "거제": "18:30",
        "사곡": "18:47",
        "장평": "18:55",
        "고현": "19:03",
        "비고": ""
    },


    {
        "번호": "52",
        "쌍근": "18:15",
        "탑포": "18:18",
        "율포": "18:22",
        "가배": "18:27",
        "동부": "18:45",
        "거제": "18:50",
        "사곡": "19:07",
        "고현": "19:20",
        "비고": "장평시내 미경유"
    },

    {
        "번호": "55",
        "해금강": "18:48",
        "학동": "19:00",
        "연담": "19:10",
        "동부": "19:15",
        "거제": "19:20",
        "고현": "19:40",
        "비고": "사곡, 장평시내 미경유"
    },

    {
        "번호": "50",
        "동부": "19:30",
        "거제": "19:35",
        "사곡": "19:52",
        "장평": "20:00",
        "고현": "20:08",
        "비고": "오수마을 경유"
    },

    {
        "번호": "67-1",
        "능포": "18:40",
        "옥림": "시간 미제공",
        "지세포": "시간 미제공",
        "구조라": "시간 미제공",
        "망치": "시간 미제공",
        "양화": "시간 미제공",
        "학동": "19:30",
        "동부": "19:45",
        "거제": "19:50",
        "사곡": "20:07",
        "고현": "20:20",
        "비고": "장평시내 미경유\n평지-부춘 도로 운행"
    },

    {
        "번호": "53-1",
        "홍포": "19:30",
        "저구": "19:40",
        "다포": "시간 미제공",
        "다대": "시간 미제공",
        "탑포": "20:00",
        "부춘": "20:08",
        "동부": "20:15",
        "거제": "20:20",
        "고현": "20:40",
        "비고": "부춘-탑포도로 경유\n사곡, 장평시내 미경유\n다포,다대 경유"
    },

    {
        "번호": "55",
        "해금강": "20:05",
        "학동": "20:15",
        "연담": "20:25",
        "동부": "20:30",
        "거제": "20:35",
        "고현": "20:55",
        "비고": "사곡, 장평시내 미경유"
    },

    {
        "번호": "52",
        "쌍근": "20:15",
        "탑포": "20:18",
        "율포": "20:22",
        "가배": "20:27",
        "동부": "20:45",
        "거제": "20:50",
        "사곡": "21:07",
        "고현": "21:20",
        "비고": "장평시내 미경유"
    },

    {
        "번호": "50",
        "동부": "21:05",
        "거제": "21:10",
        "사곡": "21:27",
        "고현": "21:40",
        "비고": "거제자이 경유(21:20)\n장평시내 미경유"
    },

    {
        "번호": "50",
        "동부": "21:25",
        "거제": "21:30",
        "고현": "21:50",
        "비고": "장평시내 미경유"
    },

    {
        "번호": "53-1",
        "홍포": "21:15",
        "저구": "21:25",
        "탑포": "21:32",
        "부춘": "21:40",
        "동부": "21:45",
        "거제": "21:50",
        "고현": "22:10",
        "비고": "대포선창, 근포선창 미경유\n다포, 다대 미경유\n부춘-탑포도로 경유\n장평,사곡 미경유"
    },

    {
        "번호": "50",
        "동부": "22:20",
        "거제": "22:25",
        "고현": "22:45",
        "비고": "장평시내 미경유"
    },

    {
        "번호": "50",
        "동부": "22:40",
        "거제": "22:45",
        "고현": "23:05",
        "비고": "수창 이후 국도변으로 \n터미널 운행"
    },

    {
        "번호": "52",
        "쌍근": "22:20",
        "탑포": "22:23",
        "율포": "22:27",
        "가배": "22:32",
        "동부": "22:50",
        "거제": "22:55",
        "고현": "23:15",
        "비고": "수창 이후 국도변으로 \n터미널 운행"
    }
];

export {busKeys,bus_data_in,bus_data_out};