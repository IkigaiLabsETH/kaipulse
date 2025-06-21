import localFont from 'next/font/local';

export const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/satoshi/Satoshi-Variable.woff2',
      weight: '400 700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/satoshi/Satoshi-VariableItalic.woff2',
      weight: '400 700',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

export const epilogue = localFont({
  src: [
    {
      path: '../../public/fonts/epilogue/Epilogue-Variable.ttf',
      weight: '400 700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/epilogue/Epilogue-VariableItalic.ttf',
      weight: '400 700',
      style: 'italic',
    },
  ],
  variable: '--font-epilogue',
  display: 'swap',
});

export const boska = localFont({
    src: [
      {
        path: '../../public/fonts/boska/Boska-Variable.woff',
        weight: '400 700',
        style: 'normal',
      },
      {
        path: '../../public/fonts/boska/Boska-VariableItalic.woff2',
        weight: '400 700',
        style: 'italic',
      },
    ],
    variable: '--font-boska',
    display: 'swap',
  }); 