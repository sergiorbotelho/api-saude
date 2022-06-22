import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BdPacienteDataSource} from '../datasources';
import {Paciente, PacienteRelations} from '../models';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype.id,
  PacienteRelations
> {
  constructor(
    @inject('datasources.bd_paciente') dataSource: BdPacienteDataSource,
  ) {
    super(Paciente, dataSource);
  }
}
