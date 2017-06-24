const SET_SUN = 'SETSUN'
const TOGGLE_SUN = 'TOGGLESUN'
const SET = 'SET'
// const APPEND = 'APPEND' // future

const setSun = sun => ({ type: SET_SUN, sun })
const toggleSun = () => ({ type: TOGGLE_SUN, sun: false })
const setTimeline = timeline => ({ type: SET, timeline })

export const sunrise = () => (dispatch) => {
  dispatch(setSun(true))
}
export const sundown = () => (dispatch) => {
  dispatch(setSun(false))
}
export const suntoggle = () => (dispatch) => {
  dispatch(toggleSun())
}

const user1 = {
  id: 1,
  date_joined: '2017-02-05 05:10:13.768196+00:00',
  date_of_birth: '1999-11-11 03:00:00+00:00',
  department: '전자통신공학과',
  isActive: false,
  isContributer: false,
  isGraduate: false,
  isRegularMember: true,
  is_admin: false,
  is_staff: false,
  last_name: '16기 와아이',
  phone_number: '010-0000-0000',
  student_number: '2000000000',
  username: 'kswcia',
  image: {
    id: 1,
    src: 'https://cia.kw.ac.kr/media/2462a3f1-9bb5-4758-9cbe-fcf7f33db668.png',
    alt: 'kPanic.png',
  },
}

export const getTimeline = () => (dispatch) => {
  dispatch(setTimeline([
    {
      id: 1,
      author: user1,
      text: '### 여름엠티 수요조사\n\n여름엠티 1차 수요조사 글입니다.\n\n1. 엠티를 언제가든 참가할 것이다.\n\n2. 엠티를 7월에 간다면 참가할 것이다.\n\n3. 엠티를 8월에 간다면 참가할 것이다.\n\n4. 기타\n\n1,2,3번은 번호로 댓글 남겨주시고 4번은 구체적으로 댓글로 남겨주시면 됩니다.\n불참은 댓글 달지 않아도 좋습니다.\n\n**현재 작성일 6/20 화요일 1차 수요조사는 6/25 일요일 자정까지 합니다.**',
      write_date: '2017-06-20T07:03:20.963737Z',
      isBlind: false,
      touch_date: '2017-06-23T13:14:53.579546Z',
      images: [
        {
          id: 2,
          src: 'https://cia.kw.ac.kr/media/20c2603a-013e-4e24-a517-64ecc5e97007.jpg',
          alt: 'aaa.jpg',
        },
        {
          id: 3,
          src: 'https://cia.kw.ac.kr/media/8c061e9e-0478-4772-aef9-ce6899fc7a92.jpg',
          alt: 'bbb.jpg',
        },
        {
          id: 4,
          src: 'https://cia.kw.ac.kr/media/f5dd8ded-efb1-4d6b-9257-802dfbb11d72.jpg',
          alt: 'ccc.jpg',
        },
      ],
      comments: [
        {
          id: 373,
          author: user1,
          text: '내년 2월',
          write_date: '2017-02-05T09:22:35.164895Z',
          recomments: [],
        },
        {
          id: 375,
          author: user1,
          text: '구동게 메인화면에서는 모던동게 링크가 https://cia.kw.ac.kr 로 이어지는데 게시판이나 글로 이동후에는 https://128.134.57.197 로 이어집니다.',
          write_date: '2017-02-05T09:32:11.001298Z',
          recomments: [
            {
              id: 381,
              author: user1,
              text: '왜 하필 터닝메카드죠?',
              write_date: '2017-02-07T14:15:29.397188Z',
              recomments: [],
            },
            {
              id: 382,
              author: user1,
              text: '전 시간 좀 지나니까 적용되던데 다시 시도해보고 기다려보는건 어떤가욤 ㅇㅅㅇ??',
              write_date: '2017-02-07T16:18:24.217215Z',
              recomments: [],
            },
            {
              id: 383,
              author: user1,
              text: '프사는 2메가 제한있어요. 써놓겠습니다.',
              write_date: '2017-02-07T23:53:52.766760Z',
              recomments: [],
            },
          ],
        },
        {
          id: 376,
          author: user1,
          text: 'ㅇㅇㅇㅇㅇㅇ그거 구동게 이미지 안깨지게 하려면 어쩔수 없다.',
          write_date: '2017-02-05T09:32:38.560752Z',
          recomments: [],
        },
      ],
    },
    {
      id: 2,
      author: user1,
      text: '### 여름엠티 수요조사\n\n여름엠티 1차 수요조사 글입니다.\n\n1. 엠티를 언제가든 참가할 것이다.\n\n2. 엠티를 7월에 간다면 참가할 것이다.\n\n3. 엠티를 8월에 간다면 참가할 것이다.\n\n4. 기타\n\n1,2,3번은 번호로 댓글 남겨주시고 4번은 구체적으로 댓글로 남겨주시면 됩니다.\n불참은 댓글 달지 않아도 좋습니다.\n\n**현재 작성일 6/20 화요일 1차 수요조사는 6/25 일요일 자정까지 합니다.**',
      write_date: '2017-06-20T07:03:20.963737Z',
      isBlind: false,
      touch_date: '2017-06-23T13:14:53.579546Z',
      images: [
        {
          id: 2,
          src: 'https://cia.kw.ac.kr/media/20c2603a-013e-4e24-a517-64ecc5e97007.jpg',
          alt: 'aaa.jpg',
        },
        {
          id: 3,
          src: 'https://cia.kw.ac.kr/media/8c061e9e-0478-4772-aef9-ce6899fc7a92.jpg',
          alt: 'bbb.jpg',
        },
        {
          id: 4,
          src: 'https://cia.kw.ac.kr/media/f5dd8ded-efb1-4d6b-9257-802dfbb11d72.jpg',
          alt: 'ccc.jpg',
        },
      ],
      comments: [],
    },
    {
      id: 3,
      author: user1,
      text: '### 여름엠티 수요조사\n\n여름엠티 1차 수요조사 글입니다.\n\n1. 엠티를 언제가든 참가할 것이다.\n\n2. 엠티를 7월에 간다면 참가할 것이다.\n\n3. 엠티를 8월에 간다면 참가할 것이다.\n\n4. 기타\n\n1,2,3번은 번호로 댓글 남겨주시고 4번은 구체적으로 댓글로 남겨주시면 됩니다.\n불참은 댓글 달지 않아도 좋습니다.\n\n**현재 작성일 6/20 화요일 1차 수요조사는 6/25 일요일 자정까지 합니다.**',
      write_date: '2017-06-20T07:03:20.963737Z',
      isBlind: false,
      touch_date: '2017-06-23T13:14:53.579546Z',
      images: [
        {
          id: 2,
          src: 'https://cia.kw.ac.kr/media/20c2603a-013e-4e24-a517-64ecc5e97007.jpg',
          alt: 'aaa.jpg',
        },
        {
          id: 3,
          src: 'https://cia.kw.ac.kr/media/8c061e9e-0478-4772-aef9-ce6899fc7a92.jpg',
          alt: 'bbb.jpg',
        },
        {
          id: 4,
          src: 'https://cia.kw.ac.kr/media/f5dd8ded-efb1-4d6b-9257-802dfbb11d72.jpg',
          alt: 'ccc.jpg',
        },
      ],
      comments: [],
    },
  ]))
  return 'next cur'
}
