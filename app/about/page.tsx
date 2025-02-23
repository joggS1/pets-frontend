import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Дай Лапу — О нас",
    description:
      "Описание",
  };

export default function About() {
  return (
    <div className="flex items-center flex-col justify-center">
      <h1 className="text-bold text-3xl"> about page</h1>
      <Button asChild size="sm" variant="link">
        <Link href="/">Main Page</Link>
      </Button>
    </div>
  );
}
