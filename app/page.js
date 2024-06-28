import Image from "next/image";
import Link from "next/link";
import Nav from "./_components/Nav";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen justify-between flex">
        {/* left side form */}
        <div className="w-2/6 mx-auto self-center">
          <div className="mb-4">
            <Image
              height={56}
              width={66}
              src="/icons/shoppergram_logo.png"
              alt="brand logo"
            />
          </div>

          <h2 className="font-bold text-lg mb-4">Create Account</h2>
          <form>
            <div>
              <div className="pb-6">
                <p className="mb-1 capitalize">name</p>
                <input
                  className="w-full p-2 outline-none border rounded-sm bg-[#7DC3DE1A]"
                  type="text"
                />
              </div>

              <div className="pb-6">
                <p className="mb-1 capitalize">email</p>
                <input
                  className="w-full p-2 outline-none border rounded-sm bg-[#7DC3DE1A]"
                  type="text"
                />
              </div>

              <div className="pb-6">
                <p className="mb-1 capitalize">password</p>
                <input
                  className="w-full p-2 outline-none border rounded-sm bg-[#7DC3DE1A]"
                  type="text"
                />
              </div>

              <div className="pb-6">
                <p className="mb-1 capitalize">confirm password</p>
                <input
                  className="w-full p-2 outline-none border rounded-sm bg-[#7DC3DE1A]"
                  type="text"
                />
              </div>

              <p className="text-sm">
                Already have an account?
                <Link href={"#"} className="ml-1 text-[#006C96]">
                  Log in
                </Link>
              </p>

              <div className="mx-10 my-5 flex justify-center">
                <button className="capitalize font-bold bg-[#0096D0] rounded-md p-3 w-full">
                  create acccount
                </button>
              </div>
            </div>
          </form>

          <p className="text-center">Or sign up using</p>

          <div className="flex justify-center gap-2">
            <Link href={"#"}>
              <Image
                height={42}
                width={42}
                src="/icons/apple.png"
                alt="twitter link"
              />
            </Link>

            <Link href={"#"}>
              <Image
                height={42}
                width={42}
                src="/icons/google.png"
                alt="google link"
              />
            </Link>

            <Link href={"#"}>
              <Image
                height={42}
                width={42}
                src="/icons/fb.png"
                alt="facebook link"
              />
            </Link>
          </div>
        </div>

        {/*right side image  */}
        <div className="flex rounded-l-3xl realtive h-full bg-[#7DC3DE5E]">
          <Image
            className="self-end"
            height={473}
            width={551}
            src="/images/woman-with-box.png"
            alt="image of person"
          />
        </div>
      </div>
    </div>
  );
}
