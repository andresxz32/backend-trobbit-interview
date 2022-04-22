import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { IGenericRepository } from '../abstracts/generic-repository-abstract';

export abstract class EntityRepository<T extends Document>
  implements IGenericRepository<T>
{
  constructor(protected readonly _entityModel: Model<T>) {}

  async findOne(
    entityFilterQuery: FilterQuery<T>,
    projection?: Record<string, unknown>,
  ): Promise<T | null> {
    return this._entityModel.findOne(entityFilterQuery, projection);
  }

  async find(entityFilterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this._entityModel.find(entityFilterQuery);
  }

  async create(createEntityData: unknown): Promise<T> {
    return this._entityModel.create(createEntityData);
  }

  async findOneAndUpdate(
    entityFilterQuery: FilterQuery<T>,
    updateEntityData: UpdateQuery<unknown>,
  ): Promise<T | null> {
    return this._entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      {
        new: true,
      },
    );
  }
}
