"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-black rounded-full px-4 py-2"
      >
        <ShoppingBag size={20} color="white" className="w-4 h-4" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
