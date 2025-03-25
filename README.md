![Image](https://github.com/user-attachments/assets/25b65410-68ad-4a56-8e66-0cb641b9093e)

<br/>

## 🔖 목차  
> **프로젝트 개요**
> 
> 📌 [①  프로젝트 소개](#-프로젝트-소개)
> 
> 📌 [②  개발 동기](#-개발-동기)
> 
> 📌 [③  개발 환경](#-개발-환경)

---

>  **UI & 기능 소개**
>
> 📌 [④  화면 구성](#-화면-구성)
> 
> 📌 [⑤  컴포넌트 구성](#-컴포넌트-구성)

<br/>

# 📄 프로젝트 소개

####  "VELLURE"는 "Vogue Korea" 라는 웹 사이트를 리액트로 구현한 웹 사이트입니다.

<br/>

# 🐈‍⬛ 개발 동기

####  "Vogue Korea" 웹사이트에서 동일한 요소가 반복되는 것을 보고
####  컴포넌트 단위로 나누는 것이 유지보수에 좋을 것 같아 개발하게 되었습니다.

<br/>

# 🖥 개발 환경

<div align="center">
 <h2> 프로그래밍 언어 </h2>
  <img src="https://img.shields.io/badge/html5-F0A228.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge" />
  <img src="https://img.shields.io/badge/css-%231572B6.svg?&style=for-the-badge&logo=css&logoColor=white" alt="CSS Badge" />
  <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Badge" />
  <img src="https://img.shields.io/badge/react%20hooks-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white" alt="React Hooks Badge" />

  <h2> 개발 도구 </h2> 
  <img src="https://img.shields.io/badge/visual%20studio%20code-%23007ACC.svg?&style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />

  <h2> 버전 관리 </h2> 
  <img src="https://img.shields.io/badge/git-%23F05032.svg?&style=for-the-badge&logo=git&logoColor=white" alt="git Badge" />
  <img src="https://img.shields.io/badge/github-%23181717.svg?&style=for-the-badge&logo=github&logoColor=white" alt="github Badge" />

  <h2> 라이브러리 </h2>
  
  <img src="https://img.shields.io/badge/react%20router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router Badge" />
  <img src="https://img.shields.io/badge/swiper-50c7d7?style=for-the-badge&logo=swiper&logoColor=white" alt="Swiper Badge" />
  
</div>

<br/>

# 📰 화면 구성

<div align="center">
  <table>
    <tr>
     <th> MAIN </th>
     <th> CATEGORY </th>
    </tr>
    <tr>
      <td> <img src="https://github.com/user-attachments/assets/79f47acc-f361-4cfa-80db-5020fd737973"/> </td>
      <td><img src="https://github.com/user-attachments/assets/1dfa0608-03c8-4773-bec2-c1f27e8521d8"/></td>
    </tr>
  </table>

  <h2> 반응형 </h2>
  <table>
    <tr>
     <th> MAIN </th>
     <th> CATEGORY </th>
    </tr>
    <tr>
      <td> <img src="https://github.com/user-attachments/assets/4bd0191a-2bd4-4811-8f7c-c3e4e30aad1f"/> </td>
      <td><img src="https://github.com/user-attachments/assets/111ab6f3-bbd9-4445-8d98-0141d8e33368"/></td>
    </tr>
  </table>
</div>

<br/>
  
</div>

<br/>

# ⚙ 컴포넌트 구성

<h2> 📌 메인 페이지 </h2>
<div align="center">
  <table>
    <tr>
      <th>컴포넌트</th>
      <th>Props</th>
      <th>재사용 횟수</th>
      <th>역할</th>
    </tr>
    <tr>
      <td>Header</td>
      <td> type(= main, category) </td>
      <td> 2회</td>
      <td> main, category 페이지 헤더 </td>
    </tr>
    <tr>
      <td>Carosel</td>
      <td> x </td>
      <td> 1회 </td>
      <td> main에 배치되는 큰 이미지 관리 </td>
    </tr>
    <tr>
      <td>Stories</td>
      <td> title(= category 제목), <br/> category <br/> (= category 서브 제목) </td>
      <td> 4회 </td>
      <td> SubPhoto, BigPhoto 컴포넌트 배치 </td>
    </tr>
    <tr>
      <td>BestStories</td>
      <td> x </td>
      <td> 1회 </td>
      <td> SubPhoto 컴포넌트 Swiper 사용하여 배치 </td>
    </tr>
     <tr>
      <td>GridNews</td>
      <td> title(= category 제목) </td>
      <td> 3회 </td>
      <td> SubPhoto 컴포넌트 가로로 나열 </td>
    </tr>
    <tr>
      <td>PeopleNow</td>
      <td> x </td>
      <td> 1회 </td>
      <td> BigPhoto 컴포넌트 가로로 나열 </td>
    </tr>
    <tr>
      <td>Latest</td>
      <td> x </td>
      <td> 1회 </td>
      <td> SubPhoto 컴포넌트 그리드로 배치, 오른쪽 요소 sticky로 광고 배치 </td>
    </tr>
    <tr>
      <td>Footer</td>
      <td> x </td>
      <td> 2회 </td>
      <td> main, category 페이지 footer </td>
    </tr>
  </table>
</div>

  ```ruby
  <div className="mainPage">
        {/* 헤더 */}
        <Header type="main" />

        {/* 메인 이미지 */}
        <Carosel />

        <div className="backColor">
          {/* Today’s Stories */}
          <Stories title="TODAY’S STORIES" />

          {/* Best Stories */}
          <BestStories />
        </div>

        {/* Must Read */}
        <GridNews title="MUST READ" />

        {/* People Now */}
        <PeopleNow />

        {/* Fashion */}
        <Stories title="FASHION" />

        {/* Beauty */}
        <Stories title="BEAUTY" />

        {/* Life Style */}
        <GridNews title="LIFESTYLE" />

        {/* Culture */}
        <GridNews title="CULTURE" />

        {/* Latest Stories */}
        <Latest />

        {/* footer */}
        <Footer />
  </div>
  ```

<br/>

<h2> 📌 게시글 </h2>
<div align="center">
  <table>
    <tr>
      <th>컴포넌트</th>
      <th>Props</th>
      <th>재사용 횟수</th>
      <th>역할</th>
    </tr>
    <tr>
      <td>BigPhoto</td>
      <td> className{= css 제어하기 위함}, <br/> bigImgInfo(= 데이터) </td>
      <td> 3회 </td>
      <td> 이미지와 이미지 안의 데이터 정보 배치 </td>
    </tr>
    <tr>
      <td>Subphoto</td>
      <td> className(= css 제어하기 위함), <br/> subData(= 데이터) </td>
      <td> 7회 </td>
      <td> 이미지와 이미지 아래에 데이터 정보 배치, className을 통해 반응형 제어 </td>
    </tr>
  </table>
</div>

  ```ruby
  <BigPhoto className="todayImage" bigImgInfo={bigImgInfo} />
  <div className="subPhotosContainer">
    <Subphoto className="todayBox" subData={subData} />
  </div>
  ```

<br/>

<h2> 📌 Hook 활용 및 컴포넌트 요약 </h2>
<h3> 🌟 Header </h3>
<div align="center">
  <table>
    <tr>
      <th>컴포넌트</th>
      <th>Props</th>
      <th>재사용 횟수</th>
      <th>주요 기능</th>
    </tr>
    <tr>
      <td>Header</td>
      <td> type(= main, category) </td>
      <td> 2회</td>
      <td> hook 활용하여 상태 및 lifecycle 관리 </td>
    </tr>
  </table>
</div>

  ```ruby
  // React hook을 활용한 상태 관리

  // 화면 크기 상태 -> 반응형일 때 디자인 통일을 위함
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 토글 안 내용
  const [toggle, setToggle] = useState(false);

  // 토글 안 카테고리 관련 상태
  const [activeCategory, setActiveCategory] = useState("FASHION");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // 화면 크기 업데이트
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // 반응형 통일시키기
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  {windowWidth < 850 || type === "main" ? (
        <>
          {/* type 이 main 이거나 850px일 때 디자인 통일 */}

          {/* 카테고리의 경우 React Router의 `Link` 컴포넌트를 사용-> 페이지 내에서 각 카테고리로 이동 */}
          <Link to="/video">
            VIDEO
          </Link>

        </>
      ) : (
        <>
          {/* type 이 category 일 때 헤더 구조 별도 설정 */}
        </>
      )
  )}
  ```

<br/>

<h3> 🌟 Stories </h3>
<div align="center">
  <table>
    <tr>
      <th>컴포넌트</th>
      <th>Props</th>
      <th>재사용 횟수</th>
      <th>주요 기능</th>
    </tr>
   <tr>
      <td>Stories</td>
      <td> title(= category 제목), category(= category 서브 제목) </td>
      <td> 4회 </td>
      <td> 조건에 따라 SubPhoto, BigPhoto 컴포넌트 배치 </td>
    </tr>
  </table>
</div>

  ```ruby
  <div className="PhotosContainer">
       {(조건1) || (조건2) ? (
         <>
           <BigPhoto />
           <Subphoto />
         </>
       ) : (
         <>
           <Subphoto />
           <BigPhoto />
         </>  
       )}
     </div>
   </div>
  ```

<br/>

<h3> 🌟 BestStories </h3>
<div align="center">
  <table>
    <tr>
      <th>컴포넌트</th>
      <th>Props</th>
      <th>재사용 횟수</th>
      <th>주요 기능</th>
    </tr>
    <tr>
      <td>BestStories</td>
      <td> x </td>
      <td> 1회 </td>
      <td> Swiper를 활용해 슬라이드 형식으로 이미지 나열 </td>
    </tr>
  </table>
</div>

  ```ruby
  {/* Swiper 활용하여 슬라이드 형식으로 이미지 나열 */}
  <Swiper
    modules={[Navigation]}
    spaceBetween={16}
    slidesPerView={4}
    slidesPerGroup={4}
    breakpoints={{
      1024: {
        slidesPerGroup: 4,
      },
      768: {
        slidesPerGroup: 3,
      },
      500: {
        slidesPerGroup: 2,
      },
    }}
    navigation
  >
    {bestPhotos.map((bestData, index) => (
      <SwiperSlide key={index}>
        <Subphoto className="bestBox" subData={bestData} />
      </SwiperSlide>
    ))}
  </Swiper>
  ```

<br/>
