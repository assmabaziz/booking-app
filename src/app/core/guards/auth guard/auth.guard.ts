import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { HelperService } from '../../../shared/services/helper.service';



export const authGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  const helperService = inject(HelperService);
  
  if (helperService.isPlatformBrowser()) {
      const token = localStorage.getItem('userToken');
    if (token !== null) {
      return true;
    } else {
      _Router.navigate(['/landing-page/home']);
      return false;
    }
  } else {
    return false;
  }
};
