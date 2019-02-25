import { createGlobalStyle } from 'styled-components'
import { css } from 'styled-components'

import sliderStyles from './slider'

const sizes = {
  xl: 1170,
  lg: 992,
  md: 768,
  sm: 576,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {  
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const defaultTheme = {
  body: {
    background: 'white',
    color: 'black'
  }
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 !important;
    padding: 0 !important;
    text-rendering: geometricPrecision;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #282a2d;
  }

  .aws-btn {
    width: auto !important;
    --button-default-height: 44px !important;
    --button-default-font-size: 15px !important;
    --button-default-border-radius: 2px !important;
    --button-horizontal-padding: 41px !important;
    --button-medium-height: 50px !important;

    --button-horizontal-padding: 23px !important;
    --button-raise-level: 4px !important;
    --button-hover-pressure: 1 !important;
    --transform-speed: 0.175s !important;

    --button-primary-color: #1976d2 !important;
    --button-primary-color-dark: #004ba0 !important;
    --button-primary-color-light: #ffffff !important;
    --button-primary-color-hover: #156CB8 !important;
    --button-primary-border: none !important;

    --button-secondary-color: #f44336 !important;
    --button-secondary-color-dark: #ba000d !important;
    --button-secondary-color-light: white !important;
    --button-secondary-color-hover: #D63A2F !important;
    --button-secondary-border: 0px solid #ba000d !important;
    --button-secondary-color-active: #D63A2F !important;

    --button-anchor-color: #0e4f88 !important;
    --button-anchor-color-dark: #072743 !important;
    --button-anchor-color-light: #ffffff !important;
    --button-anchor-color-hover: #0d4a7f !important;
    --button-anchor-border: none !important;

    .icon {
      width: 19px;
      top: 2px;
      position: relative;
      height: 100%;
      margin-right: 6px;
    }
  }
  
	textarea{
      resize: vertical;
  }

  ${sliderStyles}
`