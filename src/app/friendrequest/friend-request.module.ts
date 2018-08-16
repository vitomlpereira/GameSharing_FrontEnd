import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendRequestRoutingModule } from './friendrequest.routing.module';

import { MaterialModule } from '../core/material/material.module';

import { FriendRequestComponent } from './friend-request.component';
import { FriendRequestCreateComponent } from './friend-request-create/friend-request-create.component';
import { FriendRequestService } from './friend-request.service';


@NgModule({
  imports: [
    CommonModule,
    FriendRequestRoutingModule,
    MaterialModule
  ],
  declarations: [
    FriendRequestComponent,
    FriendRequestCreateComponent
    ],
    providers: [
      FriendRequestService
    ]
})
export class FriendRequestModule {}
