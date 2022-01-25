exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const result = await graphql(`
    {
      allDatoCmsPage {
        nodes {
          title
          slug
          originalId
        }
      }
    }
  `)

  console.log(result)

  result.data.allDatoCmsPage.nodes.forEach(page => {
    createPage({
      path: `/${page.slug === "index" ? "" : page.slug}`,
      component: require.resolve("./src/templates/generic-page.js"),
      context: {
        pageIdJim: page.originalId,
      },
    })
  })
}
