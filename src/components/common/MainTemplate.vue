<template>
  <div class="yellow-bg">
    <div class="main-container" ref="main">
      <div class="menu-container">
        <div class="main-menu">
          <div class="name">
            프론트엔드 엔지니어 <span class="name-bold">장한나</span>
          </div>
          <div class="menus">
            <div class="menu-content" @click="linkTo('Home')">
              Home
            </div>
            <div class="menu-content" @click="linkTo('Profile')">
              Profile
            </div>
            <div class="menu-content" @click="linkTo('Skills')">
              Skills
            </div>
            <div class="menu-content">
              Projects
            </div>
            <div class="menu-content">
              Playground
            </div>
          </div>

        </div>
        <div class="menu-shadow"></div>
      </div>

      <!-- container -->
      <div class="section" ref="section">
        <div class="home container">
          <div class="introduction">
            <div class="intro-slogan">
              늘 배우고픈 프론트엔드 엔지니어
            </div>
            <div class="intro-name">
              장한나
            </div>
            <div class="intro-portfolio">
              포트폴리오
            </div>
            <div class="intro-content">
              안녕하세요! <br />
              1년 6개월 간 열심히 달려온 신입 개발자입니다. <br />
              짧은 기간이지만 누구보다 성장의 기울기는 가파르다고 자신할 수 있습니다. <br />
              새로운 기술, 새로운 언어를 배우는 걸 매우 즐겨합니다. 그리고 맡은 바는 반드시 해내는 끈기와, 다같이 성장하는 협업을 중요시하는 개발자입니다.

            </div>
          </div>
          <div class="profile-image">
            <div class="double-box">
              <div class="box-shadow">
              </div>
              <div class="main-box">
                <div>
                  <img src="@/assets/images/arprofile.png" alt="profile-image">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profile container">
          <ProfileView />
        </div>
        <div class="skills container">
          <SkillsView />
        </div>
        <div class="projects container">
          <ProjectsView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProfileView from '../portfolio/ProfileView.vue';
import SkillsView from '../portfolio/SkillsView.vue';
import ProjectsView from '../portfolio/ProjectsView.vue';


const viewHeight = window.innerHeight
const section = ref<HTMLElement>()
const main = ref<HTMLElement>()

const linkTo = (target: string) => {
  switch (target) {
    case "Home":
      main.value?.scrollTo(0, 0)
      break
    case "Profile":
      main.value?.scrollTo(0, viewHeight - 100)
      break
    case "Skills":
      main.value?.scrollTo(0, viewHeight * 2 - 100)
      break
    case "Projects":
      main.value?.scrollTo(0, 0)
      break
    case "Playground":
      main.value?.scrollTo(0, 0)
      break
  }
}

</script>

<style>

</style>