import { createGlobalStyle } from 'styled-components';

export const IconFontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1553088830551'); /* IE9 */
    src: url('./iconfont.eot?t=1553088830551#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATUAAsAAAAACXQAAASGAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqGEIUeATYCJAMUCwwABCAFhG0HSRsrCCMRdnNQUpP91YFtLH3oE5oWGWaDEc3NN/iBMH4zINZxIODW45SgvLDu2lwsDA3u93h4Gqu9P7I3N3vnQIJLJNiEN/eompZQxBOESkiESEh0PIqFvIN5WDW1M5RklDvj5RP95GsCh9vh6Ey12Rs+5ugW5zywvTARaiTvzh59ISmMs5wSYEDkf46ZLkoHln9tc8kq2igARwk0oKjL1sZ7Z4cBcifKN4xdXMbVBLoVI7HvwLFzuBXatkDcv3PrCu6YSSkhhqYd5BxZxBuqll71Ll67Px9/bYpHUjNtz1M391/n+OODyLpfx3kbgbg/B5jjyBihEONc132knxrJuvR3lF0wXZOkH2ee3UHHE2TZijRd/4dHkSVBDGiqGYTdpSw7JzZFodocGmSotoNcEr+CJOeiqvYRHWvwFxNnaZq17pwkK2YXhfggubXVzB7UW/Q+XBGwqaWh555hT5+G4qEAf/EC1T+HMFpU9ywInX/OJ7DE588hdjx7BvIUHKbAFyAB8xnKO7Thev2FTi2wVndWgIa8oXQmEx4xIk9PSobFn2E6MT3oi3THfbweoXq6wxbsrGIP15jOKzieCCNBEoiEURCBUIBgKjRgV8TUhsdEoZUOK64+IuoVChGHBILCi7Aj4nBkSDStQ3xEQoYdFpUcigz0EqxOmJHZa+MFOzz0VHNoVHR0UnRI1FCElQRwVM+2RdSdawiFov2z4eHvDAqdiNadnVbCsVb7kuM56uBg5yJd5vYbYr3Hteqwy7YL5KuXpEWcf/VKTlIBlC+kBDCvklhYICp0+YLvJStIlo+XyqrISwrevInrqxgIOe9BGbuY4vFI0/VRMv+xPj7PsA8AhHNCuv0Lat++sOiapQHO4aSfqwXT+aIZH0frrzGo6I6U2L602m81eezU3RyHr90mk51HsMHT/Ld9G5xolbCRZLWZ6akV3OupHXvGTaMizLRpusnFy4NkGY3k7kZ3XouZHAezqDD1JleNZhPPHvFgAz1/EU6l2MdWjBepOSIEQ9T73U6o9Yvs/KZU1RKLk1LOv4TxezYB9i8qV/xtpbw6HDwOPvybRgS3vxCCxhwCBVShkY+OEY9SpIegcDYd4mwCYgeYXPKCjrDJcRdjM5/7NqW/63e8/aVBrIDt/8YU8PGk1m2Z1A3LD/GLqNUW/0viml1FlmrmWsR2UyRmqjG++y6Uhjr+IN+S7/14VhM6QmPFEJIp6yBr1iMLdgTV0BYYaHZCt9HB44eWjZGiTGODZwDCgneQzHkP2YIPyIL9BtUa/2FgIYTuCBjbMzLU487myKgELeg/BNM2ZFhl41Xf0L0rxVGpS3ohDyEKeZIls1dskPvYZ/i4QoSAuK3hAq6HVdVCx21EI4kX6XZpSnmPlJi2Hm24YEgRyALaHwiMVoPswWKT+v4b5LxVFC7pKPG+IDYIs4NcIquBvKqaWh3nsnjw4RSEILyJsFYNXKADVXqqBbr8VREyRMK3SHR2UtSP6qqS8TX1NZ6CTrtDjcYsJxfqQReaDanGWRWDnZjs1cLFgjqMRgAA') format('woff2'),
    url('./iconfont.woff?t=1553088830551') format('woff'),
    url('./iconfont.ttf?t=1553088830551') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1553088830551#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .iconspin:before {
    content: "\e851";
  }
  
  .iconfangdajing:before {
    content: "\e63d";
  }
  
  .iconAa:before {
    content: "\e636";
  }
  
  .icongangbi:before {
    content: "\e622";
  }
`;