// 이 파일은 scripts/update_posts.py가 고칩니다. summary(요약)는 직접 고쳐도 됩니다.
const POSTS = [
  {
    "id": "224417122633",
    "title": "<코알라, 산불이야!>",
    "category": "초등학교 1학년 수업",
    "date": "2026-09-19",
    "summary": "호주에 사는 낯선 동물 친구들의 실제 사진을 함께 보며 책에 대한 흥미를 높이고, 어휘를 익혔습니다.",
    "thumb": "images/posts/224417122633.png",
    "link": "https://blog.naver.com/hanabee114/224417122633"
  },
  {
    "id": "224412891384",
    "title": "<지식 탐정단 헌터구리스 1>",
    "category": "초등학교 4학년 수업",
    "date": "2026-09-15",
    "summary": "우주와 관련된 어휘를 몸짓으로 표현하는 퀴즈로 익혔습니다. 스릴 있고 기억에 오래 남는 시간이었습니다.",
    "thumb": "images/posts/224412891384.png",
    "link": "https://blog.naver.com/hanabee114/224412891384"
  },
  {
    "id": "224411775499",
    "title": "<그 여자네 집>, <세상에 단 한 권뿐인 시집>",
    "category": "중학교 수업",
    "date": "2026-09-14",
    "summary": "박완서의 단편소설 「그 여자네 집」을 읽으며 역사의 흐름 속에서 훼손된 평범한 사람들의 삶을 살펴보았습니다.",
    "thumb": "images/posts/224411775499.png",
    "link": "https://blog.naver.com/hanabee114/224411775499"
  },
  {
    "id": "224408646828",
    "title": "<박돌의 죽음> 그리고 <소음 공해>",
    "category": "중학교 수업",
    "date": "2026-09-11",
    "summary": "최서해의 「박돌의 죽음」을 통해 일제 강점기 하층민의 삶과 빈궁 문학을 배웠습니다.",
    "thumb": "images/posts/224408646828.png",
    "link": "https://blog.naver.com/hanabee114/224408646828"
  },
  {
    "id": "224407312334",
    "title": "<사자마트>- 편견과 선입견",
    "category": "초등학교 1학년 수업",
    "date": "2026-09-10",
    "summary": "외모 때문에 오해받는 ‘사자 씨’의 이야기로 편견과 선입견에 대해 생각해 보았습니다.",
    "thumb": "images/posts/224407312334.png",
    "link": "https://blog.naver.com/hanabee114/224407312334"
  },
  {
    "id": "224406401555",
    "title": "한국사 봄",
    "category": "초등학교 5학년 수업",
    "date": "2026-09-09",
    "summary": "흥선 대원군의 집권부터 대한 제국 선포까지, 원인과 결과가 드러나게 준비한 자료로 초5 눈높이에 맞춰 배웠습니다.",
    "thumb": "images/posts/224406401555.png",
    "link": "https://blog.naver.com/hanabee114/224406401555"
  },
  {
    "id": "224405311503",
    "title": "수업시간에 한 번 배운 어휘, 다시 만나게 합니다",
    "category": "114동 한우리의 차별점",
    "date": "2026-09-08",
    "summary": "한 번 익힌 단어를 다른 방식의 문제로 여러 번 다시 만나게 하여 어휘가 오래 남도록 합니다.",
    "thumb": "images/posts/224405311503.png",
    "link": "https://blog.naver.com/hanabee114/224405311503"
  },
  {
    "id": "224405296294",
    "title": "숙제에도 이유를 설명해 줍니다.",
    "category": "114동 한우리의 차별점",
    "date": "2026-09-08",
    "summary": "알림장에 숙제가 왜 필요한지, 어떻게 풀어야 하는지까지 적어 보냅니다.",
    "thumb": "images/posts/224405296294.png",
    "link": "https://blog.naver.com/hanabee114/224405296294"
  },
  {
    "id": "224405292706",
    "title": "책을 펼치기 전, 질문부터 건넵니다.",
    "category": "114동 한우리의 차별점",
    "date": "2026-09-08",
    "summary": "“이번 책은 이렇게 읽어 오세요” 카드로 생각의 실마리를 건넨 뒤 책을 펼치게 합니다.",
    "thumb": "images/posts/224405292706.png",
    "link": "https://blog.naver.com/hanabee114/224405292706"
  },
  {
    "id": "224405275594",
    "title": "114동 한우리교실 교사의 피드백",
    "category": "114동 한우리의 차별점",
    "date": "2026-09-08",
    "summary": "매 수업이 끝나면 아이 한 명 한 명에 대한 자세한 피드백을 전합니다.",
    "thumb": "images/posts/224405275594.png",
    "link": "https://blog.naver.com/hanabee114/224405275594"
  },
  {
    "id": "224405108421",
    "title": "9월 1차시 관찰 탐구 보고서 쓰기 수업",
    "category": "초등학교 4학년 수업",
    "date": "2026-09-08",
    "summary": "정보 중심의 책은 퀴즈 대회로 꼼꼼히 읽는 습관을 들이고, 관찰 탐구 보고서 쓰기로 이어 갔습니다.",
    "thumb": "images/posts/224405108421.png",
    "link": "https://blog.naver.com/hanabee114/224405108421"
  }
];
