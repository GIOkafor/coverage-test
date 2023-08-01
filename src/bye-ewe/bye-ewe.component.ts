import {
    Component
} from '@angular/core';

@Component({
    selector: 'bye-ewe',
    styles: [],
    template: '<p>Baaaa, {{ name }}!</p>'
})
export class ByeEweComponent {
    name = 'Matt';

    growUp(name: string): string{
        return `${name} you are all grown now`
    }
}
