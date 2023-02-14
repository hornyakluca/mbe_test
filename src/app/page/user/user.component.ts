import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userList: Observable<User[]> = this.userService.getAll();

  constructor(
    private userService: UserService,
  ) {}


  onRemove(user: User): void {
    this.userService.remove(user.id).subscribe(
      () => this.userList = this.userService.getAll(),
    );
  }

}
