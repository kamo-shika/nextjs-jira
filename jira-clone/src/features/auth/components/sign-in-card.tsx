import { DottedSeparator } from "@/components/dotted-separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SignInCard = () => {
  return (
    <Card className="h-full w-full shadow-none md:w-[487px]">
      <CardHeader className="flex items-center justify-center p-7 text-center">
        <CardTitle className="text-2xl">Welcom back!</CardTitle>
      </CardHeader>
      <div className="mb-2 px-7">
        <DottedSeparator />
      </div>
    </Card>
  );
};
