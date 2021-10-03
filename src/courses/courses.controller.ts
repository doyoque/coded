import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private coursesService: CoursesService) {}

    @Get()
    async getCourses() {
        return await this.coursesService.getCourses();
    }

    @Get(':courseId')
    async getCourse(@Param('courseId') courseId) {
        return await this.coursesService.getCourse(courseId);
    }
}
