import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpareParts } from '../../entities/parts';
import { PartService } from '../parts.service';


@Component({
  selector: 'app-parts-search',
  templateUrl: './parts-search.component.html',
  styleUrls: ['./parts-search.component.css']
})

export class PartSearchComponent implements OnInit {
//speichern der suchkriterien für partName und fitsModel
  partName = '';
  fitsModel = '';
//post vom typ Spareparts, speichern der Daten von neuem Ersatzteil
  post: SpareParts = {
    id: '',
    partName: '',
    fitsModel: '',
    fitsBrand: '',
    fitsYear: ''
  };
//status der form-übermittlung,
  submitted = false;
//speichern der suchergebnisse
  parts: Array<SpareParts> = [];

  
  selectedPart: SpareParts | null = null;




  basket: { [key: number]: boolean} = {
    
  };



  //KOnstruktor nimmt PartService entgegen, für suche usw nötig
  constructor(private partService: PartService) {
  }


 
  ngOnInit(): void {
  }

 //Search dient der Suche nach spareparts auf grundlage von partName und fitsModel
 //ruft find-methode des partservie auf die ein observable zurückgibt => suchergebnisse werden ausgegeben
  search(): void {

    this.partService.find(this.partName, this.fitsModel).subscribe({
      next: (parts) => {
        this.parts = parts
      }
    });

  }

  // CreateNewPart für neue Ersatzteile 
  createNewPart(): void {
    const data = {
      partName: this.post.partName,
      fitsModel: this.post.fitsModel,
      fitsBrand: this.post.fitsBrand,
      fitsYear: this.post.fitsYear

    };
// createPost Methode ruft PartService auf, die eine Anfrage zur Erstellung des neuen Ersatzteils sendet
// gibt Observable zurück
    this.partService.createPost(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        }
      });
  }

  

// CreateNewFormular(): void {
//   this.submitted = false
//   this.post = {
//     partName: '',
//     fitsModel: '',
//     fitsBrand: '',
//     fitsYear: '',
//   };
// }
  
  select(p: SpareParts): void{
    this.selectedPart = p;
  }
}

