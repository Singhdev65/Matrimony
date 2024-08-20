"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signInSchema } from "@/schemas/loginSchema";
import { signIn } from "next-auth/react";
import * as Styled from "./styles";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        identifier: data.identifier,
        password: data.password,
      });

      if (result?.url) {
        router.replace("/");
      } else if (result?.error === "CredentialsSignin") {
        console.log("Incorrect username or password");
      } else {
        console.error("Sign in failed:", result?.error ?? "Unknown error");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <Styled.WrapperContainer>
      <Styled.Wrapper>
        <Styled.LeftSection>{/* CAROUSEL */}</Styled.LeftSection>
        <Styled.RightSection>
          {/* LOGIN FORM */}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Styled.FormGroup>
              <Styled.Label htmlFor="identifier">Username/Email</Styled.Label>
              <Styled.Input id="identifier" {...form.register("identifier")} />
              {form.formState.errors.identifier && (
                <Styled.Error>
                  {form.formState.errors.identifier.message}
                </Styled.Error>
              )}
            </Styled.FormGroup>

            <Styled.FormGroup>
              <Styled.Label htmlFor="password">Password</Styled.Label>
              <Styled.Input
                id="password"
                type="password"
                {...form.register("password")}
              />
              {form.formState.errors.password && (
                <Styled.Error>
                  {form.formState.errors.password.message}
                </Styled.Error>
              )}
            </Styled.FormGroup>

            <button type="submit">Sign In</button>
          </form>
          <button type="submit" onClick={() => signIn("google")}>
            Google
          </button>
          <div className="text-center mt-4">
            <p>
              Not a member yet? <Link href="/sign-up">Sign up</Link>
            </p>
          </div>
        </Styled.RightSection>
      </Styled.Wrapper>
    </Styled.WrapperContainer>
  );
};

export default Login;
