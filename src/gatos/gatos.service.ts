import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Gato, GatoDocument } from './entities/gato.entity';
import { Model } from 'mongoose';

@Injectable()
export class GatosService {
  constructor(
    @InjectModel(Gato.name)
    private readonly _catModel: Model<GatoDocument>,
  ) {}

  remove(id: string) {
    return this._catModel.deleteOne({ _id: id });
  }

  create(createEntityData) {
    return this._catModel.create(createEntityData);
  }

  find(entityFilterQuery) {
    return this._catModel.find(entityFilterQuery);
  }

  findOne(entityFilterQuery, projection?) {
    return this._catModel.findOne(entityFilterQuery, projection);
  }

  update(entityFilterQuery, updateEntityData) {
    return this._catModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityData,
      {
        new: true,
      },
    );
  }
}
