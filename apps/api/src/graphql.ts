
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateScoreInput {
    characterId: string;
    rank: number;
    score: number;
    kills: number;
    deaths: number;
    assists: number;
    healing: number;
    damage: number;
}

export interface Character {
    id: string;
    pseudo: string;
    scores: Score[];
}

export interface Company {
    id: string;
    name: string;
    characters: Character[];
}

export interface IQuery {
    companies(): Company[] | Promise<Company[]>;
    company(id: string): Nullable<Company> | Promise<Nullable<Company>>;
    scores(): Score[] | Promise<Score[]>;
    score(id: number): Nullable<Score> | Promise<Nullable<Score>>;
}

export interface IMutation {
    createCompany(name: string): Nullable<Company> | Promise<Nullable<Company>>;
    updateCompany(id: string, name: string): Nullable<Company> | Promise<Nullable<Company>>;
    deleteCompany(id: string): Nullable<Company> | Promise<Nullable<Company>>;
    createScore(input: CreateScoreInput): Score | Promise<Score>;
    removeScore(id: number): Nullable<Score> | Promise<Nullable<Score>>;
}

export interface Score {
    id: string;
    rank: number;
    score: number;
    kills: number;
    deaths: number;
    assists: number;
    healing: number;
    damage: number;
    character: Character;
}

type Nullable<T> = T | null;
