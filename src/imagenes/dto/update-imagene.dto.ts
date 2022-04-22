import { PartialType } from '@nestjs/mapped-types';
import { CreateImageneDto } from './create-imagene.dto';

export class UpdateImageneDto extends PartialType(CreateImageneDto) {}
