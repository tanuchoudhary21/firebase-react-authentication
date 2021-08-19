import { useRef } from "react";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <div class="min-h-screen bg-purple-400 flex justify-center items-center">
      <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
            Create An Account
          </h1>
          <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
            Create an account to verify firebase authentication!
          </p>
        </div>
        <form class="space-y-4">
          <input
            id="email"
            ref={emailRef}
            type="email"
            placeholder="Email Addres"
            required
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
          <input
            id="confirm-password"
            type="password"
            ref={passwordConfirmRef}
            placeholder="Confirm Password"
            required
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
          />
        </form>
        <div class="text-center mt-6">
          <button class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">
            Create Account
          </button>
          <p class="mt-4 text-sm">
            Already Have An Account?{" "}
            <span class="underline cursor-pointer"> Sign In</span>
          </p>
        </div>
      </div>
      <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div class="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
};

export default Signup;
