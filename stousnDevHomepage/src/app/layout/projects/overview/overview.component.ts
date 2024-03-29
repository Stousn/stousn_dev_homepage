import { Component, OnInit } from '@angular/core';
import { Globals } from '../../../globals';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
    projects = [
        {
            id: 'ergo-reip',
            name: 'Stefan Reip',
            title: 'Homepage Ergotherapie Reip',
            summary: 'Eine minimalistische Homepage für Ergotherapeutin Vanessa Reip.'
        },
        {
            id: 'link-tree',
            name: 'Stefan Reip',
            title: 'Persönlicher Linkbaum',
            summary: 'Ein persönlicher DSGVO-Konformer Linkbaum mit eigener Domain für dein Social Media Profil.'
        },
        {
            id: 'iosmac_scaffolding',
            name: 'Stefan Reip',
            title: 'Ionic/Electron iOS & macOS App Scaffolding',
            summary: 'Scaffolding Script um eine Ionic und Electron Cross-Platform Applikation für iOS und macOS zu erzeugen'
        },
        {
            id: 'shortcuts',
            name: 'Stefan Reip',
            title: 'iPadOS Shortcuts Dokumentationssystem',
            summary: 'Ein Dokumentationssystem am iPad durch Nutzung von Shortcuts'
        },
        {
            id: 'stousn_dev',
            name: 'Stefan Reip',
            title: 'stousn.dev',
            summary: 'Development dieser Single-Page-Applikation'
        }
    ];

    public isDarkTheme?: boolean;

    constructor(private readonly globals: Globals) {}

    ngOnInit() {
        this.globals.darkTheme$.subscribe((dark) => (this.isDarkTheme = dark));
        window.scrollTo(0, 0);
    }
}
