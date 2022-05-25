import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Image from '@utils/local-img';
import AutoLink from '@components/auto-link';

export default function MainProjectPreview({
  project: {
    frontmatter: {
      role,
      company,
      title,
      slug,
      thumbnail,
      backgroundHex
    },
  },
}) {

  return (
    <ProjectCard to={`${slug}`}>
      <VideoWrapper style={{backgroundColor: backgroundHex}}>
        <Image
          className="w-full h-full mx-auto p-8"
          src={thumbnail}
          figureClassName="w-full h-full"
          imgStyle={{ objectFit: 'contain', padding: '2rem' }}
        />
      </VideoWrapper>
      <div className="px-10 py-6 flex items-center justify-between w-full">
          <div className="flex flex-col whitespace-nowrap mr-16">
            <p className="text-lg">{role}</p>
            <h3 className="text-3xl">{company}</h3>
          </div>
          <p className="w-1/2 text-lg">{title}</p>
        </div>
    </ProjectCard>
  );
}

const VideoWrapper = styled.div`
  ${tw`z-10 w-full flex items-center rounded-t-xl h-full`}
  height: 40rem;
`;

const ProjectCard = styled(AutoLink)`
  ${tw`w-full rounded-xl transition-all duration-500 transform no-underline flex flex-col items-center bg-surface`}
  min-height: 36rem;
  box-shadow: 0px 10px 15px 0px var(--boxShadow1);

  &:hover {
    ${tw`-translate-y-1.5`}
    box-shadow: 0px 12px 17px 0px var(--boxShadow2);
  }

  &:nth-child(odd) .wave {
    //flip wave for odd project card
    ${tw`transform -scale-x-1`}
  }
`;

const Details = styled.div`
  ${tw`flex z-10 w-full`}
`;

const Wave = () => (
  <svg
    height="250"
    viewBox="0 0 1110 157"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 left-0 w-full rounded-b-xl wave"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1110 57.1148V445.002C1110 453.838 1102.84 461.002 1094 461.002H16C7.16346 461.002 0 453.838 0 445.002V63.5932C87.3285 44.6899 191.891 42.6994 296.124 40.7152C364.629 39.4111 432.993 38.1097 496.228 32.0114C533.326 28.4336 570.516 23.9378 607.591 19.456C770.027 -0.180222 930.246 -19.5483 1070.75 39.7377C1083.9 45.287 1097 51.0827 1110 57.1148Z"
      fill="hsla(var(--primaryHS) var(--normal), 85%)"
    />
  </svg>
);
