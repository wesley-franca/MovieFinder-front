import styled from "styled-components";
import { Text } from "../styles/componentStyles/textStyle";

export function Movie(props) {
  const movie = props.movie

  return (
    movie ? (
      <Wrapper>
        <MovieContent>
          <Title>{movie.Title}</Title>

          <Text fontSize={"small"}>
            {movie.Plot}
          </Text>

          <Text fontSize={"small"}>
            Actors: {movie.Actors}
          </Text>
        </MovieContent>

        <SideBar>
          <img src={movie?.Poster} alt="Imagem do filme" />
        </SideBar>
      </Wrapper>
    ) : (
      <Wrapper>
        <Text>Search for a movie for today!</Text>
      </Wrapper>
    )
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 20px;
  height: 100%;
  @media screen and (max-width: 340px) {
    flex-wrap: wrap;
  }
`;

const MovieContent = styled.div`
  h1{
    font-size: 20px;
  }
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
  @media screen and (max-width: 340px) {
    width: 100%;
}
`;

const Title = styled.h1`
  font-size: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`

const SideBar = styled.div`
  height: 50%;
  width: 40%;
  img {
    width: 100%;
    object-fit: contain;
        
  }
  @media screen and (max-width: 340px) {
    width: 100%;
  }
`;