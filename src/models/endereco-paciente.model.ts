import {Model, model, property} from '@loopback/repository';

@model()
export class EnderecoPaciente extends Model {

  @property({
    type: 'string',
  })
  street_type?: string;

  @property({
    type: 'string',
  })
  street?: string;

  @property({
    type: 'number',
  })
  number?: number;

  @property({
    type: 'string',
  })
  district?: string;

  @property({
    type: 'number',
  })
  zip_code?: number;

  @property({
    type: 'string',
  })
  complement?: string;

  @property({
    type: 'string',
  })
  reference_point?: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'string',
  })
  county?: string;


  constructor(data?: Partial<EnderecoPaciente>) {
    super(data);
  }
}

export interface EnderecoPacienteRelations {
  // describe navigational properties here
}

export type EnderecoPacienteWithRelations = EnderecoPaciente & EnderecoPacienteRelations;
