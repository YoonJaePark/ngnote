import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { DaoService } from 'src/app/core/http/dao.service';
import { map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {
  boards = [];
  status = false;
  loadingState = false;
  constructor(public afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    private daoService: DaoService,
    public auth: AuthService) {

  }

  ngOnInit() {
    this.daoService.getBoardsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).pipe(
      tap(results => results.sort((a, b) => b.updatedAt - a.updatedAt))
    ).subscribe((boards: Board[]) => {
      this.boards = [];
      this.boards = [...boards, ...this.boards];
    });
  }

  onSend(e: string) {
    const user = this.afAuth.auth.currentUser;
    const board: Board = {
      uid: user.uid,
      content: e,
      email: user.email,
      createdAt: new Date().getTime(),
      likes: {
        count: 0
      },
      updatedAt: new Date().getTime(),
      user: user.displayName
    };

    this.daoService.createBoard(board);
  }
}