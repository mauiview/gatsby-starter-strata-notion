import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { parseImageUrl } from 'notabase/src/utils'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const PostTemplate = () => {
  let disqusConfig = {
    url: `${config.siteUrl+location.pathname}`,
    identifier: post.id,
    title: post.title,
  }
  return (
    <>
      <h1>{post.title}</h1>
      <CommentCount config={disqusConfig} placeholder={'...'} />
      /* Post Contents */
      <Disqus config={disqusConfig} />
    </>
  )
}
export default PostTemplate
export default ({ data }) => {
  const { posts: { title, tags, publish_date, html, url, slug, desc, color, cover_image } } = data

  return (
    <Layout>
      <div id = "main">
        <div>{tags && tags.join(', ')}</div> 
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts(slug: { eq: $slug }) {
      html
      title
      tags
      publish_date
      url
      desc
      color
      cover_image
    }
  }
`