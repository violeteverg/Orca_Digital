"use client";

import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  TAuthCredentialsValidator,
  AuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { cn } from "@/lib/utils";
import { input } from "zod";

export default function page() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    //
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[360px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Create an account</h1>

            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
            >
              Already have an account? sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email" className="mb-2">
                    Email
                  </Label>
                  <Input
                    {...register("email")}
                    placeholder="your@email.com"
                    className={cn({
                      "focus-within:ring-red-500": errors.email,
                    })}
                  />
                </div>

                <div className="grid gap-1 py-2">
                  <Label htmlFor="password" className="mb-2">
                    Password
                  </Label>
                  <Input
                    {...register("password")}
                    placeholder="password"
                    className={cn({
                      "focus-within:ring-red-500": errors.password,
                    })}
                  />
                </div>
                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
