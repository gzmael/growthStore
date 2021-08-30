import React from 'react'

import { Layout } from 'antd'

const { Footer: FooterAnt } = Layout

const Footer = () => {
  return (
    <FooterAnt style={{ textAlign: 'center' }}>
      Powered by{' '}
      <a
        href="https://github.com/gzmael"
        target="_blank"
        rel="noopener noreferrer"
      >
        @gzmael
      </a>
    </FooterAnt>
  )
}

export { Footer }
