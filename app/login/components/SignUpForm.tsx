"use client";

import { Button, Input, Link, Spinner } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Dispatch, SetStateAction } from "react";

function SignUpForm({
  email,
  setEmail,
  password,
  setPassword,
  submitSignup,
  isVisible,
  toggleVisibility,
  isLoading,
  setSelected,
  firstName,
  setFirstName,
  lastName,
  setLastName,
}: {
  submitSignup: (event: any) => Promise<void>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  toggleVisibility: () => void;
  isVisible: boolean;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
}) {
  return (
    <form className="flex flex-col gap-4" onSubmit={submitSignup}>
      <Input
        isRequired
        label="firstname"
        placeholder="Enter your firstname"
        type="text"
        autoComplete="firstname"
        value={firstName}
        onValueChange={setFirstName}
      />
      <Input
        isRequired
        label="lastname"
        placeholder="Enter your lastname"
        type="text"
        autoComplete="lastname"
        value={lastName}
        onValueChange={setLastName}
      />
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="text"
        autoComplete="email"
        value={email}
        onValueChange={setEmail}
      />
      <Input
        isRequired
        label="Password"
        name="pass"
        autoComplete="new-password"
        placeholder="Enter your password"
        type={isVisible ? "text" : "password"}
        value={password}
        onValueChange={setPassword}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
            ) : (
              <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
            )}
          </button>
        }
      />
      <div className="mt-3 flex justify-end gap-2">
        <Button
          fullWidth
          className="z-[1] cursor-pointer text-white p-0 rounded-full"
          type="submit"
        >
          <div className=" bg-streamer-color bg-[length:200%] h-full w-full rounded-full gap-2 flex justify-center items-center font-bold text-lg">
            {isLoading && (
              <Spinner
                size="sm"
                classNames={{
                  circle1: "border-b-[white]",
                  circle2: "border-b-[white]",
                }}
              />
            )}
            <span>Sign up</span>
          </div>
        </Button>
      </div>
      <p className="text-center text-small">
        Already have an account?{" "}
        <Link
          size="sm"
          onPress={() => setSelected("login")}
          className=" text-[#71F9E1] cursor-pointer"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}

export default SignUpForm;
