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
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/module/material/material.module';
import { FirebaseModule } from './shared/module/firebase/firebase.module';


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
    MaterialModule,
    FormsModule,
    FirebaseModule
  ],
  providers: [
    AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
