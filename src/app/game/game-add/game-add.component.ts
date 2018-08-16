import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router} from '@angular/router';

import { GameService} from './../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {

  showSpinner: boolean = false;
  gameForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _gameService: GameService ) { }

  ngOnInit() {

    this.gameForm = this._formBuilder.group
    ({
      name: [null, [Validators.required, Validators.maxLength(100)]],
      description: [null, [Validators.required, Validators.maxLength(250)]],
      console: [null, [Validators.required]],
      genre: [null, [Validators.required]]
    });
  }

  submit(){

    console.log(this.gameForm);
    console.log(this.gameForm.get('name').value);

    let gameInfo: Game = new Game();

    gameInfo.name=this.gameForm.get('name').value;
    gameInfo.description=this.gameForm.get('description').value;
    gameInfo.console=this.gameForm.get('console').value;
    gameInfo.genre=this.gameForm.get('genre').value;
    gameInfo.ownerId= this._gameService.getUser().id;

    console.log(gameInfo);

    this._gameService.addGame(gameInfo).subscribe(
      result => { this.onSaveComplete(result); },
      fail => { this.onError(fail); }
    );

  }
  onSaveComplete(response: any): void {

    this.showSpinner = false;
    // this._router.navigate(['/game']);
  }

  onError(fail: any) {
     console.log(fail);

    this.showSpinner = false;
  }

}




