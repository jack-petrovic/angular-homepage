import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Details } from "./details/details";

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page'
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Details page'
  }
];

export default routeConfig;