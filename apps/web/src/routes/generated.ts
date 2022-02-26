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


export type CompanyQuery = { __typename?: 'Query', company?: { __typename?: 'Company', name: string, characters: Array<{ __typename?: 'Character', id: string, pseudo: string }> } | null, companyWars: Array<{ __typename?: 'War', id: string, createdAt: string, attacker: { __typename?: 'Company', id: string, name: string }, defender: { __typename?: 'Company', id: string, name: string }, winner: { __typename?: 'Company', id: string }, scores: Array<{ __typename?: 'Score', damage: number, healing: number, character: { __typename?: 'Character', company: { __typename?: 'Company', id: string } } }> }> };

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
      pseudo
    }
  }
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
export const CharacterDocument = gql`
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
export const CompanyWarsDocument = gql`
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
export const WarDetailsDocument = gql`
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
    },
    Character(variables: CharacterQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CharacterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CharacterQuery>(CharacterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Character');
    },
    CompanyWars(variables: CompanyWarsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CompanyWarsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CompanyWarsQuery>(CompanyWarsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CompanyWars');
    },
    WarDetails(variables: WarDetailsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<WarDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<WarDetailsQuery>(WarDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'WarDetails');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;