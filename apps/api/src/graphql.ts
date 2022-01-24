
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface Company {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface IQuery {
    companies(): Company[] | Promise<Company[]>;
    company(id: string): Nullable<Company> | Promise<Nullable<Company>>;
}

export interface IMutation {
    createCompany(name: string): Nullable<Company> | Promise<Nullable<Company>>;
    updateCompany(id: string, name: string): Nullable<Company> | Promise<Nullable<Company>>;
    deleteCompany(id: string): Nullable<Company> | Promise<Nullable<Company>>;
}

type Nullable<T> = T | null;
