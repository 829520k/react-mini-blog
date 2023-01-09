import React from "react";
import styled from "styled-components";

const Wrapper = styled`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border : 1px;
  cursor: pointer;
  :hover {
    background: lightgray;
  }
`;

const ContentText = styled`
  font-size: 14px;
`;

function CommentListItem(props) {
    const { comment } = props;

    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;