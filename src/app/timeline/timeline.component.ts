import { Component } from '@angular/core';
import { Point } from '../PointModel';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddPointDialogComponent } from '../add-point-dialog/add-point-dialog.component';
import { FirebaseApp } from 'firebase/app';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  points : Point[] = []
  points2$: Observable<any[]>; // Declaração para os points

  
  constructor(public dialog: MatDialog,private firestore: Firestore) {
    const pointsCollection = collection(this.firestore, 'points2'); // Coleção no Firestore
    this.points2$ = collectionData(pointsCollection); // Pega os dados da coleção
  }
  

  ngOnInit(): void{
    this.loadPointsFromLocalStorage();
    
  }
  ngOnChanges() :void {
    this.loadPointsFromLocalStorage();
  }
  get reversedPoints() {
    return this.points.slice().reverse(); // Cria uma cópia da lista e a inverte
  }
  loadPointsFromLocalStorage(): void {
    const pointsData = localStorage.getItem('points');
    if (pointsData) {
      this.points = JSON.parse(pointsData);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPointDialogComponent);

    // Não precisa de afterClosed, pois os dados são armazenados no LocalStorage
  }
}
