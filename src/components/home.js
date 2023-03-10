import styled from "styled-components"
import { Movie } from "./movie";
import { Button } from "../styles/componentStyles/buttonStyle";
import { Text } from "../styles/componentStyles/textStyle";
import { useState } from "react";
import { GetMovie } from "../services/movies.api";

export function Home() {
  const [isDisabled, setIsdisabled] = useState(false);
  const [movie, setMovie] = useState();

  async function handleForm(e) {
    e.preventDefault();
    setIsdisabled(true);
    const movieName = e.target[0].value;

    if (movieName.length < 1) {
      setIsdisabled(false);
      alert("Insert a valid movie name");
      return;
    }

    try {
      const result = await GetMovie(movieName);
      setMovie(result.data);
      setIsdisabled(false);
    } catch (error) {
      setIsdisabled(false);
      alert("Insert a valid movie name");
      console.error(`error ${error.response.status}`, error.response.data);
    }
  }

  return (
    <Wrapper>
      <Head>
        <Title>Cinefinder</Title>
        <Text textSize={"small"}>What will we watch today?</Text>
        <div>
          <Form onSubmit={handleForm}>
            <input
              type="text"
              name="movie"
              placeholder="Movie Name"
              disabled={isDisabled}
            />
            <Button disabled={isDisabled}>Search</Button>
          </Form>
        </div>
      </Head>
      <Movie movie={movie} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #EBCBC9;
  width: 100vw;
  height: 100vh;
  display:flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: 340px) {
    overflow: scroll;
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  div{
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: 'Italianno', cursive;
  font-size: 60px;
  margin: 30px 0;
`;

const Form = styled.form`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    width: 55%;
    height: 35px;
    border: solid 1px #d5d5d5;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 5px;
    margin-right: 15px;
  }
`