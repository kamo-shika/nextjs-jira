// SignInPage: サインアップページのコンポーネント
// - SignUpCardコンポーネントをラップ
// - サインアップフォームの表示を担当
// - クライアントサイドレンダリングを使用

"use client";

import { SignUpCard } from "@/features/auth/components/sign-up-card";

const SignInPage = () => {
  return <SignUpCard />;
};

export default SignInPage;
