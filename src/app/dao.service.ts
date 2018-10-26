import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Board} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  private dbPath = '/boards';

  boardsRef: AngularFireList<Board> = null;

  constructor(private db: AngularFireDatabase) {
    this.boardsRef = db.list(this.dbPath);
  }

  createBoard(board: Board): void {
    this.boardsRef.push(board);
  }

  updateBoard(key: string, value: any): void {
    this.boardsRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteBoard(key: string): void {
    this.boardsRef.remove(key).catch(error => this.handleError(error));
  }

  getBoardsList(): AngularFireList<Board> {
    return this.boardsRef;
  }

  deleteAll(): void {
    this.boardsRef.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
