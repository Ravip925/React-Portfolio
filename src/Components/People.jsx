import styled from "styled-components";

const PeopleWrapper = styled.section`
  padding: 4rem;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 1.5;
      text-align: center;
    }
  }
`;

const People = () => {
  return (
    <PeopleWrapper>
      <h2>People</h2>
      <ul>
        <li>
          <img src="#" alt="Person 1" />
          <h3>Person 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <img src="#" alt="Person 2" />
          <h3>Person 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
        <li>
          <img src="#" alt="Person 3" />
          <h3>Person 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </li>
      </ul>
    </PeopleWrapper>
  );
};

export default People;
