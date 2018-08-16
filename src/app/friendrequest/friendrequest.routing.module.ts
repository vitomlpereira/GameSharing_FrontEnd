import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendRequestCreateComponent } from './friend-request-create/friend-request-create.component';
import { FriendRequestComponent } from './friend-request.component';


export const appRoutes = [
    { path: '', component: FriendRequestComponent },
    { path: 'friendrequest/add', component: FriendRequestCreateComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class FriendRequestRoutingModule { }
