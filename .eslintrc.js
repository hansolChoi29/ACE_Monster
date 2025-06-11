/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 👉 화살표 함수만 허용 (함수 선언 금지)
    'func-style': ['error', 'expression'],

    // 👉 비교는 항상 ===
    eqeqeq: ['error', 'always'],

    // 👉 var 금지
    'no-var': 'error',

    // 👉 const 우선 사용
    'prefer-const': 'error',

    // 👉 파일 당 최대 라인 길이
    'max-len': ['warn', { code: 100 }],

    // 👉 Prettier 포맷 위반 시 오류
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
