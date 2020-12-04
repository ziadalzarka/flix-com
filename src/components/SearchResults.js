import React from "react";
import { useQuery } from "react-query";
import { SearchContainer } from "../container/SearchContainer";
import { search } from "./../api/search";
import Loading from "./Loading";
import MediaCard from "./MediaCard";
import { Container, Row, Col } from "reactstrap";

export default function SearchResults() {
  const { query } = SearchContainer.useContainer();

  const { data, isLoading } = useQuery(
    ["search-results", { query }],
    (key, { query }) => {
      if (query) {
        return search(query);
      }
    }
  );

  if (isLoading) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Loading />
        </Row>
      </Container>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <Container fluid>
      <Row>
        {data.results.map((item) => (
          <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
            <MediaCard media={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
