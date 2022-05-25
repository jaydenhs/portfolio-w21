import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Quote = ({ children }) => {
  return (
    <div className="my-6 relative block">
      <QuoteText>{children}</QuoteText>
    </div>
  );
};

const QuoteText = styled.blockquote`
  ${tw`text-primary text-xl leading-relaxed mb-8 pt-24`}

  &:before {
    content: '';
    border-radius: 50%;
    ${tw`absolute border-l-4 border-solid border-primary-light h-full -left-16 top-0 w-1/5`}
  }

  &:after {
    content: '❞';
    ${tw`rounded-full text-background bg-primary opacity-60 text-5xl w-16 h-16 text-center absolute left-1/2 transform -translate-x-1/2 top-4 pt-5`}
  }
`;

export default Quote;
