import { Component, Input } from '@angular/core';
import { CB54 } from '../interfaces/b54';
import { B54Service } from '../services/b54.service';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-b54-create',
  templateUrl: './b54-create.component.html',
  styleUrls: ['./b54-create.component.css'],
})
@Input()
export class B54CreateComponent {
  book = new CB54();
  books: any;

  selectedBook = new CB54();
  errMessage: string = '';

  constructor(
    private _service: B54Service,
    private activateRoute: ActivatedRoute,
    private _router: Router,
    private http: HttpClient
  ) {
    activateRoute.paramMap.subscribe((param) => {
      let isbn = param.get('isbn');

      if (isbn != null) {
        this.searchBook(isbn);
      }
    });
  }

  searchBook(isbn: string) {
    this._service.getBook(isbn).subscribe({
      next: (data) => {
        this.book = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  requiredFileType: any;
  fileName = '';
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();

  handleUpload(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = this.book.isbn + '.jpg';
      const formData = new FormData();
      formData.append('image', file);
      const upload$ = this.http
        .post('/upload', formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(finalize(() => this.reset()));
      this.uploadSub = upload$.subscribe((event) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
        }
      });
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
  }

  postBook() {
    this._service.postBook(this.book).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
    this.goBack();
  }

  goBack() {
    this._router.navigate(['b54']);
  }

  clear() {
    this.book = new CB54();
  }
}
