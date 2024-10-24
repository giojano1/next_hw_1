import React from "react";

const CustomService = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <div>your service number is : {params.id}</div>;
};

export default CustomService;
