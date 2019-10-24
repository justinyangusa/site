import React, { Component } from "react";
import styled from "styled-components";

const MentorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

const Block = styled.div`display: flex;
flex-direction: column;
flex-grow: 1;
justify-content: center;
`;

const MentorImage = styled.img`
    max-height: 150px;
    margin-right: 15px;
    border-radius: 10px;
    border: 1px black solid;
`;

const MentorName = styled.div`
    font-size: 22px;
    border-bottom: 5px solid black;
    display: inline-block;
    align-self: flex-start;
`;

const MentorBio = styled.div`
    font-size: 14px;
`;

const MentorsBlock = (props) => {
    return (
        <MentorWrapper>
            <MentorImage src={props.pp} />
            <Block>
                <MentorName>{props.name}</MentorName>
                <MentorBio>{props.bio}</MentorBio>
            </Block>
        </MentorWrapper>
    );
};

export default MentorsBlock;
