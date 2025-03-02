import { Button } from "@/components/ui/button";
import {
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center !h-full">
      <h1 className="text-bold text-3xl mb-5">
        Main page <IconBrandInstagram width={20} height={20} />
      </h1>
      <Button size="sm" asChild>
        <Link href="about" prefetch>About Page</Link>
      </Button>
    </div>
  );
}