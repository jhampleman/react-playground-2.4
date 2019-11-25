import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

//import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
//import { graphql } from 'graphql';

//import RepositoryList from './RepositoryList';
import Loading from './Loading';

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
    login
    name
  }
}
`;

export const Profile = () => (
  <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
    {({ data, loading }) => {
      const { viewer } = data;

      if (loading || !viewer) {
        return <Loading />;
      }

      //console.log(viewer.name);
      return <h3 className="orange">From GitHub: {viewer.name}</h3>;
    }}
  </Query>
);
export default Profile;
