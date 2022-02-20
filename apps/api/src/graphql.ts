
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
    war: War;
    company: Company;
}

export interface IQuery {
    character(id: string): Character | Promise<Character>;
    companies(): Company[] | Promise<Company[]>;
    company(id: string): Nullable<Company> | Promise<Nullable<Company>>;
    companyWars(id: string): War[] | Promise<War[]>;
    scores(): Score[] | Promise<Score[]>;
    score(id: number): Nullable<Score> | Promise<Nullable<Score>>;
    war(id: string): War | Promise<War>;
}

export interface Company {
    id: string;
    name: string;
    characters: Character[];
    attacks: War[];
    defenses: War[];
    wins: War[];
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
    war: War;
    createdAt: string;
}

export interface War {
    id: string;
    attacker: Company;
    defender: Company;
    scores: Score[];
    winner: Company;
    createdAt: string;
}

type Nullable<T> = T | null;
