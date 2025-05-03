import { Controller, Get, Post, Body, Param, Req, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthService } from '../auth/auth.service';

/**
 * Controller für die Verwaltung von Aufgaben (Tasks)
 */
@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
  ) {}

  @Get('getTasks')
  getAllTasks(@Req() req: any, @Query('status') status: string) {
    // Authentifizierungsprüfung für alle Methoden
    const userId = this.authService.getUserIdFromRequest(req);
    if (userId.statusCode !== 200) return { statusCode: userId.statusCode, message: userId.message };
    return this.tasksService.getAllTasks(userId.id, status);
  }

  @Post('createTask')
  createTask(@Body() body: { title: string; description?: string; status?: string }, @Req() req: any) {
        const userId = this.authService.getUserIdFromRequest(req);
    if (userId.statusCode !== 200) return { statusCode: userId.statusCode, message: userId.message };
    return this.tasksService.createTask({
      title: body.title,
      description: body.description,
      userId: userId.id,
      status: body.status,
    });
  }

  @Get('getTask:id')
  getTaskById(@Param('id') id: string) {
    // Beachte: Keine Benutzer-ID-Prüfung - potentielles Sicherheitsproblem?
    return this.tasksService.getTaskById(id);
  }

  @Post('updateTask')
  updateTask(
    @Query('id') id: string,
    @Body() body: { title?: string; description?: string; status?: string },
    @Req() req: any,
  ) {
        const userId = this.authService.getUserIdFromRequest(req);
    if (userId.statusCode !== 200) return { statusCode: userId.statusCode, message: userId.message };
    return this.tasksService.updateTask(id, body);
  }
}
