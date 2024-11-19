import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';
import { DirectorByIdPipe } from '../pipes/director-by-id.pipe';

@Module({
  controllers: [DirectorController],
  providers: [DirectorService, DirectorByIdPipe],
})
export class DirectorModule {}
