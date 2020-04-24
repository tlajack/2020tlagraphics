import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/blog.css"

const BlogEntry = props => {
  const additionalStyles = props.featured ? "featuredEntry" : ""
  const allStyles = `blogEntry ${additionalStyles}`
  return (
    <div className={allStyles}>
      <Img
        fluid={props.blogImage.childImageSharp.fluid}
        alt="alt text tk"
        className="blogImage"
      />
      <div>
        <h2>
          <Link to={props.blogSlug}>{props.blogTitle}</Link>
        </h2>
        <p className="blogDate">{props.blogDate}</p>
        <p>
          {props.blogIntro} <Link to={props.blogSlug}> >> read more</Link>
        </p>
      </div>
    </div>
  )
}

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <section className="blogContainer">
      <BlogEntry
        blogDate="2020-04-05"
        blogTitle="Latest Article Title"
        blogIntro="Duis lacinia accumsan libero. Sed sit amet arcu finibus, venenatis nunc id, sodales est. Duis vehicula dolor arcu, nec pretium nibh ultrices eu. Curabitur non dapibus augue. Sed efficitur justo sit amet erat rhoncus, in eleifend massa accumsan."
        blogSlug="20_02_05-article01"
        blogImage={data.placeholder}
        featured={true}
        className="blogEntry"
      />
      <BlogEntry
        blogDate="2020-03-15"
        blogTitle="Title 04"
        blogIntro="Sed sit amet arcu finibus, venenatis nunc id, sodales est. Duis vehicula dolor arcu, nec pretium nibh ultrices eu. Curabitur non dapibus augue. "
        blogSlug="20_02_05-article02"
        blogImage={data.placeholder}
        className="blogEntry"
      />
      <BlogEntry
        blogDate="2020-03-02"
        blogTitle="Title 03"
        blogIntro="Duis lacinia accumsan libero. Duis vehicula dolor arcu, nec pretium nibh ultrices eu. Curabitur non dapibus augue. Sed efficitur justo sit amet erat rhoncus, in eleifend massa accumsan."
        blogSlug="20_02_05-article03"
        blogImage={data.placeholder}
        className="blogEntry"
      />
      <BlogEntry
        blogDate="2020-02-05"
        blogTitle="Title 02"
        blogIntro="Duis lacinia accumsan libero. Sed sit amet arcu finibus, venenatis nunc id, sodales est. Duis vehicula dolor arcu, nec pretium nibh ultrices eu. Curabitur non dapibus augue. Sed efficitur justo sit amet erat rhoncus, in eleifend massa accumsan."
        blogSlug="20_02_05-article04"
        blogImage={data.placeholder}
        className="blogEntry"
      />
      <BlogEntry
        blogDate="2020-01-16"
        blogTitle="Title 01"
        blogIntro="Duis vehicula dolor arcu, nec pretium nibh ultrices eu. Curabitur non dapibus augue. Sed efficitur justo sit amet erat rhoncus, in eleifend massa accumsan."
        blogSlug="20_02_05-article05"
        blogImage={data.placeholder}
        className="blogEntry"
      />
    </section>
  </Layout>
)
export const query = graphql`
  query {
    placeholder: file(relativePath: { eq: "tla-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default BlogPage
