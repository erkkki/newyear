import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MessageComponent} from './components/message/message.component';

const routes: Routes = [
  { path: '', component: MessageComponent },
  { path: ':id', component: MessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
