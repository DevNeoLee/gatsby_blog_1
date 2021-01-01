import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const InfoFeed = () => (
  <Layout>
    <SEO title="Health Information" />
    <h1>Health Information</h1>
    <p>Eating healthy is our privelege.</p>
    <p>Learn healty food option for everyone's need.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default InfoFeed