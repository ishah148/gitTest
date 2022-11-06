/* eslint-disable camelcase */
import { AxiosError, AxiosResponse } from 'axios';
import { RickAndMortyApiFilterQuery, RickAndMortyApiResponce } from 'models/ApiResources';
import { apiSwapiInstance } from './axios_service';

// export type RickAndMortyApiMethods<T> = typeof RickAndMortyApi[T];
export class RickAndMortyApi {
  static async getAllCharacters(page?: number) {
    const responce = await apiSwapiInstance.get<RickAndMortyApiResponce>(
      `/character?page=${page || 1}`
    );
    return {
      status: responce.status,
      data: responce.data,
      responce,
    };
  }
  static async getSingleCharacters(id: number) {
    const responce = await apiSwapiInstance.get<RickAndMortyApiResponce>(`/location/${id}`);
    return {
      status: responce.status,
      data: responce.data,
      responce,
    };
  }
  static async getFilteredCharacters(
    page: number,
    { name, gender, species, status, type }: RickAndMortyApiFilterQuery
  ) {
    const responce = await apiSwapiInstance.get<RickAndMortyApiResponce>(
      `/character/?page=${page || 1}&name=${name || ''}&status=${status || ''}&gender=${
        gender || ''
      }`
    );
    return {
      status: responce.status,
      data: responce.data,
      responce,
    };
  }
}

// type b = ReturnType<typeof RickAndMortyApi.getAllCharacters>;
// type c = typeof RickAndMortyApi.getAllCharacters;
// type a = Parameters<typeof RickAndMortyApi.getAllCharacters>;
// type HelloReturn = ReturnType<typeof RickAndMortyApi.getAllCharacters>; // 'World'
// // type nt = (...args: a) => HelloReturn; // working
// type nt = (
//   ...args: Parameters<typeof RickAndMortyApi.getAllCharacters>
// ) => ReturnType<typeof RickAndMortyApi.getAllCharacters>;

// function test<T>(...args: Parameters<typeof T>): ReturnType<typeof T> {}

export type xx =
  | typeof RickAndMortyApi.getAllCharacters
  | typeof RickAndMortyApi.getFilteredCharacters;
