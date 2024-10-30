import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { db } from '../../environments/firebase';
@Component({
  selector: 'app-add-point-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-point-dialog.component.html',
  styleUrl: './add-point-dialog.component.css'
})
export class AddPointDialogComponent {
  titulo: string = '';
  data: string = '';
  imagem: string = '';
  constructor(public dialogRef: MatDialogRef<AddPointDialogComponent>, private firestore: Firestore) {}

  onNoClick(): void {
    this.dialogRef.close(); // Fecha o diálogo sem passar dados
  }

  async addPoint() {
    console.log(this.titulo)
    const newPoint = { titulo: this.titulo, data: this.data, imagem: this.imagem };
    try {
      const docRef = await addDoc(collection(db, "points"), {
          titulo: this.titulo,
          data: this.data,
          imagem: this.imagem
      });
      console.log("Document written with ID: ", docRef.id);
  } catch (e) {
      console.error("Error adding document: ", e);
  }
    this.dialogRef.close(); 
  }
  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imagem = e.target?.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
