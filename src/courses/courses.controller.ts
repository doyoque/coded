import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './../dto/create-course.dto';

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

    @Post()
    async addCourse(@Body() createCourse: CreateCourseDto) {
        return await this.coursesService.addCourse(createCourse);
    }

    @Delete()
    async deleteCourse(@Query() query) {
        return await this.coursesService.deleteCourse(query.courseId);
    }
}
