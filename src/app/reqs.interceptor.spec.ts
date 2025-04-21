import { TestBed } from '@angular/core/testing';

import { ReqsInterceptor } from './reqs.interceptor';

describe('ReqsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ReqsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ReqsInterceptor = TestBed.inject(ReqsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
