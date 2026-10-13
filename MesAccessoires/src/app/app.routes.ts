import { Routes } from '@angular/router';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { AddAccessoireComponent } from './add-accessoire/add-accessoire.component';
import { UpdateAccessoireComponent } from './update-accessoire/update-accessoire.component';

export const routes: Routes = [
  { path: "accessoires", component: AccessoiresComponent },
  { path: "add-accessoire", component: AddAccessoireComponent },
  { path: "updateAccessoire/:id", component: UpdateAccessoireComponent },
  { path: "", redirectTo: "accessoires", pathMatch: "full" }
];
