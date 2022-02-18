import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Character = {
  __typename?: 'Character';
  id: Scalars['ID'];
  pseudo: Scalars['String'];
  scores: Array<Score>;
};

export type Company = {
  __typename?: 'Company';
  characters: Array<Character>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateScoreInput = {
  assists: Scalars['Int'];
  characterId: Scalars['ID'];
  damage: Scalars['Int'];
  deaths: Scalars['Int'];
  healing: Scalars['Int'];
  kills: Scalars['Int'];
  rank: Scalars['Int'];
  score: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany?: Maybe<Company>;
  createScore: Score;
  deleteCompany?: Maybe<Company>;
  removeScore?: Maybe<Score>;
  updateCompany?: Maybe<Company>;
};


export type MutationCreateCompanyArgs = {
  name: Scalars['String'];
};


export type MutationCreateScoreArgs = {
  input: CreateScoreInput;
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveScoreArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateCompanyArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  company?: Maybe<Company>;
  score?: Maybe<Score>;
  scores: Array<Score>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryScoreArgs = {
  id: Scalars['Int'];
};

export type Score = {
  __typename?: 'Score';
  assists: Scalars['Int'];
  character: Character;
  damage: Scalars['Int'];
  deaths: Scalars['Int'];
  healing: Scalars['Int'];
  id: Scalars['ID'];
  kills: Scalars['Int'];
  rank: Scalars['Int'];
  score: Scalars['Int'];
};

export type CompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type CompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string }> };

export type CompanyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CompanyQuery = { __typename?: 'Query', company?: { __typename?: 'Company', name: string, characters: Array<{ __typename?: 'Character', id: string }> } | null };

export type CompanyMembersQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CompanyMembersQuery = { __typename?: 'Query', company?: { __typename?: 'Company', characters: Array<{ __typename?: 'Character', id: string, pseudo: string }> } | null };


export const CompaniesDocument = gql`
    query companies {
  companies {
    id
    name
  }
}
    `;
export const CompanyDocument = gql`
    query Company($id: ID!) {
  company(id: $id) {
    name
    characters {
      id
    }
  }
}
    `;
export const CompanyMembersDocument = gql`
    query CompanyMembers($id: ID!) {
  company(id: $id) {
    characters {
      id
      pseudo
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    companies(variables?: CompaniesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CompaniesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompaniesQuery>(CompaniesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'companies');
    },
    Company(variables: CompanyQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CompanyQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompanyQuery>(CompanyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Company');
    },
    CompanyMembers(variables: CompanyMembersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CompanyMembersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompanyMembersQuery>(CompanyMembersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CompanyMembers');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;