import React from 'react'

function Content() {

  const contentItem = [
    {
      "img": "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/19/1019_whatsnew.jpg",
      "title": "블러드시티7",
      "desc": "스페셜 위크"
    },
    {
      "img": "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/18/01.jpg",
      "title": "카카오 선물하기에",
      "desc": "바오패밀리가 떴다!"
    },
    {
      "img": "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/13/whatsnew.jpg",
      "title": "스마트예약",
      "desc": "굿즈#"
    },
    {
      "img": "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/18/06.jpg",
      "title": "푸바오의",
      "desc": "뚠빵 마들렌"
    },
    {
      "img": "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/12/04.jpg",
      "title": "SWEET CAFE OPEN",
      "desc": "필굿 솜카페"
    },
    {
      "img": "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/06/1.png",
      "title": "2023 호러메이즈 리턴즈",
      "desc": "극강의 공포를 체험하라"
    },
    {
      "img": "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/04/06.jpg",
      "title": "더헬스와 함께",
      "desc": "땡스 기빙 파티"
    },
    {
      "img": "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/09/06/06.jpg",
      "title": "감성 충만 콘서트",
      "desc": "Fall in Garden Concert"
    }
  ]
  // 데이터가 하나일땐 [] = array 여러개일땐 [{}] = object 로 작성합니다


  return (
    <>
      <div className='max-w-7xl mx-auto flex flex-wrap justify-between px-[2%]'>
        {
          contentItem.map((e, i) => {
            return (
              <div className='basis-full md:basis-[49%] lg:basis-[23.5%]'>
                <img className='w-full'src={e.img} alt={e.title} title={e.title} aria-label={e.desc} aira-hidden="true" />
                <p className='text-center'>{e.title}</p>
                <p className='text-center'>{e.desc}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

function Content2() {
  return (
    <div>Content</div>
  )
}
export { Content, Content2 }