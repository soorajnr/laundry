import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'laundry';
  navLinks: any[];
  currentNavName!: string;
  isLoginPage: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.navLinks = [
      {
        label: "Home",
        link: "/home",
        index: 0
      },
      {
        label: "history",
        link: "/hisrory",
        index: 1
      },
      {
        label: "profile",
        link: "/profile",
        index: 2
      }
    ];
  }

  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isLoginPage = this.route.snapshot.firstChild?.routeConfig?.path === 'login';
    });
    
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const childRoute = this.route.firstChild;
        if (childRoute) {
          this.currentNavName = childRoute.snapshot.data['navName'];
        }
      });

 
  }
}
