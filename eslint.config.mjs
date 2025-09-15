// eslint.config.mjs
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  // Next 권장 규칙 가져오기 (기존 extends 대체)
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Prettier와의 충돌 방지
  ...compat.extends('prettier'),

  // (선택) env 대체: 브라우저/노드 전역 허용
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // ✅ 여기서 JSON의 rules를 그대로 이식
  {
    rules: {
      'react/no-unused-state': 'error',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
        },
      ],

      'react/jsx-no-useless-fragment': 'error',
      'react/destructuring-assignment': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'array-callback-return': 'off',
      'react/jsx-pascal-case': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-key': 'warn',

      // 추가적인 유용한 규칙들
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
    },
  },

  // ✅ JSON의 overrides(*.d.ts) 이식
  {
    files: ['**/*.d.ts'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // 기존 ignore
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];

export default config;
