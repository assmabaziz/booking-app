import { TestBed } from '@angular/core/testing';
import { globalInterceptor } from './global.interceptor';

describe('globalInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      globalInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: globalInterceptor = TestBed.inject(globalInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
