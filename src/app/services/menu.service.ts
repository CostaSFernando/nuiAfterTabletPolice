import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menu: BehaviorSubject<boolean>
  constructor(
    private auth: AuthService
  ) {
    this.menu = new BehaviorSubject(false);
  }

  getStatusMenu() {
    return this.menu.pipe(
      map(status => {
        if (this.auth.getCurrentUser()) {
          return status;
        }
        return false;
      }
      )
    )
  }

  updateMenu(value: boolean = !this.menu.getValue()) {
    this.menu.next(value);
  }
}
