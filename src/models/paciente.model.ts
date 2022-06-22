import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Paciente extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

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

//
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

  @property({
    type: 'string',
    required: true,
  })
  blood_type: string;

  @property({
    type: 'string',
    required: true,
  })
  patient_is_cardiac: string;

  @property({
    type: 'string',
    required: true,
  })
  patient_is_diabetic: string;

  @property({
    type: 'number',
    required: true,
  })
  weight: number;

  @property({
    type: 'number',
    required: true,
  })
  height: number;

  @property({
    type: 'string',
    required: true,
  })
  feeding_path: string;

  @property({
    type: 'number',
    required: true,
  })
  cid_main: number;

  @property({
    type: 'number',
  })
  cid_secondary?: number;

  @property({
    type: 'number',
  })
  cid_seondary2?: number;

  @property({
    type: 'string',
    required: true,
  })
  patients_condition: string;

  @property({
    type: 'string',
  })
  drug_causes_allergy_patient?: string;

  @property({
    type: 'string',
  })
  patient_continuous_medication?: string;

  @property({
    type: 'string',
  })
  surgery_patient_had?: string;

  @property({
    type: 'string',
  })
  assistive_devices_patient_life?: string;

  // @property({
  //   type: 'buffer',
  //   required: true,
  // })
  // term_commitment: Buffer;

  // @property({
  //   type: 'buffer',
  //   required: true,
  // })
  // consent_form: Buffer;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Paciente>) {
    super(data);
  }
}

export interface PacienteRelations {
  // describe navigational properties here
}

export type PacienteWithRelations = Paciente & PacienteRelations;
