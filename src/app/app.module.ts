import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatCardModule } from '@angular/material';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthService } from './core/authentication/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { FeedComponent } from './shared/components/feed/feed.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { NavComponent } from './core/header/nav.component';
import { BoardsComponent } from './modules/home/pages/boards/boards.component';
import { WriteFeedComponent } from './shared/components/write-feed/write-feed.component';
import { FooterComponent } from './core/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BoardsComponent,
    LoginComponent,
    WriteFeedComponent,
    FooterComponent,
    FeedComponent
  ],
  imports: [
    AppRoutingModule,
    ScrollDispatchModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular'), // imports firebase/app needed for everything
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule
  ],
  providers: [
    AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
