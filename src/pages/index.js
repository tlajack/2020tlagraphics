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
			<img className="placeholder" src={placeholder} alt="placeholder image" />
		</div>
		
		{/* <!-- SERVICES SECTION --> */}
		<div className="row service_row">
			<div id="service">
				<div className="grid_items service service-01"><div className="items">Merchandizing</div></div>
				<div className="grid_items service service-02"><div className="items">Marketing Collateral</div></div>
				<div className="grid_items service service-03"><div className="items">Decorative Graphic Films/Accent Graphics</div></div>
				<div className="grid_items service service-04"><div className="items">Signage</div></div>
			</div>
		</div>

		{/* <!-- Visual Mech SECTION --> */}
		<div className="row merch_row">
			<div id="merch">
				<div className="grid_items merch merch-01"><div className="items">New Construction - Dental</div></div>
				<div className="grid_items merch merch-02"><div className="items">Manufacturing Partnerships, Furnishings, Furniture, Lectern Logos</div></div>
				<div className="grid_items merch merch-03"><div className="items">Retail POP</div></div>
			</div>
		</div>

		{/* <!-- Marketing Collateral SECTION --> */}
		<div className="row marketing_row">
			<div id="marketing">
				<div className="grid_items marketing marketing-01"><div className="items">Catalogues, Brochures, Flyers</div></div>
				<div className="grid_items marketing marketing-02"><div className="items">Backlit / Frontlit Graphics</div></div>
				<div className="grid_items marketing marketing-03"><div className="items">Customized Branding</div></div>
				<div className="grid_items marketing marketing-04"><div className="items">Internal Corporate Branding</div></div>
			</div>
		</div>

		{/* <!-- Decorative SECTION --> */}
		<div className="row decorative_row">
			<div id="decorative">
				<div className="grid_items decorative decorative-01"><div className="items">Architectural Frosting</div></div>
				<div className="grid_items decorative decorative-02"><div className="items">Decorative Graphics, Wall Graphics Decoration</div></div>
				<div className="grid_items decorative decorative-03"><div className="items">Security Films</div></div>
				<div className="grid_items decorative decorative-04"><div className="items">Reception Graphics, Reception Logos</div></div>
			</div>
		</div>

		{/* <!-- Signage SECTION --> */}
		<div className="row signage_row">
			<div id="signage">
				<div className="grid_items signage signage-01"><div className="items">Way Finding</div></div>
				<div className="grid_items signage signage-02"><div className="items">Safety Signage</div></div>
				<div className="grid_items signage signage-03"><div className="items">Installation Services</div></div>
			</div>
		</div>
		
		{/* <!-- FOOTER SECTION --> */}
		<div className="footer">
			<h3>Services</h3>
			<ul>
				<li><a href="#">Visual Merchandizing</a></li>
				<ul>
					<li><a href="#">New Construction - Dental</a></li>
					<li><a href="#">Manufacturing Partnerships, Furnishings, Furniture, Le</a>ctern
						Logos</li>
					<li><a href="#">Retail POP</a></li>
				</ul>
				<li><a href="#">Marketing Collateral</a></li>
				<ul>
					<li><a href="#">Catalogues, Brochures, Flyers</a></li>
					<li><a href="#">Backlit / Frontlit Graphics</a></li>
					<li><a href="#">Customized Branding</a></li>
					<li><a href="#">Internal Corporate Branding</a></li>
				</ul>
				<li><a href="#">Decorative Graphic Films/Accent Graphics</a></li>
				<ul>
					<li><a href="#">Architectural Frosting</a></li>
					<li><a href="#">Decorative Graphics, Wall Graphics Decoration</a></li>
					<li><a href="#">Security Films</a></li>
					<li><a href="#">Reception Graphics, Reception Logos</a></li>
				</ul>
				<li><a href="#">Signage</a></li>
				<ul>
					<li><a href="#">Way Finding</a></li>
					<li><a href="#">Safety Signage</a></li>
					<li><a href="#">Installation Services</a></li>
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
