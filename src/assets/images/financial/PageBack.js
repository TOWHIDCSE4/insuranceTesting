import React from 'react'

const PageBack = () => {
  return (
    <svg width={72} height={72} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_410_3946)">
        <rect x={20} y={16} width={32} height={32} rx={16} fill="white" />
        <path d="M40.1602 27.41L35.5802 32L40.1602 36.59L38.7502 38L32.7502 32L38.7502 26L40.1602 27.41Z" fill="#333333" />
      </g>
      <defs>
        <filter id="filter0_d_410_3946" x={0} y={0} width={72} height={72} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={10} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_410_3946" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_410_3946" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default PageBack