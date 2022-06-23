import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Paciente} from '../models';
import {PacienteRepository} from '../repositories';
import {DadosGerais} from './../models/dados-gerais.model';
import {DadosMedicos} from './../models/dados-medicos.model';
import {EnderecoPaciente} from './../models/endereco-paciente.model';

export class PacienteController {
  constructor(
    @repository(PacienteRepository)
    public pacienteRepository : PacienteRepository,
  ) {}

  @post('/paciente')
  @response(200, {
    description: 'Paciente model instance',
    content: {'application/json': {schema: getModelSchemaRef(Paciente)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Paciente, {
            title: 'NewPaciente',
            exclude: ['id'],
          }),
        },
      },
    })
    paciente: Omit<Paciente, 'id'>,
  ): Promise<Paciente> {
    return this.pacienteRepository.create(paciente);
  }

  @get('/paciente/count')
  @response(200, {
    description: 'Paciente model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Paciente) where?: Where<Paciente>,
  ): Promise<Count> {
    return this.pacienteRepository.count(where);
  }

  @get('/paciente')
  @response(200, {
    description: 'Array of Paciente model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Paciente, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Paciente) filter?: Filter<Paciente>,
  ): Promise<Paciente[]> {
    return this.pacienteRepository.find(filter);
  }

  @patch('/paciente')
  @response(200, {
    description: 'Paciente PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Paciente, {partial: true}),
        },
      },
    })
    paciente: Paciente,
    @param.where(Paciente) where?: Where<Paciente>,
  ): Promise<Count> {
    return this.pacienteRepository.updateAll(paciente, where);
  }

  @get('/paciente/{id}')
  @response(200, {
    description: 'Paciente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Paciente, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Paciente, {exclude: 'where'}) filter?: FilterExcludingWhere<Paciente>
  ): Promise<Paciente> {
    return this.pacienteRepository.findById(id, filter);
  }

  @patch('/paciente/{id}')
  @response(204, {
    description: 'Paciente PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Paciente, {partial: true}),
        },
      },
    })
    paciente: Paciente,
  ): Promise<void> {
    await this.pacienteRepository.updateById(id, paciente);
  }

  @put('/paciente/{id}')
  @response(204, {
    description: 'Paciente PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() paciente: Paciente,
  ): Promise<void> {
    await this.pacienteRepository.replaceById(id, paciente);
  }

  @del('/paciente/{id}')
  @response(204, {
    description: 'Paciente DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pacienteRepository.deleteById(id);
  }

  @get('/paciente/{id}/endereco')
  @response(200, {
    description: 'Paciente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Paciente, {includeRelations: true}),
      },
    },
  })
  async findEnderecoById(
    @param.path.string('id') id: string,
    @param.filter(Paciente, {exclude: 'where'}) filter?: FilterExcludingWhere<Paciente>
  ): Promise<EnderecoPaciente> {
    let paciente = await this.pacienteRepository.findById(id, filter);
    let endereco = new EnderecoPaciente()
    endereco.street = paciente.street;
    endereco.complement = paciente.complement;
    endereco.number = paciente.number;
    endereco.reference_point = paciente.reference_point;
    endereco.state = paciente.state;
    endereco.street_type = paciente.street_type;
    endereco.zip_code = paciente.zip_code;
    endereco.district = paciente.district;
    endereco.state = paciente.state;
    return endereco;
  }

  @get('/paciente/{id}/dadosMedicos')
  @response(200, {
    description: 'Paciente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Paciente, {includeRelations: true}),
      },
    },
  })
  async findDadosMedicosById(
    @param.path.string('id') id: string,
    @param.filter(Paciente, {exclude: 'where'}) filter?: FilterExcludingWhere<Paciente>
  ): Promise<DadosMedicos> {
    let paciente = await this.pacienteRepository.findById(id, filter);
    let dadosMedicos = new DadosMedicos()
    dadosMedicos.blood_type = paciente.blood_type;
    dadosMedicos.patient_is_cardiac = paciente.patient_is_cardiac;
    dadosMedicos.patient_is_diabetic = paciente.patient_is_diabetic;
    dadosMedicos.weight = paciente.weight;
    dadosMedicos.height = paciente.height;
    dadosMedicos.feeding_path = paciente.feeding_path;
    dadosMedicos.cid_main = paciente.cid_main;
    dadosMedicos.cid_secondary = paciente.cid_secondary;
    dadosMedicos.cid_seondary2 = paciente.cid_seondary2;
    dadosMedicos.patients_condition = paciente.patients_condition;
    dadosMedicos.drug_causes_allergy_patient = paciente.drug_causes_allergy_patient;
    dadosMedicos.patient_continuous_medication = paciente.patient_continuous_medication;
    dadosMedicos.surgery_patient_had =  paciente.surgery_patient_had;
    dadosMedicos.assistive_devices_patient_life = paciente.assistive_devices_patient_life;
    return dadosMedicos;
  }

  @get('/paciente/{id}/dadosGerais')
  @response(200, {
    description: 'Paciente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Paciente, {includeRelations: true}),
      },
    },
  })
  async findDadosPacienteById(
    @param.path.string('id') id: string,
    @param.filter(Paciente, {exclude: 'where'}) filter?: FilterExcludingWhere<Paciente>
  ): Promise<DadosGerais> {
    let paciente = await this.pacienteRepository.findById(id, filter);
    let dadosGerais = new DadosGerais()
    dadosGerais.name = paciente.name;
    dadosGerais.cpf = paciente.cpf;
    dadosGerais.cns = paciente.cns;
    dadosGerais.dt_nasc = paciente.dt_nasc;
    dadosGerais.name_social = paciente.name_social;
    dadosGerais.name_mother = paciente.name_mother;
    dadosGerais.name_father = paciente.name_father;
    dadosGerais.marital_status = paciente.marital_status;
    dadosGerais.race_color = paciente.race_color;
    dadosGerais.sex = paciente.sex;
    dadosGerais.gender_identity = paciente.gender_identity;
    dadosGerais.nationality = paciente.nationality;
    dadosGerais.contact_number = paciente.contact_number;
    dadosGerais.email = paciente.email;
    dadosGerais.occupation = paciente.occupation;
    dadosGerais.schooling = paciente.schooling;
    return dadosGerais;
  }


}


