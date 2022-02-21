import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
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
  company: Company;
  id: Scalars['ID'];
  pseudo: Scalars['String'];
  scores: Array<Score>;
  war: War;
};

export type Company = {
  __typename?: 'Company';
  attacks: Array<War>;
  characters: Array<Character>;
  defenses: Array<War>;
  id: Scalars['ID'];
  name: Scalars['String'];
  wins: Array<War>;
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
  character: Character;
  companies: Array<Company>;
  company?: Maybe<Company>;
  companyWars: Array<War>;
  score?: Maybe<Score>;
  scores: Array<Score>;
  war: War;
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyArgs = {
  id: Scalars['ID'];
};


export type QueryCompanyWarsArgs = {
  id: Scalars['ID'];
};


export type QueryScoreArgs = {
  id: Scalars['Int'];
};


export type QueryWarArgs = {
  id: Scalars['ID'];
};

export type Score = {
  __typename?: 'Score';
  assists: Scalars['Int'];
  character: Character;
  createdAt: Scalars['String'];
  damage: Scalars['Int'];
  deaths: Scalars['Int'];
  healing: Scalars['Int'];
  id: Scalars['ID'];
  kills: Scalars['Int'];
  rank: Scalars['Int'];
  score: Scalars['Int'];
  war: War;
};

export type War = {
  __typename?: 'War';
  attacker: Company;
  createdAt: Scalars['String'];
  defender: Company;
  id: Scalars['ID'];
  scores: Array<Score>;
  winner: Company;
};

export type CompaniesQueryVariables = Exact<{ [key: string]: never; }>;


export type CompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', id: string, name: string }> };

export type CompanyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CompanyQuery = { __typename?: 'Query', company?: { __typename?: 'Company', name: string, characters: Array<{ __typename?: 'Character', id: string }>, attacks: Array<{ __typename?: 'War', id: string }>, defenses: Array<{ __typename?: 'War', id: string }> } | null };

export type CompanyMembersQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CompanyMembersQuery = { __typename?: 'Query', company?: { __typename?: 'Company', characters: Array<{ __typename?: 'Character', id: string, pseudo: string }> } | null };

export type CharacterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CharacterQuery = { __typename?: 'Query', character: { __typename?: 'Character', id: string, pseudo: string, company: { __typename?: 'Company', id: string, name: string }, scores: Array<{ __typename?: 'Score', id: string, kills: number, deaths: number, assists: number, damage: number, healing: number, createdAt: string, war: { __typename?: 'War', id: string, attacker: { __typename?: 'Company', id: string, name: string }, defender: { __typename?: 'Company', id: string, name: string }, winner: { __typename?: 'Company', id: string, name: string } } }> } };

export type CompanyWarsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CompanyWarsQuery = { __typename?: 'Query', companyWars: Array<{ __typename?: 'War', id: string, createdAt: string, attacker: { __typename?: 'Company', id: string, name: string }, defender: { __typename?: 'Company', id: string, name: string }, winner: { __typename?: 'Company', id: string }, scores: Array<{ __typename?: 'Score', damage: number, healing: number, character: { __typename?: 'Character', company: { __typename?: 'Company', id: string } } }> }>, company?: { __typename?: 'Company', name: string } | null };

export type WarDetailsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WarDetailsQuery = { __typename?: 'Query', war: { __typename?: 'War', scores: Array<{ __typename?: 'Score', rank: number, score: number, kills: number, deaths: number, assists: number, damage: number, healing: number, character: { __typename?: 'Character', id: string, pseudo: string } }> } };


export const CompaniesDocument = `
    query companies {
  companies {
    id
    name
  }
}
    `;
export const useCompaniesQuery = <
      TData = CompaniesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: CompaniesQueryVariables,
      options?: UseQueryOptions<CompaniesQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CompaniesQuery, TError, TData>(
      variables === undefined ? ['companies'] : ['companies', variables],
      fetcher<CompaniesQuery, CompaniesQueryVariables>(client, CompaniesDocument, variables, headers),
      options
    );
export const CompanyDocument = `
    query Company($id: ID!) {
  company(id: $id) {
    name
    characters {
      id
    }
    attacks {
      id
    }
    defenses {
      id
    }
  }
}
    `;
export const useCompanyQuery = <
      TData = CompanyQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: CompanyQueryVariables,
      options?: UseQueryOptions<CompanyQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CompanyQuery, TError, TData>(
      ['Company', variables],
      fetcher<CompanyQuery, CompanyQueryVariables>(client, CompanyDocument, variables, headers),
      options
    );
export const CompanyMembersDocument = `
    query CompanyMembers($id: ID!) {
  company(id: $id) {
    characters {
      id
      pseudo
    }
  }
}
    `;
export const useCompanyMembersQuery = <
      TData = CompanyMembersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: CompanyMembersQueryVariables,
      options?: UseQueryOptions<CompanyMembersQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CompanyMembersQuery, TError, TData>(
      ['CompanyMembers', variables],
      fetcher<CompanyMembersQuery, CompanyMembersQueryVariables>(client, CompanyMembersDocument, variables, headers),
      options
    );
export const CharacterDocument = `
    query Character($id: ID!) {
  character(id: $id) {
    id
    pseudo
    company {
      id
      name
    }
    scores {
      id
      kills
      deaths
      assists
      damage
      healing
      war {
        id
        attacker {
          id
          name
        }
        defender {
          id
          name
        }
        winner {
          id
          name
        }
      }
      createdAt
    }
  }
}
    `;
export const useCharacterQuery = <
      TData = CharacterQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: CharacterQueryVariables,
      options?: UseQueryOptions<CharacterQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CharacterQuery, TError, TData>(
      ['Character', variables],
      fetcher<CharacterQuery, CharacterQueryVariables>(client, CharacterDocument, variables, headers),
      options
    );
export const CompanyWarsDocument = `
    query CompanyWars($id: ID!) {
  companyWars(id: $id) {
    id
    createdAt
    attacker {
      id
      name
    }
    defender {
      id
      name
    }
    winner {
      id
    }
    scores {
      damage
      healing
      character {
        company {
          id
        }
      }
    }
  }
  company(id: $id) {
    name
  }
}
    `;
export const useCompanyWarsQuery = <
      TData = CompanyWarsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: CompanyWarsQueryVariables,
      options?: UseQueryOptions<CompanyWarsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CompanyWarsQuery, TError, TData>(
      ['CompanyWars', variables],
      fetcher<CompanyWarsQuery, CompanyWarsQueryVariables>(client, CompanyWarsDocument, variables, headers),
      options
    );
export const WarDetailsDocument = `
    query WarDetails($id: ID!) {
  war(id: $id) {
    scores {
      rank
      character {
        id
        pseudo
      }
      score
      kills
      deaths
      assists
      damage
      healing
    }
  }
}
    `;
export const useWarDetailsQuery = <
      TData = WarDetailsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: WarDetailsQueryVariables,
      options?: UseQueryOptions<WarDetailsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<WarDetailsQuery, TError, TData>(
      ['WarDetails', variables],
      fetcher<WarDetailsQuery, WarDetailsQueryVariables>(client, WarDetailsDocument, variables, headers),
      options
    );