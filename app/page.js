import Image from "next/image";
import Nav from "./_components/Nav";

export default function Home() {
  return (
    <div>
      <div className="flex pl-16 pt-16">
        {/* left side form */}
        <div className="w-2/6">
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
              <div className="pb-5">
                <p className="capitalize">name</p>
                <input
                  className="w-full p-2 outline-none border rounded-sm bg-slate-100"
                  type="text"
                />
              </div>

              <div className="pb-4">
                <p className="capitalize">email</p>
                <input
                  className="w-full p-2 outline-none border rounded-sm bg-slate-100"
                  type="text"
                />
              </div>

              <div className="pb-4">
                <p className="capitalize">password</p>
                <input
                  className="w-full p-2 outline-none border rounded-sm bg-slate-100"
                  type="text"
                />
              </div>

              <div className="pb-4">
                <p className="capitalize">confirm password</p>
                <input
                  className="w-full p-2 outline-none border rounded-sm bg-slate-100"
                  type="text"
                />
              </div>

              <p className="text-sm">
                Already have an account?
                <span className="text-blue-600"> Log in</span>
              </p>

              <div className="mx-7 my-5 flex justify-center">
                <button className="capitalize font-bold bg-blue-500 rounded-md p-3 w-full">
                  create acccount
                </button>
              </div>
            </div>
          </form>

          <p className="text-center">Or sign up using</p>

          <div className="flex justify-center gap-2">
            <div>
              <Image
                height={42}
                width={42}
                src="/icons/apple.png"
                alt="twitter link"
              />
            </div>

            <div>
              <Image
                height={42}
                width={42}
                src="/icons/google.png"
                alt="google link"
              />
            </div>

            <div>
              <Image
                height={42}
                width={42}
                src="/icons/fb.png"
                alt="facebook link"
              />
            </div>
          </div>
        </div>

        {/*right side image  */}
        {/* <div className="bg-blue-300">
          <Image
            height={225}
            width={225}
            src="/images/woman-image.jpeg"
            alt="image of person"
          />
        </div> */}
      </div>
    </div>
  );
}
