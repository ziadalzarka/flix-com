import React from "react";
import styled from "styled-components";

const CardOverview = styled.div`
  /* children */
  display: none;
  align-items: end;
  flex-direction: column;
  justify-content: flex-end;

  /* positioning */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: (0, 0, 0, 0);
  transition: background-color 1s ease;
`;

const Card = styled.div`
  position: relative;
  &:hover ${CardOverview} {
    display: flex;
    background-color: rgba(0, 0, 0, 0.54);
  }
  height: 25em;
  overflow: hidden;
  margin-bottom: 1em;
  cursor: pointer;
`;

const CardImage = styled.object`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.h2`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
`;

const CardDate = styled.p`
  color: #f6f6f8;
  font-size: 1em;
  font-weight: bold;
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-bottom: 1em;
`;

const CardDescription = styled.p`
  color: white;
  font-size: 1em;
  font-weight: normal;
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-bottom: 1em;
`;

export default function MediaCard({ media }) {
  return (
    <Card>
      <CardImage data={media.cover_image} />
      <CardOverview>
        <CardTitle>{media.original_name || media.original_title}</CardTitle>
        <CardDate>
          Released on: {media.release_date || media.first_air_date}
        </CardDate>
        <CardDescription>{media.overview}</CardDescription>
      </CardOverview>
    </Card>
  );
}
