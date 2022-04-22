import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'src/core/database/data-services/entity.repository';
import { Gato, GatoDocument } from './entities/gato.entity';
import { Model } from 'mongoose';

@Injectable()
export class GatosService extends EntityRepository<GatoDocument> {
  constructor(
    @InjectModel(Gato.name)
    private readonly _model: Model<GatoDocument>,
  ) {
    super(_model);
  }

  remove(id: string) {
    return this._model.deleteOne({ _id: id });
  }
}
