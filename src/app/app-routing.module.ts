import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletecategoryComponent } from './components/deletecategory/deletecategory.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ContributersComponent } from './pages/contributers/contributers.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },{
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },{
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },{
    path:'admin',
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:WelcomeComponent,
      },
      {
        path:'profile',
        component:ProfileComponent,
      },{
        path:'categories',
        component:ViewCategoriesComponent,
      },{
        path:'addcategories',
        component:AddCategoryComponent
      },{
        path:'contributers',
        component:ContributersComponent
      },{
        path:'categories/:cid',
        component:DeletecategoryComponent
      },{
        path:'article',
        component:ViewQuizzesComponent
      },{
        path:'addArticle',
        component:AddQuizComponent
      },{
        path:'quiz/:qid',
        component: UpdateQuizComponent
      },{
        path:'view-questions/:qid/:title',
        component: ViewQuestionsComponent
      },{
        path:'add-questions/:qid/:title',
        component:AddQuestionsComponent
      },{
        path:'update-questions/:quesId/:title',
        component:UpdateQuestionComponent
      }
    ],
  },{
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[NormalGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
