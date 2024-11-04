import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n);
    const sequence = this.calculateFibonacci(num);
    return { sequence };
  }

  private calculateFibonacci(n: number): number[] {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
  }

  @Get('prime/:number')
  isPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number);
    const result = this.checkPrime(num);
    return { isPrime: result };
  }

  private checkPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: string): { factorial: number } {
    const num = parseInt(number);
    const result = this.factorial(num);
    return { factorial: result };
  }

  private factorial(n: number): number {
    if (n < 0) return -1; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // 0! = 1 and 1! = 1
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}