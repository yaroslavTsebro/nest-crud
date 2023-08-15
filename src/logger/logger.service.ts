import { Injectable, LogLevel, LoggerService } from '@nestjs/common';

@Injectable()
export class LoggerService implements LoggerService {
  log(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  error(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  warn(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  debug?(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  verbose?(message: any, ...optionalParams: any[]) {
    throw new Error('Method not implemented.');
  }
  setLogLevels?(levels: LogLevel[]) {
    throw new Error('Method not implemented.');
  }
}
