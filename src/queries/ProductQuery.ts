import gql from "graphql-tag";
const PRODUCTS_QUERY = gql`
  query launchList($after: String) {
    launches(after: $after) {
      cursor
      hasMore
      launches {
        id
        isBooked
        rocket {
          id
          name
        }
        mission {
          name
          missionPatch
        }
      }
    }
  }
`;
export default PRODUCTS_QUERY;

// const PRODUCTS_QUERY = gql`
//   query {
//     products {
//       id
//       name
//       price
//       description
//       createdAt
//       image {
//         id
//         url
//       }
//     }
//   }
// `;
// export default PRODUCTS_QUERY;
