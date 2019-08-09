import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  id: string;
  dataset: any[];

  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    if (this.dataService.ensureLogin()) {
      this.id = this.route.snapshot.params.id;
      this.http.post<[]>(`api/responses/${this.id}`, { type: 'array' }).subscribe(r => {
        this.dataset = r;
      });
    }
  }

  download() {
    // Add header
    let csvContent = 'data:text/csv;charset=utf-8,';

    // Use some JSON magic :D
    csvContent += this.dataset.map(d =>  JSON.stringify(d)).join('\n')
                            .replace(/(^\[)|(\]$)/mg, '');

    // Download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `responses_${this.id.split('-')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
  }

}
