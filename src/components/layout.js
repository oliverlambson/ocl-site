import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <div className="global-temp">
        <header className="global-header">{header}</header>
        <main>{children}</main>
      </div>
      {/* <footer className="global-footer">
        © Oliver Lambson {new Date().getFullYear()}
        <br />
        Built with ♥ using{" "}
        <a
          href="https://www.gatsbyjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        ,{" "}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>{" "}
        and other OSS.
      </footer> */}
    </div>
  )
}

export default Layout
