import React from 'react';
import Image from '@utils/local-img';

const FeatureGIFs = ({ data }) => {
  return (
    <div className="-space-y-2 my-6">
      {data.map(({ src, title, description }, index) => (
        <div className="flex w-full even:flex-row-reverse">
          <Image src={src} figureClassName="w-1/2" />
          <div
            className={`flex items-center w-1/2 ${
              index % 2 === 1 ? 'pr-10' : 'pl-10'
            }`}
          >
            <div className="flex flex-col space-y-2">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureGIFs;
