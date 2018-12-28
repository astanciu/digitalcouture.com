import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { CoreLayout } from '../components';
import './index.css';

export default props => {
  
  const Coral_Front = props.data.Coral_Front.childImageSharp.fluid;
  const Derby_Front = props.data.Derby_Front.childImageSharp.fluid;
  const Dress_Ocean = props.data.Dress_Ocean.childImageSharp.fluid;
  const Dress_Venutian = props.data.Dress_Venutian.childImageSharp.fluid;
  const EmpireDress_Enchanted = props.data.EmpireDress_Enchanted.childImageSharp.fluid;
  const EmpireDress_Zip = props.data.EmpireDress_Zip.childImageSharp.fluid;
  const EmprieDress_Orchids = props.data.EmprieDress_Orchids.childImageSharp.fluid;
  const Fresco_Back2 = props.data.Fresco_Back2.childImageSharp.fluid;
  const LongJacket_PLABLU = props.data.LongJacket_PLABLU.childImageSharp.fluid;
  const LongJacket_Peacock = props.data.LongJacket_Peacock.childImageSharp.fluid;
  const LongJacket_RedFlower = props.data.LongJacket_RedFlower.childImageSharp.fluid;
  const Mediteranean_Back = props.data.Mediteranean_Back.childImageSharp.fluid;
  const OrangeLilly = props.data.OrangeLilly.childImageSharp.fluid;
  const Party = props.data.Party.childImageSharp.fluid;

  return (
    <CoreLayout>
      <div className="parent">
        <div className="child"><Link to="/products/aegean-coral-ensamble"><Img fluid={Coral_Front} /></Link></div>
        <div className="child"><Link to="/"><Img fluid={OrangeLilly} /></Link></div>
        <div className="child"><Link to="/products/mediterranean-night-ensemble"><Img fluid={Mediteranean_Back} /></Link></div>
        <div className="child"><Link to="/products/party-dress"><Img fluid={Party} /></Link></div>
        <div className="child"><Link to="/products/aphrodite"><Img fluid={EmpireDress_Enchanted} /></Link></div>
        <div className="child"><Link to="/"><Img fluid={Derby_Front} /></Link></div>
        <div className="child"><Link to="/products/amphitrite-dress"><Img fluid={Dress_Ocean} /></Link></div>
        <div className="child"><Link to="/products/venusians-dress"><Img fluid={Dress_Venutian} /></Link></div>
        <div className="child"><Link to="/products/promethean-dress"><Img fluid={EmpireDress_Zip} /></Link></div>
        <div className="child"><Link to="/products/orchis-avatar-dress"><Img fluid={EmprieDress_Orchids} /></Link></div>
        <div className="child"><Link to="/products/fresco-short-jacket"><Img fluid={Fresco_Back2} /></Link></div>
        <div className="child"><Link to="/"><Img fluid={LongJacket_PLABLU} /></Link></div>
        <div className="child"><Link to="/products/peacock-jacket"><Img fluid={LongJacket_Peacock} /></Link></div>
        <div className="child"><Link to="/products/amaryllis-duster"><Img fluid={LongJacket_RedFlower} /></Link></div>
      </div>
    </CoreLayout>
  );
};

export const pageQuery = graphql`
  fragment featuredImage on File {
    childImageSharp {
      id
      ... on ImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
          # aspectRatio
          # src
          # srcSet
          # sizes
        }
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
