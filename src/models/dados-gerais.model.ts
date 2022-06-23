import {Model, model, property} from '@loopback/repository';

@model()
export class DadosGerais extends Model {

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  cpf: string;

  @property({
    type: 'string',
  })
  cns?: string;

  @property({
    type: 'date',
    required: true,
  })
  dt_nasc: string;
  @property({
    type: 'string',
  })
  name_social?: string;

  @property({
    type: 'string',
  })
  name_mother?: string;

  @property({
    type: 'string',
  })
  name_father?: string;

  @property({
    type: 'string',
  })
  marital_status?: string;

  @property({
    type: 'string',
  })
  race_color?: string;

  @property({
    type: 'string',
    required: true,
  })
  sex: string;
  @property({
    type: 'string',
  })
  gender_identity?: string;

  @property({
    type: 'string',
  })
  nationality?: string;
  @property({
    type: 'number',
    required: true,
  })
  contact_number: number;
  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  occupation?: string;

  @property({
    type: 'string',
  })
  schooling?: string;

  constructor(data?: Partial<DadosGerais>) {
    super(data);
  }
}

export interface DadosGeraisRelations {
  // describe navigational properties here
}

export type DadosGeraisWithRelations = DadosGerais & DadosGeraisRelations;
