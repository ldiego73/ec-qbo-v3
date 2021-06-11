import React, { useEffect } from "react";
import styled from "styled-components";

const AccordionContent = styled.div`
  width: 100%;
  background: #fafafa;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
`;

const AccordionHeader = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #283342;
  cursor: pointer;
`;

export const Accordion = ({ header, open, children, onOpen, onClick }) => {
  useEffect(() => {
    if (open && typeof onOpen === "function") onOpen();
  }, [open]);

  return (
    <AccordionContent>
      <AccordionHeader onClick={() => onClick && onClick()}>
        {header}
      </AccordionHeader>
      {open && <div>{children}</div>}
    </AccordionContent>
  );
};
