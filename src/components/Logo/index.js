import * as React from 'react'
import { Svg } from './styles'
export const Logo = (props) => (
  <Svg
    width={511.467}
    height={122}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='-5.733 14 511.467 122'
    style={{
      background: '0 0'
    }}
    preserveAspectRatio='xMidYMid'
    {...props}
  >
    <defs>
      <linearGradient id='b' x1={0.191} x2={0.809} y1={-0.451} y2={1.451}>
        <stop offset={0} stopColor='#fdbd10' />
        <stop offset={1} stopColor='#aeaeae' />
      </linearGradient>
      <filter id='a' x='-100%' y='-100%' width='300%' height='300%'>
        <feFlood
          floodColor='#000'
          floodOpacity={0.5}
          result='flood'
          x={10}
          y={10}
          width={480}
          height={130}
        />
        <feFlood floodColor='#000' result='flood-stroke' />
        <feFlood floodColor='#fdbd10' result='flood-outline' />
        <feFlood floodColor='none' result='flood-shadow' />
        <feImage
          x={0}
          y={0}
          width={500}
          height={150}
          xlinkHref='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSI1MDAiIGhlaWdodD0iMTUwIj48cmFkaWFsR3JhZGllbnQgaWQ9ImluY3JlZGlibGUtZ3JhZGllbnQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2QwZDBkMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U0ZTRlNCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSIxNTAiIGZpbGw9InVybCgjaW5jcmVkaWJsZS1ncmFkaWVudCkiLz48L3N2Zz4='
          result='image'
        />
        <feImage
          x={0}
          y={0}
          width={10}
          height={10}
          xlinkHref='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjMiLz48L3N2Zz4='
          result='dot'
        />
        <feTile in='dot' result='tile' />
        <feGaussianBlur stdDeviation={1.5} result='blur-tile' />
        <feBlend in2='image' in='blur-tile' mode='soft-light' />
        <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0' />
        <feComponentTransfer result='func'>
          <feFuncA type='linear' slope={20} intercept={-10.5} />
        </feComponentTransfer>
        <feComposite operator='out' in='flood' in2='func' result='dots' />
        <feOffset dx={3} dy={1} in='SourceAlpha' />
        <feComposite operator='out' in2='SourceAlpha' />
        <feComponentTransfer result='extrude'>
          <feFuncA type='linear' slope={0.7} intercept={-0.1} />
        </feComponentTransfer>
        <feMorphology
          operator='dilate'
          radius={5}
          in='SourceGraphic'
          result='dilate'
        />
        <feComposite
          operator='in'
          in='flood-stroke'
          in2='dilate'
          result='stroke'
        />
        <feOffset dx={1} result='stroke-offset' />
        <feMorphology operator='dilate' radius={2} result='dilate-outline' />
        <feComposite
          operator='in'
          in='flood-outline'
          in2='dilate-outline'
          result='outline'
        />
        <feComposite operator='in' in='flood-shadow' in2='outline' />
        <feGaussianBlur stdDeviation={3} />
        <feComponentTransfer>
          <feFuncA type='linear' slope={0.7} intercept={-0.2} />
        </feComponentTransfer>
        <feOffset dy={4} result='offset-shadow' />
        <feMerge>
          <feMergeNode in='dots' />
          <feMergeNode in='offset-shadow' />
          <feMergeNode in='outline' />
          <feMergeNode in='stroke-offset' />
          <feMergeNode in='SourceGraphic' />
          <feMergeNode in='extrude' />
        </feMerge>
      </filter>
    </defs>
    <g filter='url(#a)'>
      <path
        d='M32.51-26.62q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.71-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.22 1.44 3.9 1.44 3.72 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3Zm20.87 4.16q.89-2.37.89-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44t-1.31 3.24q0 1.28 1.02 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.24 4.96-1.25 2.37-3.49 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.83-1.47 4.51-1.47 2.69 0 4.36 1.02-.84 2.11-.84 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.72-2.04-1.72-4.6 0-2.56 1.21-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.47 1.67 2.47 4.48 0 2.82-1.7 4.42t-4.77 1.6q-2.11 0-3.13-.7Zm35.2-9.09q2.11-2.37 5.76-2.37 2.24 0 3.96 1.22 1.73 1.21 1.73 3.48 0 2.28-.7 4.71-.71 2.43-1.79 4.93-2.18 4.86-5.19 8.89-4.22 5.83-8.29 8.9Q80 1.28 75.58 1.28q-3.58 0-5.76-.83-.38-13.44-.86-18.24-.48-4.8-.86-7.43-.64-5.12-2.56-6.33 1.47-1.28 2.91-1.83 1.44-.54 4.41-.54 2.98 0 5.09 2.34 2.11 2.33 2.53 6.46.42 4.13.42 9.12 0 4.99-.39 11.01 1.99-1.41 4.1-5.7 2.88-5.95 3.9-13.12.32-2.17.32-4.48 0-2.3-.25-3.26Zm40.57 32.83q-8.19 0-8.96-11.65h-11.01q-1.28 2.95-2.17 5.51L105.34 0h-8.96l20.16-42.24h13.76l2.69 31.1q.64 6.72 3.2 8.71-1.85 3.71-7.04 3.71Zm-14.46-24.45-3.52 8.13H120l-.77-16.45v-1.73l-4.54 10.05Zm52.29 24.45q-7.75 0-7.75-6.02.07-1.66.58-4.48l1.15-5.88q1.73-8.32 1.73-10.18 0-3.71-2.18-3.71-3.65 0-5.57 9.53L151.17 0 138.3 1.28l6.66-33.98 10.5-1.22-1.03 6.27q3.01-6.27 12.23-6.27 4.48 0 6.36 1.89 1.89 1.89 1.89 6.11 0 3.97-2.05 13.25-.96 4.16-.96 5.73 0 1.56.87 2.46.86.9 2.14 1.02-.64 2.18-2.85 3.46-2.2 1.28-5.08 1.28Zm15.84-3.2q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.27 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43Zm13.5-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.05 0 3.55-1.95t2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.92.51-1.66 1.67Zm39.2 24.38q-1.98 4.8-8.32 4.8-3.2 0-5.25-2.24-1.66-1.86-1.66-3.97 0-4.8 2.24-15.29l4.67-24.58 12.99-1.28-6.21 32.38q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78Zm20.8 0q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.91 20.22q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78Zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34 3 0 4.83 1.34 1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3.01 0-4.89-1.28-1.89-1.28-1.89-3.78ZM274.08.64q-3.04-.64-4.61-.93-1.57-.29-3.39-.29t-3.62.64q-.96-.57-1.56-1.72-.61-1.16-.61-2.95 0-3.77 3.84-6.65l16.25-11.72q-4.54-1.28-8.67-1.28t-5.6 2.82q-2.17-2.56-2.17-6.59 0-2.69 1.95-4.45 1.95-1.76 6.05-1.76 2.3 0 4.38.29t3.94.54l3.45.51q1.67.26 3.36.26 1.7 0 2.98-.7 1.66 1.53 1.66 3.64 0 3.33-4.09 6.79l-16.2 12.09q5 1.48 7.56 1.48 5.37 0 7.68-2.56 1.79 2.04 1.79 5.6 0 3.55-2.31 5.56-2.3 2.02-6.46 2.02-2.56 0-5.6-.64Zm45.86-11.46q1.6 1.09 1.6 3.49 0 2.4-1.22 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.25-15.55 5.63-6.34 15.42-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.25 1.66-.25 3.07 0 2.95 1.31 4.07t3.74 1.12q2.43 0 5.03-1.12 2.59-1.12 3.68-2.92Zm-13.06-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.63-.8-1.09 0-2.02.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63Zm41.22-.19q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02L339.78 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76Z'
        fill='url(#b)'
        transform='translate(69.793 99)'
      />
    </g>
  </Svg>
)
