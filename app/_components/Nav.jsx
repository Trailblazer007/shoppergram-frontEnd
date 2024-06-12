import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <div>
      <nav className="bg-darkBlue text-white py-5 px-60">
        <div className="flex justify-between items-center">
          <div>
            <button className="flex gap-4">
              English
              <Image
                src="/icons/down_caret.png"
                alt=""
                width={20}
                height={20}
              />
            </button>
          </div>

          <div className="flex justify-between items-center gap-2">
            <div className="flex gap-2">
              <Image src="/images/nigeria.png" alt="" width={28} height={28} />
            </div>

            <div className="flex justify-between items-center gap-3">
              <div>Nigeria</div>
              <div>
                <button>
                  <Image
                    src="/icons/down_caret.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div></div>
    </div>
  )
}

export default Nav