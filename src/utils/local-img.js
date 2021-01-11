import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

var re = /(?:\.([^.]+))?$/;

const Image = ({ src, alt, style, imgStyle, className }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(quality: 100) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
          original {
            src
          }
        }
      }
    }
  `);

  var extension = re.exec(`${src}`)[1];

  if (extension === 'webm') {
  } else if (extension === 'webp') {
    const src = allImageSharp.nodes.find((n) => n.fluid.originalName === src)
      .original.src;
    return <img src={src} alt={alt} style={style} className={className} />;
  } else {
    const fluid = allImageSharp.nodes.find((n) => n.fluid.originalName === src)
      .fluid;

    return (
      <figure>
        <Img
          fluid={fluid}
          alt={alt}
          style={style}
          className={className}
          imgStyle={imgStyle}
        />
      </figure>
    );
  }
};

export default Image;
