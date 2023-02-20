import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'cards';

    getPosts() {
        let  posts = [
            {
                title: 'First Post',
                imageUrl: 'assets/tree.jpeg',
                username: 'nature',
                content: 'Bacon ipsum dolor amet meatball leberkas turkey, shank flank pork belly porchetta.' +
                    ' Hamburger sirloin buffalo bacon jowl t-bone. Spare ribs turkey bresaola drumstick. Alcatra bresaola pastrami' +
                    ' pork loin burgdoggen, kevin tenderloin tri-tip hamburger turkey flank sirloin. Meatball picanha frankfurter,' +
                    ' tongue prosciutto flank bresaola beef shankle ball tip cow. Tenderloin filet mignon swine ball tip strip' +
                    ' steak chislic pastrami ground round tongue salami pig andouille venison doner. Bacon kielbasa landjaeger' +
                    ' swine tri-tip ribeye.'
            },
            {
                title: 'Second Post',
                imageUrl: 'assets/mountain.jpeg',
                username: 'mountain_man',
                content: 'Drumstick meatball beef ribs, sirloin ham hock t-bone pastrami pork chop rump shankle tongue. ' +
                    'Drumstick jerky ribeye bacon sirloin shank t-bone ground round. Beef venison swine chuck picanha ' +
                    'doner shankle turducken drumstick short ribs ham hock cupim chicken shoulder. Landjaeger shoulder ' +
                    'biltong, short ribs strip steak hamburger burgdoggen cow tri-tip bresaola porchetta pork t-bone ' +
                    'alcatra pastrami. Jowl chislic tail strip steak, jerky ball tip kielbasa ham. Brisket capicola ' +
                    'buffalo porchetta pork belly short ribs. Pork picanha ribeye chislic andouille short loin t-bone ' +
                    'ham porchetta cow beef prosciutto ham hock jerky sirloin.'
            },
            {
                title: 'Third Post',
                imageUrl: 'assets/biking.jpeg',
                username: 'fitness',
                content: 'Capicola burgdoggen picanha, biltong filet mignon cupim alcatra jerky hamburger ham t-bone ' +
                    'chicken ribeye doner spare ribs. Leberkas landjaeger ham hock bacon, ham pork doner meatball. ' +
                    'Meatloaf capicola rump short loin jerky. Shankle cow turducken sirloin jerky strip steak landjaeger. ' +
                    'Pig burgdoggen spare ribs, ribeye alcatra strip steak leberkas turducken porchetta pork. Buffalo ' +
                    'boudin cupim meatball shoulder burgdoggen. Beef ribs tenderloin swine pork pork belly chuck ' +
                    'burgdoggen porchetta corned beef biltong turducken.'
            },
        ];

        return posts;
    }
}
