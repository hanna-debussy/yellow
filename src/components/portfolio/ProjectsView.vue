<template>
  <div class="projects-container">
    <div class="projects-header">
      <span>Projects</span>
    </div>

    <div class="project-box">
      <div class="project">
        <div class="box-header">
          <div class="box-left">
            <div class="box-line"></div>
          </div>
          <div class="box-right">
            <div class="box-round"></div>
            <div class="box-square"></div>
            <div class="box-round"></div>
          </div>
        </div>
        <div class="project-thumbnail">
          <img src="@/assets/images/meeplo_thumbnail.png" alt="meeplo_thumbnail">
        </div>
        <div class="project-intro">
          <div class="project-name">
            MEEPLO
          </div>
          <div class="project-summary">
            모이는 사람들의 출발지를 기반한 중간 지점 추천, 그 곳에서의 맛집을 추천하고 그 때의 추억을 다양한 프레임의 필름 사진으로 남길 수 있는 폐쇄형 SNS
          </div>
        </div>
      </div>
      <div class="project">
        <div class="box-header">
          <div class="box-left">
            <div class="box-line"></div>
          </div>
          <div class="box-right">
            <div class="box-round"></div>
            <div class="box-square"></div>
            <div class="box-round"></div>
          </div>
        </div>
        <div class="project-thumbnail">
          <img src="@/assets/images/wooju_thumbnail.png" alt="wooju_thumbnail">
        </div>
        <div class="project-intro">
          <div class="project-name">
            WooJu
          </div>
          <div class="project-summary">
            빅데이터 분석 기반 전통주 추천 및 관련 커뮤니티, 전통주 검색 서비스
          </div>
        </div>
      </div>
      <div class="project">
        <div class="box-header">
          <div class="box-left">
            <div class="box-line"></div>
          </div>
          <div class="box-right">
            <div class="box-round"></div>
            <div class="box-square"></div>
            <div class="box-round"></div>
          </div>
        </div>
        <div class="project-thumbnail">
          <img src="@/assets/images/init_thumbnail.png" alt="init_thumbnail">
        </div>
        <div class="project-intro">
          <div class="project-name">
            inIT
          </div>
          <div class="project-summary">
            WebRTC를 이용해 자신의 면접 연습을 녹화, 다시 보기를 하면서 체크리스트를 통한 자기 분석 등 면접을 연습할 수 있는 개발자 취준생 면접 연습 서비스 웹 사이트
          </div>
        </div>
      </div>
    </div>

    <teleport to='body'>
      <div class="project-modal">
        <div class="box-shadow"></div>
        <div class="main-box">
          <!-- contents -->
          <MeeploView v-if="openModal" />
        </div>
      </div>

    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MeeploView from './projects/MeeploView.vue';

const openModal = ref(true)
</script>

<style>

</style>