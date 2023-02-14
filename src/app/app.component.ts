import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'buddhistaegyhaz';

  userList: Observable<User[]> = this.userService.getAll();

constructor(
  private userService: UserService,
) {}
}
