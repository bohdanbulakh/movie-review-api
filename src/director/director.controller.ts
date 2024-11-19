import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DirectorService } from './director.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { DirectorByIdPipe } from '../pipes/director-by-id.pipe';

@Controller('directors')
export class DirectorController {
  constructor (private readonly directorService: DirectorService) {}

  @Post()
  create (@Body() createDirectorDto: CreateDirectorDto) {
    return this.directorService.create(createDirectorDto);
  }

  @Get()
  findAll () {
    return this.directorService.findAll();
  }

  @Get(':id')
  findOne (@Param('id', DirectorByIdPipe) id: string) {
    return this.directorService.findOne(id);
  }

  @Patch(':id')
  update (
    @Param('id') id: string,
    @Body() updateDirectorDto: UpdateDirectorDto
  ) {
    return this.directorService.update(id, updateDirectorDto);
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.directorService.remove(id);
  }
}
