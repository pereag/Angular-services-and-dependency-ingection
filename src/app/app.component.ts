import { Component, OnInit } from '@angular/core';
import { AccountsService } from './account/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  constructor(private accountsService: AccountsService) {}

  onAccountAdded(element) {
    this.accountsService.addAccount(element.name, element.status);
  }

  onStatusChanged(element) {
    this.accountsService.updateStatus(element.id, element.status);
  }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
