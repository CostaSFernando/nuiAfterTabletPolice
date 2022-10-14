import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { IntegrationService } from 'src/app/services/integration.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.sass']
})
export class BaseComponent implements OnInit {
  tablet: boolean = false;
  constructor(
    private auth: AuthService,
    private router: Router,
    private integrationService: IntegrationService
  ) { }



  ngOnInit(): void {
    this.verifyTablet();
    this.auth.verifyLoged().subscribe(
      login => {
        // !login? this.router.navigate(['/login']): ''
      }
    );

    window.addEventListener('message', (e) => {
      const nui = e.data.showNui

      this.integrationService.openOrCloseTablet(nui);
    })

    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.closeTablet();
      }
    })

  }

  closeTablet() {
    this.integrationService.closeTablet().subscribe(
      x => { console.log('closed', x);
      }
    )
  }

  verifyTablet() {
    this.integrationService.getStatusTablet().subscribe(
      x => this.tablet = x
    )
  }

}
