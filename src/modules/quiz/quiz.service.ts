import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  @Get('/')
  getAllQuiz() {
    return [1, 3, 4, 5];
  }
}
