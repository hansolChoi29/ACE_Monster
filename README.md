# ACE_Monster

"ACE_Monster"는 인터뷰 형식의 AI 챗봇 프로젝트로, 사용자가 질문 카테고리를 클릭하면 AI가 해당 질문에 대해 답변하는 형식으로 구성됩니다. 이 프로젝트는 리액트와 스프링을 활용하여 개발됩니다.

개발기간: 5개월

패키지 매니저: pnpm

# 기술 스택 


### **프론트엔드**
 ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) 
 ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) 
 ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) 
 ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-000000?style=for-the-badge&logo=framer&logoColor=white) 
 ![Zustand](https://img.shields.io/badge/Zustand-ffdf00?style=for-the-badge&logo=zustand&logoColor=black) 

### **백엔드**
 ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white) 
 ![OpenAI](https://img.shields.io/badge/OpenAI-000000?style=for-the-badge&logo=openai&logoColor=white) 
 ![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=spring&logoColor=white) 

### **코드 품질 관리**
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) 


# 프로젝트 목표
- 인터뷰형 AI 챗봇: 사용자가 카테고리별 질문을 선택하고, 챗봇이 그에 대한 답변을 제공하는 형태의 시스템을 구현합니다.

- 프론트엔드: React를 사용하여 사용자가 직관적으로 질문을 선택하고 대화할 수 있는 인터페이스를 제공합니다.

- 백엔드: Spring Boot로 API 서버를 구축하여 질문에 대한 답변을 OpenAI GPT-3 API를 통해 생성합니다.

- AI 피드백: 사용자가 답변을 입력하면, AI가 그 답변을 분석하고 피드백을 제공할 수 있는 기능을 추가합니다.

# 기능
- 질문 카테고리: 미리보기 형태로 다양한 카테고리별 질문을 제공하고, 사용자가 선택하여 챗봇과 인터뷰를 진행합니다.

- AI 기반 답변 생성: 사용자의 질문에 대한 적절한 답변을 OpenAI GPT-3 API를 통해 생성합니다.

- 대화형 UI: Framer Motion을 사용하여 애니메이션을 적용, 인터랙티브한 대화 흐름을 구현합니다.

# 설치 및 실행 방법
1. 리포지토리 클론

`git clone https://github.com/yourusername/ACE_Monster.git`

2. pnpm 설치
(pnpm이 설치되지 않았다면 아래 명령어로 설치)


`npm install -g pnpm`

3. 프론트엔드 실행


`cd frontend
pnpm install
pnpm run dev`

4. 백엔드 실행

`cd backend
./mvnw spring-boot:run`

5. ESLint와 Prettier 설정
코드 품질을 관리하기 위해 ESLint와 Prettier를 사용합니다. 아래 명령어를 실행하여 필요한 패키지를 설치하세요.

`
pnpm add eslint prettier eslint-plugin-react eslint-plugin-import eslint-config-prettier eslint-plugin-prettier -D
`

6. 향후 계획

- 사용자 인증 추가: Spring Security를 활용하여 로그인 기능 및 사용자 맞춤형 경험을 제공할 예정입니다.

- 다양한 AI 피드백: 현재는 기본적인 답변을 제공하지만, 점차 피드백과 맞춤형 추천 시스템을 추가하여 더욱 인터랙티브한 경험을 제공합니다.
