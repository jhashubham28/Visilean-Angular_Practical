import { Component } from '@angular/core';

@Component({
  selector: 'basic-example-data',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
})
export class BasicExampleDataComponent {

  settings = {
    columns: {
      id: {
        title: 'Sl. No',
       width: '8%',
      },
      organisation: {
        title: 'Organisation',
      },
      owner: {
        title: 'Owner',
      },
      taskname: {
        title: 'Task Name',
      },
      status: {
        title: 'Status',
      },
      taskType: {
        title: 'Task Type',
      },

    },
  };

  data = [
    {
      id: 1,
      organisation: 'ASU',
      owner: 'Sheikh Mansoor',
      taskname: 'L01: Install Plumbing Equipment',
      status: 'Warning',
      taskType: 'Construction'
    },
    {
      id: 2,
      organisation: 'Al Arabia',
      owner: 'Bret',
      taskname: 'L01: Install Plumbing Equipment',
      status: 'Warning',
      taskType: 'Construction'
    },
    {
      id: 3,
      organisation: 'ASU',
      owner: 'Bret',
      taskname: 'L01: Install Plumbing Equipment',
      status: 'Warning',
      taskType: 'Construction'
    },
    {
      id: 4,
      organisation: 'ASU',
      owner: 'Bret',
      taskname: 'L01: Install Plumbing Equipment',
      status: 'Warning',
      taskType: 'Construction'
    },
    {
      id: 5,
      organisation: 'Leanne Graham',
      owner: 'Bret',
      taskname: 'L01: Install Plumbing Equipment',
      status: 'Warning',
      taskType: 'Construction'
    },
    {
      id: 6,
      organisation: 'ASU',
      owner: 'Bret',
      taskname: 'L01: Install Plumbing Equipment',
      status: 'Warning',
      taskType: 'Construction'
    },
    {
      id: 7,
      organisation: 'ASU',
      owner: 'Bret',
      taskname:'L01: Install Plumbing Equipment',
      status: 'Completed',
      taskType: 'Construction'
    },
    {
      id: 8,
      organisation: 'ASU',
      owner: 'Bret',
      taskname:'L01: Install Plumbing Equipment',
      status: 'Warning',
      taskType: 'Construction'
    },
    {
      id: 9,
      organisation: 'Leanne Graham',
      owner: 'Bret',
      taskname: 'L01: Install Plumbing Equipment',
      status: 'Started',
      taskType: 'Construction'
    },
    {
      id: 10,
      organisation: 'Leanne Graham',
      owner: 'Bret',
      taskname: 'L01: Install Plumbing Equipment',
      status: 'Warning',
      taskType: 'Construction'
    },
    {
      id: 11,
      organisation: 'ASU',
      owner: 'Bret',
      taskname: 'L01: Install Plumbing Equipment',
      status: 'Not Started',
      taskType: 'Construction'
    },
  ];

  
  
}
