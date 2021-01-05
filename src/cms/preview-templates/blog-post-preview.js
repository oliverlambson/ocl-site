import React from "react"
import PropTypes from "prop-types"

const BlogPostTemplate = ({ title, date, description, content }) => {
    return (
      <div className="global-wrapper">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{title}</h1>
            <p>{date}</p>
          </header>
          <section itemProp="articleBody">{content}</section>
        </article>
      </div>
    )
  }

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <BlogPostTemplate
      title={entry.getIn(["data", "title"])}
      date={entry.getIn(["data", "date"]).toISOString().split('T')[0]}
      description=""
      content={widgetFor("body")}
    />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
