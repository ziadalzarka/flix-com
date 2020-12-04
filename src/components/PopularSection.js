import React from "react";
import { useQuery } from "react-query";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getPopularMovies } from "../api/popular";
import Loading from "./Loading";
import MediaCard from "./MediaCard";
import styled from "styled-components";

const SectionTitle = styled.h2`
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 1em;
`;

export const CarouselGroupResponsive = {
  superLargeDesktop: {
    breakpoint: {
      max: 4000,
      min: 3000,
    },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function PopularSection({ title, fetcher }) {
  const { isLoading, data } = useQuery(title, fetcher);

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <Carousel responsive={CarouselGroupResponsive}>
        {data.results.map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
      </Carousel>
    </>
  );
}
