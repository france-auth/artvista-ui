import { clear, hide, logo, google } from "@/public";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <div className="p-5 xr:p-12 max-w-6xl flex justify-center items-center mx-auto">
        <div className="max-w-96 py-12 w-full min-h-full bg-[#fbfbfe] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center px-8">
            <div className="flex flex-col justify-center items-center gap-4">
              <Image
              src={logo}
                alt="logo"
                width={1}
                height={1}
                className="w-9 h-9"
              />
              <p className="font-semibold text-sm sm:text-base">NFT ArtVista</p>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-4 mt-10">
              <h1 className="text-xl sm:text-2xl font-bold">ArtVista</h1>
              <p className="font-semibold text-sm text-[#fbf9fe]">Please fill your detail to access your account.</p>
            </div>
          <form className="flex flex-col space-y-6 w-full items-center">
            <div className="flex flex-col w-full relative">
              <label htmlFor="email" className="text-xs sm:text-sm">Email</label>
              <input type="text"
                id="email"
                name="email"
                placeholder="debra.holt@example.com"
                required
                className="w-full px-3 py-2 rounded-lg border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100 text-xs xr:text-sm placeholder:sm:text-base placeholder:text-[#b8bcc5]"
              />
              <Image
                alt="show password"
                width={1}
                height={1}
                src={clear}
                className="w-5 h-5 absolute place-self-end top-1/2 right-3"
              />
            </div>
            <div className="flex flex-col w-full relative">
              <label htmlFor="password" className="text-xs sm:text-sm">Password</label>
              <input type="password"
                id="password"
                name="password"
                placeholder="debra@1234"
                required
                className="w-full px-3 py-2 rounded-lg border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100 text-xs xr:text-sm placeholder:sm:text-base placeholder:text-[#b8bcc5]"
              />
              <Image
                alt="hide password"
                width={1}
                height={1}
                src={hide}
                className="w-5 h-5 absolute place-self-end top-1/2 right-3"
              />
            </div>
          </form>
          <div className="w-full flex justify-between mt-2">
            <div className="gap-2 flex items-center">
              <input 
                type="checkbox" 
                name="remember-me" 
                id="remember-me"
                placeholder="remember-me"
              />
              <label
                htmlFor="remember-me"
                className="text-sm font-medium"
                >
                  Remember me
              </label>
            </div>
            <p className="text-sm font-medium text-[#5429ff]">
              Forgot Password?
            </p>
          </div>
          <div className="w-full mt-6 space-y-3">
            <Button
              name="Sign in"
              link=""
              className="text-white bg-[#5429ff]"
            />
            <Link
              href={'https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fnlr%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1104651839%3A1730322628150861&ddm=1'}
              className="flex items-center justify-center border border-solid cursor-pointer rounded-lg gap-2">
              <Image
                src={google}
                alt="google img"
                width={1}
                height={1}
                className="w-6 h-6 flex"
              />
              <button
                type="button"
                className="text-sm py-2 font-medium"
              >
                Sign in with Google
              </button>
            </Link>
          </div>
          <p className="text-xs mt-4">
            Do you have an account? 
            <span className="text-[#5429ff] ml-2">
              Sign up
            </span>
          </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;