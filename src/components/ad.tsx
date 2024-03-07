import React from 'react'

interface AdProps{
    bg_color: string
    btn_type: string
    ad_bg: string
    ad_type: string
    ad_title:  string
    ad_text: string
    extra?: string
}

const Ad = ({bg_color, btn_type, ad_bg, ad_type, ad_title, ad_text, extra} : AdProps) => {
  return (
    <div className={`relative w-[49%] py-3 px-5 pt-7 rounded-[5px] ${bg_color}`}>
        <img src={ad_bg} alt="" className='absolute left-0 top-0 w-[100%]' />
        <div className="text-block relative z-[50]">
            <h1 className='capitalize text-white w-[45%] pr-3 font-[500] text-2xl '>
                {ad_title}
            </h1>
            <p className="my-4 desc text-xs text-white w-[45%] pr-3">
                {ad_text}
            </p>
            <button className={`${btn_type} text-white text-sm py-2 px-4 rounded-[4px] `}>
                Rent Car
            </button>
        </div>
        <div className="relative flex-and-center z-[50]">
            <div className={`hold_img w-[50%] ${extra} `}>
                <img src={ad_type} className={`w-[100%]`} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Ad
