import { commdata } from "@/constants/community";
import { AllCommunityContainer } from "@/styles/components/styled";
import React from "react";
import AllContent from "./AllContent";
import { useRouter } from "next/router";
import { Not_Found_404 } from "@/lib";

const All = () => {
  const router = useRouter();
  const { query } = router.query;

  const Queried = commdata.filter((cm) =>
    cm.name.toLowerCase().includes(query as string)
  );
  const returnedData = query ? Queried : commdata;
  const not_found = returnedData.length < 1;
  return (
    <AllCommunityContainer>
      {not_found ? (
        <Not_Found_404 style={{ height: "70vh" }} />
      ) : (
        returnedData.map((comm, index) => (
          <AllContent key={index} comm={comm} />
        ))
      )}
    </AllCommunityContainer>
  );
};

export default All;
