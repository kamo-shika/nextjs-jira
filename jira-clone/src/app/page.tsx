// Home: メインページコンポーネント
// - 様々なスタイルのボタンとインプットフィールドのデモ表示
// - UIコンポーネントの使用例を示すページ

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Input />
      <Button size="xs">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="muted">Muted</Button>
      <Button variant="outline">outline</Button>
      <Button variant="teritary">Teritrary</Button>
    </div>
  );
}
