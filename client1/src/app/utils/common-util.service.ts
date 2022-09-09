import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {
  width: any;
  constructor() { }

  getColumnHeader(field: string, headerName: string) {
    let obj = {};
    // obj['field'] = field;
    // obj['headerName'] = headerName;
    // obj['tooltipField'] = field;
    // obj['headerTooltip'] = headerName;
    return obj;
  }

  getDefaultColumnDef() {
    return {
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      tooltipShowDelay: 0,
      autoHeight: false,
    }
  }

  getCommaSeparatedFilter() {
    return [
      'contains',
      'notContains',
      'equals',
      'notEqual',
      'startsWith',
      'endsWith',
      {
        displayKey: 'commaSeparated',
        displayName: 'Comma Separated',
        test: (filterValue:any, cellValue:any) => {
          return filterValue.split(/\s*,\s*/).some(function (v:any) { return v && v.toLowerCase() == cellValue });
        }
      },


    ]
  }

  getCommaSeparatedFilterWithSpaces() {
    return [
      {
        displayKey: 'commaSeparated',
        displayName: 'Comma Separated',
        test: (filterValue:any, cellValue:any) => {
          return filterValue.includes(cellValue);
        }
      },
      'contains',
      'notContains',
      'equals',
      'notEqual',
      'startsWith',
      'endsWith',

    ]
  }

  getFilterButtons() {
    return {
      buttons: ['cancel', 'clear'],
      closeOnApply: true,
    }
  }
}
