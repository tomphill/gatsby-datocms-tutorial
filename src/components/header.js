import * as React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Link from "./link"

const Header = ({ siteTitle }) => {
  const result = useStaticQuery(graphql`
    {
      datoCmsMenu {
        menuItems {
          labelText
          originalId
          destination {
            slug
          }
        }
      }
    }
  `)
  console.log("MENU RESULT: ", result)
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        {result.datoCmsMenu.menuItems.map(menuItem => (
          <Link to={menuItem.destination.slug} key={menuItem.originalId}>
            {menuItem.labelText}
          </Link>
        ))}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
