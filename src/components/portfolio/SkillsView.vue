<template>
  <div class="skills-container">
    <div class="skills-header">
      <span>Skills</span>
    </div>

    <div class="skills">
      <div class="skills-line first">
        <!-- HTML, JS, CSS -->
        <div class="skills-box first">
          <div class="skills-shadow"></div>
          <div class="skills-main">
            <div class="skills-title">
              <div class="skills-name">
                HTML, JS, CSS
              </div>
              <div class="skills-img">
                <img src="@/assets/images/html-js-css.png" alt="html-js-css">
              </div>
            </div>
            <div class="skills-content">
              <div>- CSS와 JavaScript에 능숙합니다.</div>
              <div>- JavaScript만을 이용한 동적 화면을 구현할 수 있습니다.</div>
              <div>- 사용자 경험과 디자인을 고려하여 다양한 웹 사이트를 구현했었습니다.</div>
            </div>
          </div>
        </div>

        <!-- Vue.js -->
        <div class="skills-box second">
          <div class="skills-shadow"></div>
          <div class="skills-main">
            <div class="skills-title">
              <div class="skills-name">
                Vue.js
              </div>
              <div class="skills-img">
                <img src="@/assets/images/vue.png" alt="vue">
              </div>
            </div>
            <div class="skills-content">
              <div>- Vue2와 Vue3를 모두 다룰 줄 압니다.</div>
              <div>- Composition API와 setup script를 통한 로직을 구현할 수 있습니다.</div>
              <div>- 다양한 프로젝트 경험을 통해 상태관리와 협업이 가능합니다.</div>
            </div>
          </div>
        </div>

        <!-- React.js -->
        <div class="skills-box third">
          <div class="skills-shadow"></div>
          <div class="skills-main">
            <div class="skills-title">
              <div class="skills-name">
                React.js
              </div>
              <div class="skills-img">
                <img src="@/assets/images/react.svg" alt="react">
              </div>
            </div>
            <div class="skills-content">
              <div>- JavScript뿐만 아니라 TypeScript를 통한 개발도 가능합니다.</div>
              <div>- 다양한 Hook을 이용해 로직을 구현할 수 있습니다.</div>
              <!-- <div>- ?</div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="skills-line second">
        <!-- React Native -->
        <div class="skills-box fourth">
          <div class="skills-shadow"></div>
          <div class="skills-main">
            <div class="skills-title">
              <div class="skills-name">
                React Native
              </div>
              <div class="skills-img">
                <img src="@/assets/images/react-native.svg" alt="react-native">
              </div>
            </div>
            <div class="skills-content">
              <div>- 팀 프로젝트를 통해 실제 어플리케이션을 출시한 경험이 있습니다.</div>
              <div>- Redux Toolkit, Navigation을 다룰 수 있습니다.</div>
              <div>- WebView를 다룰 줄 알고 RN과의 통신을 어떻게 하는지 알고 있습니다.</div>
            </div>
          </div>
        </div>

        <!-- .etc -->
        <div class="skills-box fifth">
          <div class="skills-shadow"></div>
          <div class="skills-main">
            <div class="skills-title">
              <div class="skills-name">
                기타
              </div>
            </div>
            <div class="skills-imgs">
              <div class="imgs-line">
                <img src="@/assets/images/django.jpg" alt="django">
                <img src="@/assets/images/typescript.png" alt="typescript">
                <img src="@/assets/images/git.png" alt="git">
              </div>
              <div class="imgs-line">
                <img src="@/assets/images/github.png" alt="github">
                <img src="@/assets/images/figma.png" alt="figma">
                <img src="@/assets/images/jira.png" alt="jira">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>

</style>