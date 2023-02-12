import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!){
    characters(filter:{name: $name}) {
      results { 
        location {
          name 
        }
      }
    }
  }
`;
export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  return {
    error,
    data,
    loading,
  };
};
