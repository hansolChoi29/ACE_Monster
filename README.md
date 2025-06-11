# ACE_Monster

"ACE_Monster"는 인터뷰 형식의 AI 챗봇 프로젝트로, 사용자가 질문 카테고리를 클릭하면 AI가 해당 질문에 대해 답변하는 형식으로 구성됩니다. 이 프로젝트는 리액트와 스프링을 활용하여 개발됩니다.

개발기간: 5개월

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

### **패키지 매니저**

![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

# 프로젝트 목표

- 인터뷰형 AI 챗봇: 사용자가 카테고리별 질문을 선택하고, 챗봇이 그에 대한 답변을 제공하는 형태의 시스템을 구현합니다.

- 프론트엔드: React를 사용하여 사용자가 직관적으로 질문을 선택하고 대화할 수 있는 인터페이스를 제공합니다.

- 백엔드: Spring Boot로 API 서버를 구축하여 질문에 대한 답변을 OpenAI GPT-3 API를 통해 생성합니다.

- AI 피드백: 사용자가 답변을 입력하면, AI가 그 답변을 분석하고 피드백을 제공할 수 있는 기능을 추가합니다.

# 기능

- 질문 카테고리: 미리보기 형태로 다양한 카테고리별 질문을 제공하고, 사용자가 선택하여 챗봇과 인터뷰를 진행합니다.

- AI 기반 답변 생성: 사용자의 질문에 대한 적절한 답변을 OpenAI GPT-3 API를 통해 생성합니다.

- 대화형 UI: Framer Motion을 사용하여 애니메이션을 적용, 인터랙티브한 대화 흐름을 구현합니다.

# 개발 규칙

이 프로젝트는 1인 개발이지만, 장기 프로젝트로 잊지 않기 위한 개인 코드 규칙을 명확히 정리합니다.
스프링 학습 이후 본격 개발 시 준수할 기준입니다.

1. 함수 선언 방식

```
//  권장 (화살표 함수 방식)
const ExampleComponent = () => {
  return <div>Hello</div>;
};

//  금지 (전통 함수 선언식)
function ExampleComponent() {
  return <div>Hello</div>;
}
```

2.  비교 연산자

```
//  권장
if (a === 0) {
  console.log("a는 0입니다.");
}

// 금지
if (a == 0) {
  console.log("a는 0입니다.");
}
```

3. 변수 및 상수 명명 규칙

상수 (const)는 대문자 + 스네이크 케이스 사용

```
//  권장
const MAX_RETRY_COUNT = 5;

//  금지
const maxRetryCount = 5;

```

일반 변수는 카멜 케이스 사용

```
// 권장
let userName = "Hansol";

// 금지
let User_Name = "Hansol";

```

4. 파일 이름 규칙

```
// 권장
user-profile.tsx
chat-box.ts

// 금지
UserProfile.tsx
user_profile.tsx

```

5. 코드 라인 길이 제한

- 한 줄은 80~120자 이하로 제한
- 긴 JSX 속성, 긴 URL 등은 적절히 줄바꿈 처리

```
// 권장 (줄바꿈 활용)
<Image
  src="https://example.com/very-long-path/image.png"
  alt="example"
  width={200}
  height={200}
/>

```

6. 변수 선언 키워드

const: 재할당이 불필요한 경우에만 사용

let: 재할당이 필요한 경우에만 사용

var: 절대 사용하지 않음

```
// 권장
const appName = "ACE_Monster";
let retryCount = 0;

// 금지
var appName = "ACE_Monster";

```

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

`pnpm add eslint prettier eslint-plugin-react eslint-plugin-import eslint-config-prettier eslint-plugin-prettier -D`

6. 향후 계획

- 사용자 인증 추가: Spring Security를 활용하여 로그인 기능 및 사용자 맞춤형 경험을 제공할 예정입니다.

- 다양한 AI 피드백: 현재는 기본적인 답변을 제공하지만, 점차 피드백과 맞춤형 추천 시스템을 추가하여 더욱 인터랙티브한 경험을 제공합니다.

# 트러블슈팅




---

# 커밋 전에 자동으로 코드 검사하게 만든 이유
###### "ACE. 너 이거 왜 했는지 까먹었지?"
그래서 적어둔다. 


- 커밋할 때마다 ESLint + Prettier 검사 자동으로 실행됨
- 코드 스타일 틀리면 커밋 안 됨 (에러) ← 이게 정상

구성 요소

- Husky: git commit 하기 전에 자동으로 검사 실행
- lint-staged: 수정한 파일만 검사해줌
- eslint: 코드 규칙 위반 잡아냄 (예: var 쓰지 마, function 선언 쓰지 마)
- prettier: 코드 포맷 틀리면 커밋 막음
---

 커밋 전 검사 어떻게 작동하는지 테스트하려면?
1) .husky/pre-commit 안에 이거 들어있는지 확인

````
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged
````

2) 실행 권한 부여 (윈도우, 무조건 한 번은 해야 함)
````
chmod +x .husky/pre-commit
````
3) 에러 나는 코드 일부러 써보기
````
var hello = 1; // var 사용금지
function App() { return <div>hi</div>; } // 함수선언식 금지
````

4) 커밋 시도해보기

````
git add .
git commit -m "eslint 체크"
````

→ 에러 뜨면서 커밋 안 되는 게 정상.
안 뜨면 husky 안 걸린 거니까 위 1~2번 다시 체크!

 prettier 에러 해결하고 싶을 때
````
pnpm prettier --write .
````
→ 포맷 자동으로 맞춰줌 (그다음 커밋하면 됨)


