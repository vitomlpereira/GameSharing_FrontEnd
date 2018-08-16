import { Component, OnInit } from '@angular/core';

import { FriendRequestService } from './friend-request.service';
import { User } from './user';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  errors: string[];
  users: User[];

  constructor(private _friendRequestService: FriendRequestService) { }

  ngOnInit() {

  this._friendRequestService.getAvalilableUsers().subscribe(
      avaliableUsers => this.users = avaliableUsers,
      error => this.errors = error
  );

}

}
