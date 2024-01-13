"use client";

import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Cart() {
  const itemsCount = 0;
  const fee = 2;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 " />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-2 sm:max-w-lg">
        <SheetHeader className="space-y-2,5 pr-6">
          <SheetTitle>Cart 0</SheetTitle>
        </SheetHeader>
        {itemsCount > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              {/* TODO: add CartItem */}
            </div>
            <div className="space-y-4 text-sm">
              <Separator />
              <div className="space-y-1.5 pr-6">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(fee)}</span>
                </div>
              </div>
            </div>
            <SheetFooter>
              <SheetTrigger asChild>
                <Link
                  href="/Cart"
                  className={buttonVariants({ className: "w-full" })}
                >
                  Checkout
                </Link>
              </SheetTrigger>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1 ">
            <div className="relative mb-4 h-96 w-96 text-muted-foreground">
              <Image src="/Tiger-Cart.png" fill alt="tiger with a cart" />
            </div>
            <span className=" text-gray-700 font-medium text-2xl">
              This Cart is empty
            </span>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add items to your cart
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
