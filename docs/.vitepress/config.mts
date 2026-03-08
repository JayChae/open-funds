import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenSats 펀딩 가이드',
  description: 'OpenSats 펀딩 신청을 위한 리서치 및 전략 가이드',

  // GitHub Pages 배포 시 레포 이름에 맞게 설정
  // 예: https://<user>.github.io/opensats/
  base: '/open-funds/',

  lastUpdated: false,

  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      title: 'OpenSats 펀딩 가이드',
      description: 'OpenSats 펀딩 신청을 위한 리서치 및 전략 가이드',
      themeConfig: {
        nav: [
          { text: '홈', link: '/' },
          { text: 'OpenSats 정보', link: '/opensats/mission' },
          { text: '신청 가이드', link: '/guide/how-to-apply' },
        ],
        sidebar: {
          '/opensats/': [
            {
              text: 'OpenSats 소개',
              items: [
                { text: '사명', link: '/opensats/mission' },
                { text: '지원금 신청', link: '/opensats/apply' },
                { text: '지원금 선정 절차', link: '/opensats/grant-selection' },
              ]
            },
            {
              text: 'FAQ',
              items: [
                { text: '일반 FAQ', link: '/opensats/faq' },
                { text: '신청 FAQ', link: '/opensats/application-faq' },
              ]
            },
            {
              text: '연간 리뷰',
              items: [
                { text: '2025 연간 리뷰', link: '/opensats/reviews/2025' },
                { text: '2024 연간 리뷰', link: '/opensats/reviews/2024' },
              ]
            }
          ],
          '/guide/': [
            {
              text: '신청 준비',
              items: [
                { text: '신청 준비 가이드', link: '/guide/how-to-apply' },
                { text: '합격 공략 분석', link: '/guide/strategy-guide' },
              ]
            }
          ]
        },
        outlineTitle: '이 페이지에서',
        docFooter: {
          prev: '이전',
          next: '다음'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'OpenSats Funding Guide',
      description: 'Research and strategy guide for OpenSats funding applications',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'OpenSats Info', link: '/en/opensats/mission' },
        ],
        sidebar: {
          '/en/opensats/': [
            {
              text: 'About OpenSats',
              items: [
                { text: 'Mission', link: '/en/opensats/mission' },
                { text: 'Apply for Funding', link: '/en/opensats/apply' },
                { text: 'Grant Selection', link: '/en/opensats/grant-selection' },
              ]
            },
            {
              text: 'FAQ',
              items: [
                { text: 'General FAQ', link: '/en/opensats/faq' },
                { text: 'Application FAQ', link: '/en/opensats/application-faq' },
              ]
            },
            {
              text: 'Annual Reviews',
              items: [
                { text: '2025 Year in Review', link: '/en/opensats/reviews/2025' },
                { text: '2024 Year in Review', link: '/en/opensats/reviews/2024' },
              ]
            }
          ]
        },
        outlineTitle: 'On this page',
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        }
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})
