import React from "react";

function ChatIcon() {
  return (
    <div>
      <svg
      className="fixed hidden md:block left-[1275px] top-[400px] z-10 h-[116px]"
        // width="120"
        // height="116"
        viewBox="0 0 120 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_871_5684)">
          <rect x="10" y="6" width="100" height="100" rx="50" fill="#119CE6" />
          <path
            d="M49.762 61.9455V46.6926H40.4134C37.7073 46.6926 35.4932 48.9068 35.4932 51.6129V66.3737C35.4932 69.0799 37.7073 71.294 40.4134 71.294H42.8736V78.6744L50.254 71.294H62.5547C65.2608 71.294 67.4749 69.0799 67.4749 66.3737V61.8963C67.3131 61.93 67.1482 61.9473 66.9829 61.948H49.762V61.9455ZM79.7756 34.392H57.6344C54.9282 34.392 52.7141 36.6061 52.7141 39.3122V58.9933H69.9351L77.3155 66.3737V58.9933H79.7756C82.4818 58.9933 84.6959 56.7817 84.6959 54.0731V39.3122C84.6959 36.6061 82.4818 34.392 79.7756 34.392Z"
            fill="#FAFAFA"
          />
        </g>
        <defs>
          <filter
            id="filter0_bd_871_5684"
            x="-23.3333"
            y="-27.3333"
            width="166.667"
            height="166.667"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="16.6667" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_871_5684"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_871_5684"
              result="effect2_dropShadow_871_5684"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_871_5684"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default ChatIcon;
