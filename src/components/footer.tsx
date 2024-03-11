import React from 'react'

const Footer = () => {
    return (
        <div className='footer bg-white'>
            <div className="content px-10 py-10 ">
                <div className="top border-b-2 border-[#C3D4E955]">
                    <div className="flex-top flex pb-10 ">
                        <div className="major-left basis-[60%] ">
                            <div className="hold">
                                <div className="title text-2xl text-primary font-bold mb-2">
                                    MORENT
                                </div>
                                <p className='text-sm w-[250px] leading-8'>
                                    Our vision is to provide convenience <br/> and help increase your sales business.
                                </p>
                            </div>
                        </div>
                        <div className="major-right flex justify-between basis-[40%]">
                            <div className="basis-[33%]">
                                <h1 className="font-bold text-lg mb-2">About</h1>
                                <ul className='text-sm'>
                                    <li className='mb-2'><a href="">How it works</a></li>
                                    <li className='mb-2'><a href="">Featured</a></li>
                                    <li className='mb-2'><a href="">Partnership</a></li>
                                    <li className='mb-2'><a href="">Business Solutions</a></li>
                                </ul>
                            </div>
                            <div className="basis-[33%]">
                                <h1 className="font-bold text-lg mb-2">Community</h1>
                                <ul className='text-sm'>
                                    <li className='mb-2'><a href="">Events</a></li>
                                    <li className='mb-2'><a href="">Blog</a></li>
                                    <li className='mb-2'><a href="">Podcast</a></li>
                                    <li className='mb-2'><a href="">Invite a friend</a></li>
                                </ul>
                            </div>
                            <div className="basis-[25%]">
                                <h1 className="font-bold text-lg mb-2">Socials</h1>
                                <ul className='text-sm'>
                                    <li className='mb-2'><a href="">Discord</a></li>
                                    <li className='mb-2'><a href="">Instagram</a></li>
                                    <li className='mb-2'><a href="">Twitter</a></li>
                                    <li className='mb-2'><a href="">Facebook</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom pt-10 flex justify-between text-sm font-bold">
                    <div className="copyright">
                        ©2022 MORENT. All rights reserved
                    </div>
                    <div className="p-a-t">
                        <a href="" className="privacy mr-[50px]">Privacy & Policy</a>
                        <a href="" className="terms">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
