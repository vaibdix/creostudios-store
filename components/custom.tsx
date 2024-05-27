"use client";

import { Hammer, Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const Custom = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-5 mr-5 flex items-center">
      <Button
        onClick={() => router.push("http://localhost:3002/")}
        className="flex rounded-full bg-black py-2"
      >
        <Hammer size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">Custom</span>
      </Button>
    </div>
  );
};

export default Custom;
