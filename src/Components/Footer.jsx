import React from 'react'

export const Footer = () => {
  return (
     <footer className="bg-primary text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} PureWash. All rights reserved.</p>
      </footer>
  )
}

export default Footer;