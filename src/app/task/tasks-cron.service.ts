// src/tasks/task-cron.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { LessThan } from 'typeorm';
import { Task } from '../../database/entities'

@Injectable()
export class TasksCronService {
  private readonly logger = new Logger(TasksCronService.name);

  // Tâche exécutée chaque minute
  @Cron(CronExpression.EVERY_MINUTE)
  async archiveOldTasks() {
    this.logger.debug('Vérification des tâches à archiver...');

    const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000);


    // Mets à jour les tâches
    await Task.update(
      {
        isArchived: false,
        createdAt: LessThan(fifteenMinutesAgo),
      },
      {
        isArchived: true,
        archivedAt: new Date(),
      },
    );

    this.logger.debug(`tâche(s) archivées.`);
  }
}
