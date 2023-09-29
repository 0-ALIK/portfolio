import { Component } from '@angular/core';

interface Skill {
    icon: string;
    nombre: string;
}

interface SkillCollect {
    categoria: string;
    datos: Skill[]
}

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
})
export class AboutComponent {

    public skills: SkillCollect[] = [
        {
            categoria: 'Front End',
            datos: [
                { icon: 'assets/icons/angular.svg', nombre: 'Angular' },
                { icon: 'assets/icons/react.svg', nombre: 'React' },
                { icon: 'assets/icons/tailwind.svg', nombre: 'Tailwind' },
                { icon: 'assets/icons/prime.svg', nombre: 'Prime' },
                { icon: 'assets/icons/java.svg', nombre: 'Java Server Faces' },
            ]
        },
        {
            categoria: 'Back End',
            datos: [
                { icon: 'assets/icons/node.svg', nombre: 'Node' },
                { icon: 'assets/icons/spring.svg', nombre: 'Spring' },
                { icon: 'assets/icons/laravel.svg', nombre: 'Laravel' },
                { icon: 'assets/icons/dotnet.svg', nombre: 'ASP' },
            ]
        },
        {
            categoria: 'Mobile',
            datos: [
                { icon: 'assets/icons/android.svg', nombre: 'Android' },
                { icon: 'assets/icons/ionic.svg', nombre: 'Ionic' },
                { icon: 'assets/icons/flutter.svg', nombre: 'Flutter' },
                { icon: 'assets/icons/react.svg', nombre: 'React Native' },
            ]
        },
        {
            categoria: 'Desktop',
            datos: [
                { icon: 'assets/icons/electron.svg', nombre: 'Electron' },
                { icon: 'assets/icons/dotnet.svg', nombre: 'WPF y Windows Forms' },
            ]
        },
        {
            categoria: 'Data Base',
            datos: [
                { icon: 'assets/icons/mysql.svg', nombre: 'MySQL' },
                { icon: 'assets/icons/mongo.svg', nombre: 'Mongo DB' },
                { icon: 'assets/icons/redis.svg', nombre: 'Redis' },
                { icon: 'assets/icons/sql-server.svg', nombre: 'SQL Server' },
            ]
        }
    ]

}
