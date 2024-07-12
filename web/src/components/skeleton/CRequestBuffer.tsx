import { SkeletonImage } from "@/lib";
import styled from "styled-components";

const CRequestBuffer = () => {
  return (
    <Container>
      <ButtonWrap>
        <SkeletonImage width="60px" height="60px" borderradius="9999px" />
        <SkeletonImage width="120px" height="30px" borderradius="5px" />
      </ButtonWrap>
      <ButtonWrap>
        <SkeletonImage width="100px" height="35px" borderradius="9px" />
        <SkeletonImage width="100px" height="35px" borderradius="9px" />
      </ButtonWrap>
    </Container>
  );
};

export default CRequestBuffer;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
