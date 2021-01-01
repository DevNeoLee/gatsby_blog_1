import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const NewsFeed = () => (
  <Layout>
    <SEO title="Health News" />
    <h1>Health News</h1>

    <p>{}</p>
    <p>Eating healthy is our privelege.</p>
    <p>Learn healty food option for everyone's need.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

  </Layout>
)

export default NewsFeed