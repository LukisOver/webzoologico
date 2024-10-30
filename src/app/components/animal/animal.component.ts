import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  animalList: any = [];
  animalForm: any = this.formBuilder.group({
    nombre: '',
    edad: 0,
    tipo: '',
    fecha: Date
  })
  editableAnimal: boolean = false;
  idAnimal: any ;
  
  getAllAnimal() {
    this.animalService.getAllAnimalData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    this.getAllAnimal();
  }
  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());
  }
  newAnimalEntry() {
    this.animalService.newAnimal(localStorage.getItem('accessToken'), this.animalForm.value).subscribe(
      () => {
        //Redirigiendo a la ruta actual /animal y recargando la ventana
        this.router.navigate(['/animal']).then(() => {
          this.newMessage('Registro exitoso');
        })
      }
    );
  }


  constructor(private animalService: AnimalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }
}
