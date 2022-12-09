<template>
  <div class="project-content">
    <div class="modal-carousel">
      <!-- first page -->
      <div class="title project-page">
        <div class="intros">
          <div class="logo">
            <img src="@/assets/images/meeplo/meeplo_logo.png" alt="meeplo_logo">
          </div>
          <div class="project-name">
            <div class="en">MEEPLO</div>
            <div class="kr">(미플로)</div>
          </div>
          <div class="summary">
            사람들의 중간 지점과 맛집을 추천 받고<br />추억을 공유할 수 있는 폐쇄형 SNS 어플리케이션
          </div>
        </div>
        <div class="intro-thumbnail">
          <div class="thumb1">
            <img src="@/assets/images/meeplo/meeplo1.png" alt="meeplo1">
          </div>
          <div class="thumb2">
            <img src="@/assets/images/meeplo/meeplo2.png" alt="meeplo2">
          </div>
        </div>
      </div>

      <!-- second page -->
      <div class="abstract project-page">
        <div class="header">
          <div class="small-logo">
            <img src="@/assets/images/meeplo/meeplo_logo.png" alt="meeplo_logo">
          </div>
          <div class="small-title">
            MEEPLO
          </div>
        </div>

        <div class="project-inner">
          <div class="sample-img">
            <img src="@/assets/images/meeplo/meeplo3.png" alt="meeplo3">
          </div>

          <div class="abstract-contents">
            <div class="first">
              <div class="header">
                소속
              </div>
              <div class="content">
                삼성 청년 소프트웨어 아카데미
              </div>
            </div>
            <div class="second">
              <div class="header">
                기간
              </div>
              <div class="content">
                2022.10 - 2022.11, 6주 간
              </div>
              <div class="header">
                인원
              </div>
              <div class="content">
                6명 (백엔드 3명, 프론트엔드 3명)
              </div>
            </div>
            <div class="third">
              <div class="header">
                내용
              </div>
              <div class="content">
                그룹의 약속을 잡아 일정을 관리하고, 약속을 잡을 때 만나는 사람들의 중간 지점과 그곳의 맛집을 추천합니다. 또한 약속에 대한 기록을 필름 사진으로 남길 수 있는 소규모 폐쇄 sns
                어플리케이션입니다.
              </div>
            </div>
            <div class="fourth">
              <div class="header">
                역할
              </div>
              <div class="content">
                프론트엔드 엔지니어 (프론트엔드 기여도 30%)<br />UI/UX 기획 및 디자인 총괄 담당
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- third page -->
      <div class="features project-page">
        <div class="header">
          <div class="small-logo">
            <img src="@/assets/images/meeplo/meeplo_logo.png" alt="meeplo_logo">
          </div>
          <div class="small-title">
            MEEPLO
          </div>
        </div>

        <div class="page-title">
          주요 기능
        </div>

        <div class="feature">
          <div class="thumb4">
            <img src="@/assets/images/meeplo/meeplo4.png" alt="meeplo4">
          </div>
          <div class="explanation">
            모임을 만들고 사람들을 초대해<br />모임에 대한 약속을 만들 수 있음
          </div>
        </div>
        <div class="feature">
          <div class="thumb4">
            <img src="@/assets/images/meeplo/meeplo5.png" alt="meeplo5">
          </div>
          <div class="explanation">
            약속에 참가한 사람들의 출발지에 따른<br />중간 지점을 추천하고 맛집을 알려줌
          </div>
        </div>
        <div class="feature">
          <div class="thumb4">
            <img src="@/assets/images/meeplo/meeplo6.png" alt="meeplo6">
          </div>
          <div class="explanation">
            약속이 끝나면 다양한 필름 사진 형태로<br />사진을 남기고 댓글을 쓸 수 있음
          </div>
        </div>
      </div>

      <!-- fourth page -->
      <div class="works project-page">
        <div class="header">
          <div class="small-logo">
            <img src="@/assets/images/meeplo/meeplo_logo.png" alt="meeplo_logo">
          </div>
          <div class="small-title">
            MEEPLO
          </div>
        </div>

        <div class="page-title">
          업무
        </div>

        <div class="works-section">
          <div class="work">
            <div class="heading1 heading">
              <span>
                1. UI/UX 기획 및 디자인 총괄, 와이어 프레임 설계
              </span>
              <div class="heading2 heading">
                <span>
                  - Figma를 이용한 디자인과 UI/UX 설계
                </span>
                <div class="heading3 heading">
                  > 팀원들의 다양한 의견을 수렴해 주제에 맞는 디자인과 UI/UX를 설계
                </div>
              </div>
            </div>

          </div>
          <div class="work">
            <div class="heading1 heading">
              <span>
                2. ‘추억’ 관련 기능
              </span>
              <div class="heading2 heading">
                <span>
                  - ‘추억’ CRUD 기능 구현
                </span>
                <div class="heading3 heading">
                  > 그룹과 그룹에 종속된 약속을 axios로 불러오고 그 약속에 대한 추억 사진을 다양한 형태로 남길 수 있게 구현
                </div>
              </div>

              <div class="heading2 heading">
                <span>
                  - 사진 편집을 위한 WebView 구현
                </span>
                <div class="heading3 heading">
                  > WebView에서 HTML과 JavaScript를 통한 필름 사진 이미지 제작
                </div>
                <div class="heading3 heading">
                  > WebView 통신을 위한 이미지 -> base64 -> ArrayBuffer -> Blob 으로의 변환 등 멀티미디어 파일 처리 기능 담당
                </div>
              </div>

              <div class="heading2 heading">
                <span>
                  - 사진 뒷면에 다양한 폰트의 댓글을 남길 수 있는 기능 구현
                </span>
                <div class="heading3 heading">
                  > 실제로 뒤집는 듯한 화면 구현으로 사진 뒷면을 볼 수 있고, 그곳에 다양한 폰트와 기울기로 댓글을 손글씨처럼 남길 수 있게 구현
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="thumbnail-section">
          <div class="thumbnail-img">
            <img src="@/assets/images/meeplo/meeplo7.png" alt="meeplo7">
          </div>
          <div class="thumbnail-img">
            <img src="@/assets/images/meeplo/meeplo8.png" alt="meeplo8">
          </div>
        </div>
      </div>

      <!-- fifth page -->
      <div class="result project-page">
        <div class="header">
          <div class="small-logo">
            <img src="@/assets/images/meeplo/meeplo_logo.png" alt="meeplo_logo">
          </div>
          <div class="small-title">
            MEEPLO
          </div>
        </div>

        <div class="page-title">
          성과
        </div>
        <div class="achieve">
          <div class="content">
            SSAFY 자율 프로젝트 우수상 수상
          </div>
          <div class="content">
            구글 플레이스토어에 어플리케이션 출시
          </div>
        </div>

        <div class="page-title">
          배운 점
        </div>
        <div class="learned">
          <div class="content">
            프론트엔드 팀원 전부 React Native에 대한 지식이 거의 없는 상태에서 4주 간 개발을 해야 했습니다. 그래서 각자 공부해온 것들을 간단한 브리핑을 통해 공유하고, Merge
            Request에서 코드 리뷰를 하고 참고하여 리팩토링을 하는 등 협업을 통해 모두가 성장할 수 있었던 소중한 기회였습니다.
          </div>
          <div class="content">
            멀티미디어를 프론트엔드에서 다룰 때 형태가 변환되는 흐름을 알게 되었습니다. WebView와 React Native 간에는 String 형태만을 통신할 수 있어서, 고심한 결과 HTML에서
            <canvas />로 콜라주한 사진을 base64로 변환하여 RN으로 보낸 후 그곳에서 ArrayBuffer로 만들고 Blob 타입으로 변환하여 S3에 최종 업로드하는 식으로 해결하였습니다.
          </div>
          <div class="content">
            실사용이 가능한 어플리케이션을 전제로 구상했기 때문에, 사용자가 좀더 이용하기 쉬운 UI/UX에 대해 고찰해보는 시간을 가졌습니다. 다양한 사진과 여러 그룹/약속을 노출시켜야 해서, 다양한
            정보가
            한눈에 들어오면서도 사용 플로우에 영향을 미치지 않게 제작하였습니다. 또한 사용자가 마주칠 수 있는 다양한 Edge Case들을 찾아내면서 최대한 빈 화면이나 에러 화면을 마주치지 않게 빈틈없는
            어플리케이션을 만들기 위해 노력하였습니다.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style>

</style>