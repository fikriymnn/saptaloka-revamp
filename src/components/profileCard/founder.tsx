import React from 'react'

function Founder({ nama, jabatan, foto, linked, ig, web }: { nama: any, jabatan: any, foto: any, linked: any, ig: any, web: any }) {
    return (
        <div className='flex w-full flex-col justify-center items-center'>
            <img className="w-[265px] h-[332px]" src={foto}></img>
            <h2 className="text-center text-sky-200 text-2xl font-bold pt-4 line-clamp-1">
                {nama}
            </h2>
            <h3 className="text-center text-sky-200 text-lg font-medium">
                {jabatan}
            </h3>
            <div className="flex flex-row pt-2 gap-1 justify-center">
                <a href={linked}>
                    <svg className='hover:fill-[#2ABDFB] hover:cursor-pointer fill-[#F0FDFF]'
                        width="22" height="22" fill="#E4F7FF" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.74714 7.56972C6.4796 7.56972 7.07338 6.97594 7.07338 6.24348C7.07338 5.51101 6.4796 4.91724 5.74714 4.91724C5.01467 4.91724 4.4209 5.51101 4.4209 6.24348C4.4209 6.97594 5.01467 7.56972 5.74714 7.56972Z" />
                        <path d="M4.4209 9.33802C4.4209 8.84971 4.81675 8.45386 5.30506 8.45386H6.18922C6.67752 8.45386 7.07338 8.8497 7.07338 9.33802V16.4113C7.07338 16.8996 6.67752 17.2955 6.18922 17.2955H5.30506C4.81675 17.2955 4.4209 16.8996 4.4209 16.4113V9.33802Z" />
                        <path d="M9.72596 17.2955H10.6101C11.0984 17.2955 11.4943 16.8996 11.4943 16.4113V12.4326C11.4943 11.1063 14.1468 10.2222 14.1468 11.9905V16.4117C14.1468 16.9 14.5426 17.2955 15.0309 17.2955H15.9151C16.4034 17.2955 16.7992 16.8996 16.7992 16.4113V11.1063C16.7992 9.33802 15.473 8.45386 13.7047 8.45386C11.9364 8.45386 11.4943 9.7801 11.4943 9.7801V9.33802C11.4943 8.8497 11.0984 8.45386 10.6101 8.45386H9.72596C9.23764 8.45386 8.8418 8.84971 8.8418 9.33802V16.4113C8.8418 16.8996 9.23764 17.2955 9.72596 17.2955Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6833 1.38062C19.1483 1.38062 20.3358 2.56818 20.3358 4.0331V18.1797C20.3358 19.6446 19.1483 20.8322 17.6833 20.8322H3.53676C2.07184 20.8322 0.884277 19.6446 0.884277 18.1797V4.0331C0.884277 2.56818 2.07184 1.38062 3.53676 1.38062H17.6833ZM17.6833 3.14894C18.1717 3.14894 18.5675 3.54479 18.5675 4.0331V18.1797C18.5675 18.668 18.1717 19.0638 17.6833 19.0638H3.53676C3.04846 19.0638 2.6526 18.668 2.6526 18.1797V4.0331C2.6526 3.54479 3.04846 3.14894 3.53676 3.14894H17.6833Z" />
                    </svg>
                </a>
                <a href={ig}>
                    <svg className='hover:fill-[#2ABDFB] hover:cursor-pointer fill-[#F0FDFF]'
                        width="22" height="22" fill="#E4F7FF" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4399 5.49758C9.52838 5.49758 8.6373 5.76789 7.87938 6.27431C7.12146 6.78074 6.53074 7.50054 6.18191 8.3427C5.83307 9.18485 5.7418 10.1115 5.91964 11.0056C6.09747 11.8996 6.53642 12.7208 7.18098 13.3654C7.82553 14.0099 8.64675 14.4489 9.54078 14.6267C10.4348 14.8045 11.3615 14.7133 12.2036 14.3644C13.0458 14.0156 13.7656 13.4249 14.272 12.667C14.7785 11.909 15.0488 11.018 15.0488 10.1064C15.0475 8.88447 14.5615 7.71293 13.6975 6.84888C12.8334 5.98484 11.6619 5.49885 10.4399 5.49758ZM10.4399 13.179C9.83222 13.179 9.23818 12.9988 8.7329 12.6612C8.22762 12.3235 7.8338 11.8437 7.60124 11.2822C7.36869 10.7208 7.30784 10.103 7.4264 9.507C7.54495 8.91098 7.83759 8.3635 8.26729 7.93379C8.697 7.50409 9.24447 7.21146 9.84049 7.0929C10.4365 6.97435 11.0543 7.03519 11.6157 7.26775C12.1772 7.5003 12.657 7.89412 12.9947 8.3994C13.3323 8.90468 13.5125 9.49873 13.5125 10.1064C13.5125 10.9213 13.1888 11.7028 12.6125 12.279C12.0363 12.8553 11.2548 13.179 10.4399 13.179ZM15.0488 0.120605H5.83108C4.40548 0.12213 3.03871 0.689122 2.03067 1.69717C1.02262 2.70522 0.455627 4.07199 0.454102 5.49758V14.7153C0.455627 16.1409 1.02262 17.5076 2.03067 18.5157C3.03871 19.5237 4.40548 20.0907 5.83108 20.0922H15.0488C16.4744 20.0907 17.8411 19.5237 18.8492 18.5157C19.8572 17.5076 20.4242 16.1409 20.4257 14.7153V5.49758C20.4242 4.07199 19.8572 2.70522 18.8492 1.69717C17.8411 0.689122 16.4744 0.12213 15.0488 0.120605ZM18.8895 14.7153C18.8895 15.7339 18.4848 16.7108 17.7645 17.431C17.0443 18.1513 16.0674 18.556 15.0488 18.556H5.83108C4.81246 18.556 3.83557 18.1513 3.1153 17.431C2.39502 16.7108 1.99038 15.7339 1.99038 14.7153V5.49758C1.99038 4.47897 2.39502 3.50207 3.1153 2.7818C3.83557 2.06153 4.81246 1.65688 5.83108 1.65688H15.0488C16.0674 1.65688 17.0443 2.06153 17.7645 2.7818C18.4848 3.50207 18.8895 4.47897 18.8895 5.49758V14.7153ZM16.585 5.11351C16.585 5.3414 16.5175 5.56417 16.3909 5.75365C16.2642 5.94313 16.0843 6.09081 15.8738 6.17802C15.6632 6.26522 15.4315 6.28804 15.208 6.24358C14.9845 6.19913 14.7792 6.08939 14.6181 5.92825C14.457 5.76711 14.3472 5.56181 14.3028 5.3383C14.2583 5.11479 14.2811 4.88312 14.3683 4.67258C14.4555 4.46204 14.6032 4.28209 14.7927 4.15549C14.9822 4.02888 15.2049 3.9613 15.4328 3.9613C15.7384 3.9613 16.0315 4.0827 16.2476 4.29878C16.4636 4.51486 16.585 4.80793 16.585 5.11351Z" />
                    </svg>
                </a>
                <a href={web}>
                    <svg className='hover:fill-[#2ABDFB] hover:cursor-pointer fill-[#F0FDFF]'
                        width="30" height="30" fill="#E4F7FF" viewBox="4 2 30 33" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5322 20.1475C11.7201 20.4997 11.9083 20.8171 12.0882 21.0983C10.177 20.6686 8.51862 19.5708 7.37107 18.0631C8.12843 17.6366 9.09846 17.1945 10.2646 16.871C10.596 18.1709 11.0636 19.2689 11.5322 20.1475ZM12.9778 19.3765C12.5707 18.6134 12.1628 17.6603 11.8689 16.5311C12.5016 16.4372 13.177 16.383 13.8934 16.383C14.6096 16.383 15.2851 16.4372 15.9177 16.531C15.6237 17.6603 15.2158 18.6134 14.8087 19.3765C14.4824 19.9885 14.1572 20.477 13.8933 20.8345C13.6293 20.477 13.3041 19.9885 12.9778 19.3765ZM11.4358 13.1064C11.4358 13.7444 11.4787 14.3499 11.5544 14.9215C12.2843 14.8096 13.0647 14.7447 13.8934 14.7447C14.7219 14.7447 15.5023 14.8095 16.2321 14.9215C16.3078 14.3498 16.3507 13.7444 16.3507 13.1064C16.3507 12.4684 16.3078 11.863 16.2321 11.2913C15.5023 11.4032 14.7219 11.4681 13.8934 11.4681C13.0647 11.4681 12.2843 11.4032 11.5544 11.2913C11.4787 11.8629 11.4358 12.4684 11.4358 13.1064ZM9.94702 10.9535C9.85188 11.6295 9.79752 12.3478 9.79752 13.1064C9.79752 13.865 9.85188 14.5833 9.94702 15.2593C8.5561 15.6328 7.40432 16.1593 6.51354 16.666C5.99337 15.5896 5.70177 14.3821 5.70177 13.1064C5.70177 11.8307 5.99337 10.6232 6.51353 9.54679C7.40421 10.0534 8.55602 10.58 9.94702 10.9535ZM11.8689 9.68176C12.5016 9.77565 13.177 9.8298 13.8934 9.8298C14.6096 9.8298 15.2851 9.77566 15.9177 9.68178C15.6237 8.55253 15.2158 7.59946 14.8087 6.83631C14.4824 6.22439 14.1572 5.73576 13.8933 5.37835C13.6293 5.73576 13.3041 6.22439 12.9778 6.83628C12.5707 7.59944 12.1628 8.55251 11.8689 9.68176ZM17.8395 10.9536C17.9346 11.6296 17.989 12.3479 17.989 13.1064C17.989 13.865 17.9346 14.5832 17.8395 15.2592C19.2304 15.6328 20.3822 16.1593 21.273 16.666C21.7931 15.5895 22.0848 14.382 22.0848 13.1064C22.0848 11.8308 21.7931 10.6233 21.273 9.54685C20.3823 10.0535 19.2305 10.58 17.8395 10.9536ZM20.4154 8.14976C19.658 8.5763 18.688 9.01835 17.522 9.3419C17.1905 8.04192 16.7229 6.94388 16.2544 6.06534C16.0664 5.71306 15.8782 5.39575 15.6983 5.11445C17.6096 5.54427 19.268 6.64207 20.4154 8.14976ZM10.2646 9.34186C9.09852 9.01831 8.12853 8.57625 7.37108 8.14971C8.51862 6.64205 10.177 5.54427 12.0881 5.11445C11.9083 5.39575 11.7201 5.71304 11.5322 6.06532C11.0636 6.94385 10.596 8.04188 10.2646 9.34186ZM17.522 16.8709C17.1905 18.1709 16.7229 19.2689 16.2544 20.1475C16.0664 20.4997 15.8782 20.8171 15.6983 21.0983C17.6096 20.6686 19.268 19.5707 20.4155 18.063C19.6581 17.6365 18.6881 17.1945 17.522 16.8709ZM13.8933 22.9362C19.3221 22.9362 23.7231 18.5353 23.7231 13.1064C23.7231 7.67756 19.3221 3.27661 13.8933 3.27661C8.46443 3.27661 4.06348 7.67756 4.06348 13.1064C4.06348 18.5353 8.46443 22.9362 13.8933 22.9362Z" />
                    </svg>
                </a>

            </div>
        </div>
    )
}

export default Founder
