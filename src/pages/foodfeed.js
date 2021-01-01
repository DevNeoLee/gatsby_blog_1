import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const FoodFeed = () => (
  <Layout>
    <SEO title="Food Info" />
    <h1>Food Info</h1>
    <p>Eating healthy is our privelege.</p>
    <p>Learn healty food option for everyone's need.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default FoodFeed