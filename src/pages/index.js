import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';
import Layout from '@components/layout';
import MainProjectPreview from '@components/main-project-preview';
import AdditionalProjectPreview from '@components/additional-project-preview';
import Hero from '@components/hero';
import styled from 'styled-components';

const IndexPage = (props) => {
  const mainProjects = props.data.main.edges;
  const additionalProjects = props.data.additional.edges;
  return (
    <Layout title="Portfolio">
      <Hero />

      <h1 className="mb-5">Work</h1>
      <MainProjectPreviewWrapper>
        {mainProjects.map(({ node }, i) => (
          <MainProjectPreview project={node} key={i} />
        ))}
      </MainProjectPreviewWrapper>

      <h1 className="mb-5">Additional Projects</h1>

      <AdditionalProjectPreviewWrapper>
        {additionalProjects.map(({ node }, i) => (
          <AdditionalProjectPreview project={node} key={i} />
        ))}
      </AdditionalProjectPreviewWrapper>
    </Layout>
  );
};

const MainProjectPreviewWrapper = styled.div.attrs({
  className: 'space-y-4 mb-10',
})``;

const AdditionalProjectPreviewWrapper = styled.div`
  ${tw`flex justify-between`}
`;

export const pageQuery = graphql`
  query {
    main: allMdx(
      sort: { fields: frontmatter___rank, order: ASC }
      filter: { frontmatter: { rank: { ne: "0" }, section: { eq: "Main" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            category
            tags
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
    additional: allMdx(
      sort: { fields: frontmatter___rank, order: ASC }
      filter: {
        frontmatter: { rank: { ne: "0" }, section: { eq: "Additional" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            description
            category
            tags
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
