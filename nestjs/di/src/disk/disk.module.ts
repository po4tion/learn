import { Module } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
import { DiskService } from './disk.service';

@Module({
  providers: [DiskService],
  imports: [PowerService],
})
export class DiskModule {}
