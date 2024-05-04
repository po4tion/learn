import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { CpuService } from './cpu.service';

@Module({
  // 모듈 안에서 서비스를 정의할 때 해당 서비스는 private임. 프로젝트 내부의 다른 곳에서 쓸 수 있게 자동으로 공유되지 않는다. 그러므로 exports에 추가하여야 한다.
  providers: [CpuService],
  imports: [PowerModule],
  exports: [CpuService],
})
export class CpuModule {}
