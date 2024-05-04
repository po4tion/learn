import { Module } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';
import { CpuService } from './cpu.service';

@Module({
  providers: [CpuService],
  imports: [PowerService],
})
export class CpuModule {}
