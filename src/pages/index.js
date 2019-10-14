import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header";

const IndexPage = () => (
  <div className="lines">
  <div className="mainbloc">
  <Layout>
    <SEO title="Home" />
    <div className="container">
    <h1>Hi there.</h1>
    <h1>My name is <span style={{color:"#A2FFD7"}}>Rodolphe</span></h1>
    I take pics on <a href="https://www.instagram.com/roprzz"><span style={{textDecoration:"underline"}}>Instagram</span></a><br/>
    My previous experience is here <a href="https://www.linkedin.com/in/rperuzza/"><span style={{textDecoration:"underline"}}>LinkedIn</span></a>
    </div>
  </Layout>
  </div>
  </div>
)

export default IndexPage
