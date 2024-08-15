import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css'],
})
export class TechStackComponent {
  // @Input() techStack: string[] = [];\
  techStack: Technology[] = [];
  Path = '../../assets/TechLogos/';

  constructor() {
    this.techStack = [
      {
        name: 'TypeScript',
        logo: this.Path + 'typescript-original.svg',
      },
      {
        name: 'JavaScript',
        logo: this.Path + 'javascript-original.svg',
      },
      {
        name: 'HTML5',
        logo: this.Path + 'html5-original.svg',
      },
      {
        name: 'CSS',
        logo: this.Path + 'css3-plain.svg',
      },
      {
        name: 'Bootstrap',
        logo: this.Path + 'bootstrap-plain.svg',
      },
      {
        name: 'Postman',
        logo: this.Path + 'getpostman-icon.svg',
      },
      {
        name: 'C Sharp',
        logo: this.Path + 'csharp-plain.png',
      },
      {
        name: 'Ms Sql ',
        logo: this.Path + 'microsoft-sql-server.svg',
      },
      {
        name: 'Git',
        logo: this.Path + 'git-plain.svg',
      },
      {
        name: 'DBMS',
        logo: this.Path + 'dbms-64.png',
      },
      {
        name: 'Entity framework',
        logo: this.Path + 'EF-core.png',
      },
      {
        name: '.NET',
        logo: this.Path + 'dotnet-framework.svg',
      },
      {
        name: 'Web API',
        logo: this.Path + 'web-api.png',
      },
      {
        name: 'Angular',
        logo: this.Path + 'angular.png',
      },
      {
        name: 'Service fabric',
        logo: this.Path + 'Service-Fabric.png',
      },
      {
        name: 'Azure Devops',
        logo: this.Path + 'azure-devops.svg',
      },
      {
        name: 'AZ App insights',
        logo: this.Path + 'application-insights.svg',
      },
      {
        name: 'Jira',
        logo: this.Path + 'jira-icon.png',
      },
      {
        name: 'Bit bucket',
        logo: this.Path + 'bitbucket-icon.svg',
      },
    ];
  }
}

interface Technology {
  name: string;
  logo: string;
  backgroundColor?: string;
}
