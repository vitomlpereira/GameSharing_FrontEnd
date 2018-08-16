import { Component, OnInit } from '@angular/core';
import { GameService} from './game.service';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  errors: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'description'];
  games: any[] = [];

  constructor(private gameService: GameService) {

     this.gameService.getGamesByOwner(gameService.getUser().id)
    .subscribe(
      games => this.games = games,
      error => this.onError
    );
  }

  ngOnInit() {
  }

  onError(fail: any) {
    console.log(fail);
    this.errors = fail.error.errors;

  }

  rowClick(row) {
    console.log(row);
    alert('clicou na linha');
  }

}
