import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Paciente} from '../models';
import {PacienteRepository} from '../repositories';

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
}
