// SignInPage: サインインページのコンポーネント
// - SignInCardコンポーネントをラップ
// - サインインフォームの表示を担当
// - クライアントサイドレンダリングを使用

"use client";

import { SignInCard } from "@/features/auth/components/sign-in-card";

const SignInPage = () => {
  return <SignInCard />;
};

export default SignInPage;
