import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule ],
  exports: [MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatListModule, MatFormFieldModule, MatInputModule]
})
export class MaterialModule {}
