import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Accessoire } from '../model/accessoire.model';
import { Marque } from '../model/marque.model';
import { AccessoireService } from '../services/accessoire.service';

@Component({
  selector: 'app-add-accessoire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-accessoire.component.html',
  styleUrl: './add-accessoire.component.css'
})
export class AddAccessoireComponent implements OnInit {
  newAccessoire = new Accessoire();
  marques!: Marque[];
  newIdMarque!: number;
  newMarque!: Marque;

  constructor(private accessoireService: AccessoireService,
              private router: Router) { }

  ngOnInit() {
    this.marques = this.accessoireService.listeMarques();
  }

  addAccessoire() {
    this.newMarque = this.accessoireService.consulterMarque(this.newIdMarque);
    this.newAccessoire.marque = this.newMarque;
    this.accessoireService.ajouterAccessoire(this.newAccessoire);
    this.router.navigate(['accessoires']);
  }
}
