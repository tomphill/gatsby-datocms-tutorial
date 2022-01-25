import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Section from "../components/section"

const GenericPage = props => {
  console.log("PROPS: ", props)
  return (
    <Layout>
      <h1>Generic page: {props.data.datoCmsPage.title}</h1>
      {props.data.datoCmsPage.sections.map(section => (
        <Section key={section.originalId} gridColumns={section.gridColumns} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($pageIdJim: String) {
    datoCmsPage(originalId: { eq: $pageIdJim }) {
      title
      slug
      originalId
      sections {
        originalId
        gridColumns {
          originalId
          tabletWidth
          mobileWidth
          desktopWidth
          content {
            value
            links
            blocks {
              __typename
              ... on DatoCmsImageInline {
                id: originalId
                image {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`

export default GenericPage
