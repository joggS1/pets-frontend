import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center !h-full">
      <h1 className="text-bold text-3xl mb-5">qwe</h1>
      <Button size="sm" asChild><Link href="about">About Page</Link></Button>
    </div>
  );
}
