import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { HelperService } from '../../../shared/services/helper.service';



export const userGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  const helperService = inject(HelperService);
  
  if (helperService.isPlatformBrowser())  {
    const token = localStorage.getItem('userToken');
    const role = localStorage.getItem('userRole');
    if (token !== null && role == 'user') {
      return true;
    } else {
      _Router.navigate(['/landing-page/home']);
      return false;
    }
  } else {
    return false;
  }
};
