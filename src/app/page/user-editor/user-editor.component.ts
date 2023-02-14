import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent {
  user$ = this.acitvatedRoute.params.pipe(
    switchMap( params => this.userService.get(params['id']) ),
  );

  constructor(
    private userService: UserService,
    private acitvatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  onUpdate(user:User): void {
    this.userService.update(user).subscribe(
      () => this.router.navigate(['/user']),
    );
  }

}
