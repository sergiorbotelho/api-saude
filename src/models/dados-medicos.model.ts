import {Model, model, property} from '@loopback/repository';

@model()
export class DadosMedicos extends Model {

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


  constructor(data?: Partial<DadosMedicos>) {
    super(data);
  }
}

export interface DadosMedicosRelations {
  // describe navigational properties here
}

export type DadosMedicosWithRelations = DadosMedicos & DadosMedicosRelations;
