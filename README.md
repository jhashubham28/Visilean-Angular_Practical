

## Installation

The library is available as npm package, so all you need to do is to run the following command:

```
Go to ng2-smart-table directory and then projects

Install npm in demo and serve the application

npm install 
```

This command will create a record in your `package.json` file and install the package into the npm modules folder.

## Minimal Setup Example

First thing you need to do is to import the ng2-smart-table directives into your component.

```

import { Ng2SmartTableModule } from 'ng2-smart-table';

```

Then register it by adding to the list of directives of your module:

```
// ...

@NgModule({
  imports: [
    // ...
    
    Ng2SmartTableModule,
    
    // ...
  ],
  declarations: [ ... ]
})
// ...
```

N
    
```

```

Finally let's put the ng2-smart-table component inside of the template:

```
// ...

@Component({
  template: `
    <ng2-smart-table [settings]="settings"></ng2-smart-table>
  `
})
// ...
```
At this step you will have a minimal configured table. All functions are available by default and you don't need to configure them anyhow, so now you can add/edit/delete rows, sort or filter the table, etc.
 
Still it seems like something is missing... Right, there is no data in the table by default. To add some, let's create an array property with a list of objects in the component. Please note that object keys are the same as in the columns configuration.

```
data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },
  
  // ... list of items
  
  {
    id: 11,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];
```

And pass the data to the table:

```
// ...

@Component({
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `
})
// ...
```

Now you have some data in the table.
 