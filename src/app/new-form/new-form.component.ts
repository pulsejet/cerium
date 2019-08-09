import { Component, OnInit } from '@angular/core';
import { IForm, IPage } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  form: IForm;
  submitted = false;
  submission = '';
  id: string;
  origin = window.location.origin;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    if (!this.dataService.ensureLogin()) { return; }

    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.http.get<IForm>(`api/form/${this.id}`).subscribe(f => {
        if (!f.can_edit) {
          alert('Unauthorized');
          this.router.navigate(['/']);
          return;
        }
        this.form = f;
      });
    } else {
      this.form = {} as IForm;
      this.form.pages = [] as IPage[];
      if (this.form.pages.length === 0) {
        this.form.pages.push({} as IPage);
      }
    }
  }

  save() {
    this.submitted = true;
    const observable = this.id ? this.http.put(`api/form/${this.id}`, this.form)
                               : this.http.post('api/form', this.form);

    observable.subscribe((result: any) => {
      this.submission = result.id;
      this.form = null;
    }, (e) => {
      this.submitted = false;
      console.error(e);
      alert(e.message);
    });
  }

  addSection(index: number) {
    this.form.pages.splice(index + 1, 0, {} as IPage);
  }

  removeSection(index: number) {
    if (confirm('Remove section? This action is irreversible!')) {
      this.form.pages.splice(index, 1);
    }
  }
}
