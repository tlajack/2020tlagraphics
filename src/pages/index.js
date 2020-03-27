import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import placeholder from "../images/logo-optimized.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="container">
		{/* <!-- HERO SECTION --> */}
		<div className="hero">
			<img className="placeholder" src={placeholder} alt="" />
		</div>
		
		{/* <!-- SERVICES SECTION --> */}
		<div className="row service_row">
			<div id="service">
				<div className="grid_items service service-01"><div id="merchandizing" className="items">Merchandizing</div></div>
				<div className="grid_items service service-02"><div id="mark" className="items">Marketing Collateral</div></div>
				<div className="grid_items service service-03"><div id="dec" className="items">Decorative Graphic Films/Accent Graphics</div></div>
				<div className="grid_items service service-04"><div id="sig" className="items">Signage</div></div>
			</div>
		</div>

		{/* <!-- Visual Mech SECTION --> */}
		<div className="row merch_row">
			<div id="merch">
				<div className="grid_items merch merch-01"><div id="new" className="items">New Construction - Dental</div></div>
				<div className="grid_items merch merch-02"><div id="manu" className="items">Manufacturing Partnerships, Furnishings, Furniture, Lectern Logos</div></div>
				<div className="grid_items merch merch-03"><div id="ret" className="items">Retail POP</div></div>
			</div>
		</div>

		{/* <!-- Marketing Collateral SECTION --> */}
		<div className="row marketing_row">
			<div id="marketing">
				<div className="grid_items marketing marketing-01"><div id="cat" className="items">Catalogues, Brochures, Flyers</div></div>
				<div className="grid_items marketing marketing-02"><div id="bac" className="items">Backlit / Frontlit Graphics</div></div>
				<div className="grid_items marketing marketing-03"><div id="cust" className="items">Customized Branding</div></div>
				<div className="grid_items marketing marketing-04"><div id="int" className="items">Internal Corporate Branding</div></div>
			</div>
		</div>

		{/* <!-- Decorative SECTION --> */}
		<div className="row decorative_row">
			<div id="decorative">
				<div className="grid_items decorative decorative-01"><div id="arc" className="items">Architectural Frosting</div></div>
				<div className="grid_items decorative decorative-02"><div id="decw" className="items">Decorative Graphics, Wall Graphics Decoration</div></div>
				<div className="grid_items decorative decorative-03"><div id="sec" className="items">Security Films</div></div>
				<div className="grid_items decorative decorative-04"><div id="rec" className="items">Reception Graphics, Reception Logos</div></div>
			</div>
		</div>

		{/* <!-- Signage SECTION --> */}
		<div className="row signage_row">
			<div id="signage">
				<div className="grid_items signage signage-01"><div id="way" className="items">Way Finding</div></div>
				<div className="grid_items signage signage-02"><div id="saf" className="items">Safety Signage</div></div>
				<div className="grid_items signage signage-03"><div id="ins" className="items">Installation Services</div></div>
			</div>
		</div>
		
		{/* <!-- FOOTER SECTION --> */}
		<div className="footer">
			<h3>Services</h3>
			<ul>
				<li><Link to="#merch">Visual Merchandizing</Link></li>
				<ul>
					<li><Link to="#new">New Construction - Dental</Link></li>
					<li><Link to="#manu">Manufacturing Partnerships, Furnishings, Furniture, Lectern	Logos</Link></li>
					<li><Link to="#ret">Retail POP</Link></li>
				</ul>
				<li><Link to="#marketing">Marketing Collateral</Link></li>
				<ul>
					<li><Link to="#cat">Catalogues, Brochures, Flyers</Link></li>
					<li><Link to="#bac">Backlit / Frontlit Graphics</Link></li>
					<li><Link to="#cust">Customized Branding</Link></li>
					<li><Link to="#int">Internal Corporate Branding</Link></li>
				</ul>
				<li><Link to="#decorative">Decorative Graphic Films/Accent Graphics</Link></li>
				<ul>
					<li><Link to="#arc">Architectural Frosting</Link></li>
					<li><Link to="#decw">Decorative Graphics, Wall Graphics Decoration</Link></li>
					<li><Link to="#sec">Security Films</Link></li>
					<li><Link to="#rec">Reception Graphics, Reception Logos</Link></li>
				</ul>
				<li><Link to="#signage">Signage</Link></li>
				<ul>
					<li><Link to="#way">Way Finding</Link></li>
					<li><Link to="#saf">Safety Signage</Link></li>
					<li><Link to="#ins">Installation Services</Link></li>
				</ul>
			</ul>

			<h3>Blog</h3>
			<h3>About us</h3>
			<h3>Resource Center</h3>
		</div>
	</div>

  </Layout>
)

export default IndexPage
