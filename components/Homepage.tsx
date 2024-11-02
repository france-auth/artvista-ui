import { clear, hide, logo, google, hero } from "@/public";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <div className="p-5 xr:p-12 max-w-7xl flex justify-center items-center my-auto mx-auto min-h-screen">
        <div className="p-6 lg:p-0 shadow-md rounded-3xl lg:justify-between flex justify-center items-center w-full  bg-[#fcfbfe]">
          <div className="flex items-center justify-center w-full lg:w-[47.5%]">
            <div className="max-w-[340px] w-full max-h-full bg-[#fbfbfe] flex flex-col lg:flex-row justify-center items-center">
              <div className="w-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-start w-full">
                  <Image
                  src={logo}
                    alt="logo"
                    width={35}
                    height={35}
                    quality={100}
                  />
                  <p className="font-semibold text-sm">NFT ArtVista</p>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-4 mt-10 lg:px-6">
                  <h1 className="text-xl sm:text-2xl font-bold">ArtVista</h1>
                  <p className="font-semibold text-sm text-[#fbf9fe]">
                    Please fill your detail to access your account.
                  </p>
                </div>
                <form className="flex flex-col space-y-6 w-full items-center lg:px-6">
                  <div className="flex flex-col w-full relative">
                    <label htmlFor="email" className="text-xs sm:text-sm">
                      Email
                    </label>
                    <input type="text"
                      id="email"
                      name="email"
                      placeholder="debra.holt@example.com"
                      required
                      className="w-full px-3 py-2 rounded-lg border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100 text-xs xr:text-sm placeholder:sm:text-sm placeholder:text-[#b8bcc5]"
                    />
                    <Image
                      alt="show password"
                      width={20}
                      height={20}
                      src={clear}
                      quality={100}
                      className="absolute place-self-end top-1/2 right-3"
                    />
                  </div>
                  <div className="flex flex-col w-full relative">
                    <label htmlFor="password" className="text-xs sm:text-sm">Password</label>
                    <input type="password"
                      id="password"
                      name="password"
                      placeholder="debra@1234"
                      required
                      className="w-full px-3 py-2 rounded-lg border outline-none focus:outline-none focus:ring-1 focus:ring-[#000807] focus:ring-opacity-100 text-xs xr:text-sm placeholder:sm:text-sm placeholder:text-[#b8bcc5]"
                    />
                    <Image
                      alt="hide password"
                      width={20}
                      height={20}
                      src={hide}
                      quality={100}
                      className="absolute place-self-end top-1/2 right-3"
                    />
                  </div>
                </form>
                <div className="w-full flex justify-between mt-2 lg:px-6">
                  <div className="gap-2 flex items-center">
                    <input 
                      type="checkbox" 
                      name="remember-me" 
                      id="remember-me"
                      placeholder="remember-me"
                    />
                    <label
                      htmlFor="remember-me"
                      className="xs:text-xs xx:text-sm font-medium"
                      >
                        Remember me
                    </label>
                  </div>
                  <p className="xs:text-xs xx:text-sm font-medium text-[#5429ff]">
                    Forgot Password?
                  </p>
                </div>
                <div className="w-full mt-6 space-y-3 lg:px-6">
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
          <div className="hidden lg:w-[52.5%] lg:flex p-6 pl-0">
            <Image
              alt="hero"
              src={hero}
              width={500}
              height={500}
              quality={100}
              className="bg-[#efdfff] rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage;