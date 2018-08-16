import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { GameAddComponent } from './game-add/game-add.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameService } from './game.service';



export const appRoutes = [
    { path: '', component: GameComponent },
    { path: 'game/add', component: GameAddComponent },
    { path: 'game/adit', component: GameEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
    providers: [GameService]
})
export class GameRoutingModule {}

