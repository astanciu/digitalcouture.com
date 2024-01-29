import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { CoreLayout } from '../components';
import './index.css';

export default props => {
  
  const Coral_Front = props.data.Coral_Front.childImageSharp.gatsbyImageData;
  const Derby_Front = props.data.Derby_Front.childImageSharp.gatsbyImageData;
  const Dress_Ocean = props.data.Dress_Ocean.childImageSharp.gatsbyImageData;
  const Dress_Venutian = props.data.Dress_Venutian.childImageSharp.gatsbyImageData;
  const EmpireDress_Enchanted = props.data.EmpireDress_Enchanted.childImageSharp.gatsbyImageData;
  const EmpireDress_Zip = props.data.EmpireDress_Zip.childImageSharp.gatsbyImageData;
  const EmprieDress_Orchids = props.data.EmprieDress_Orchids.childImageSharp.gatsbyImageData;
  const Fresco_Back2 = props.data.Fresco_Back2.childImageSharp.gatsbyImageData;
  const LongJacket_PLABLU = props.data.LongJacket_PLABLU.childImageSharp.gatsbyImageData;
  const LongJacket_Peacock = props.data.LongJacket_Peacock.childImageSharp.gatsbyImageData;
  const LongJacket_RedFlower = props.data.LongJacket_RedFlower.childImageSharp.gatsbyImageData;
  const Mediteranean_Back = props.data.Mediteranean_Back.childImageSharp.gatsbyImageData;
  const OrangeLilly = props.data.OrangeLilly.childImageSharp.gatsbyImageData;
  const Party = props.data.Party.childImageSharp.gatsbyImageData;

  return (
    <CoreLayout>
      <div className="parent">
        <div className="child"><Link to="/products/aegean-coral-ensamble"><GatsbyImage image={Coral_Front} /></Link></div>
        <div className="child"><Link to="/"><GatsbyImage image={OrangeLilly} /></Link></div>
        <div className="child"><Link to="/products/mediterranean-night-ensemble"><GatsbyImage image={Mediteranean_Back} /></Link></div>
        <div className="child"><Link to="/products/party-dress"><GatsbyImage image={Party} /></Link></div>
        <div className="child"><Link to="/products/aphrodite"><GatsbyImage image={EmpireDress_Enchanted} /></Link></div>
        <div className="child"><Link to="/"><GatsbyImage image={Derby_Front} /></Link></div>
        <div className="child"><Link to="/products/amphitrite-dress"><GatsbyImage image={Dress_Ocean} /></Link></div>
        <div className="child"><Link to="/products/venusians-dress"><GatsbyImage image={Dress_Venutian} /></Link></div>
        <div className="child"><Link to="/products/promethean-dress"><GatsbyImage image={EmpireDress_Zip} /></Link></div>
        <div className="child"><Link to="/products/orchis-avatar-dress"><GatsbyImage image={EmprieDress_Orchids} /></Link></div>
        <div className="child"><Link to="/products/fresco-short-jacket"><GatsbyImage image={Fresco_Back2} /></Link></div>
        <div className="child"><Link to="/"><GatsbyImage image={LongJacket_PLABLU} /></Link></div>
        <div className="child"><Link to="/products/peacock-jacket"><GatsbyImage image={LongJacket_Peacock} /></Link></div>
        <div className="child"><Link to="/products/amaryllis-duster"><GatsbyImage image={LongJacket_RedFlower} /></Link></div>
      </div>
    </CoreLayout>
  );
};

export const pageQuery = graphql`
  fragment featuredImage on File {
    childImageSharp {
      id
      ... on ImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400, height: 600)
        # fluid {
        #   ...GatsbyImageSharpFluid
        #   # aspectRatio
        #   # src
        #   # srcSet
        #   # sizes
        # }
      }
    }
  }
  query {
    feature1: file(base: { eq: "Featured_Mediteranean_Back.jpg" }) {
      ...featuredImage
    }

    Coral_Front: file(base: { eq: "Featured_Coral_Front.jpg" }) {
      ...featuredImage
    }

    Derby_Front: file(base: { eq: "Featured_Derby_Front.jpg" }) {
      ...featuredImage
    }

    Dress_Ocean: file(base: { eq: "Featured_Dress_Ocean.jpg" }) {
      ...featuredImage
    }

    Dress_Venutian: file(base: { eq: "Featured_Dress_Venutian.jpg" }) {
      ...featuredImage
    }

    EmpireDress_Enchanted: file(
      base: { eq: "Featured_EmpireDress_Enchanted.jpg" }
    ) {
      ...featuredImage
    }

    EmpireDress_Zip: file(base: { eq: "Featured_EmpireDress_Zip.jpg" }) {
      ...featuredImage
    }

    EmprieDress_Orchids: file(
      base: { eq: "Featured_EmprieDress_Orchids.jpg" }
    ) {
      ...featuredImage
    }

    Fresco_Back2: file(base: { eq: "Featured_Fresco_Back2.jpg" }) {
      ...featuredImage
    }

    LongJacket_PLABLU: file(base: { eq: "Featured_LongJacket_PLABLU.jpg" }) {
      ...featuredImage
    }

    LongJacket_Peacock: file(base: { eq: "Featured_LongJacket_Peacock.jpg" }) {
      ...featuredImage
    }

    LongJacket_RedFlower: file(
      base: { eq: "Featured_LongJacket_RedFlower.jpg" }
    ) {
      ...featuredImage
    }

    Mediteranean_Back: file(base: { eq: "Featured_Mediteranean_Back.jpg" }) {
      ...featuredImage
    }

    OrangeLilly: file(
      base: { eq: "Featured_OrangeLilly_Shirt_Round_Pose.jpg" }
    ) {
      ...featuredImage
    }

    Party: file(base: { eq: "Featured_Party.jpg" }) {
      ...featuredImage
    }
  }
`;
