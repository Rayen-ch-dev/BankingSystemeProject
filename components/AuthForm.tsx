"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { email } from "zod/v4";
import CustomeInput from "./CustomeInput";
import { authFormSchema } from "@/validation/formshema";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoding] = useState(false);
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoding(true);
    console.log(values);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex items-center gap-1 ">
          <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Banky
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3 ">
          <h1 className="text-18  lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user ? "Link your account" : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-5 md:gap-8"></div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CustomeInput
              controller={form.control}
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            <CustomeInput
              controller={form.control}
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />

            <Button type="submit" disabled={isLoading} className="form-btn">
                {isLoading ?(
                    <>
                    <Loader2 size={20} className="animate-spin" />&nbsp;Loading...
                    </>
                ):type==='sign-up'?'Sign Up':'Sign In'}
            </Button>
          </form>
        </Form>
      )}
    </section>
  );
};

export default AuthForm;
