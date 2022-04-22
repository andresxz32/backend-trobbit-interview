import { FilterQuery, UpdateQuery } from 'mongoose';

export abstract class IGenericRepository<T> {
  abstract findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null>;

  abstract find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null>;

  abstract create(createEntityData: unknown): Promise<T>;

  abstract findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null>;
}
