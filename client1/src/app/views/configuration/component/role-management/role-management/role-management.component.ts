import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnApi, GridApi, GridOptions } from 'ag-grid-community';
import { CommonUtilService } from 'src/app/utils/common-util.service';


@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {

  gridOptions = <GridOptions>{};
  gridApi:any;
  gridColumnApi:any;
  // loanFilter;
  // recordCount;
  // defaultColDef;
  // tooltipShowDelay;
  userRole=userRole
  frameworkComponents: any;
  columnDefs: any;
  header: any;
  paginationPageSize: any;
  currentPage: any;
  status: boolean = true;
  activeStatus: boolean = true;
  types = [10, 20, 30];
  paramsSelectRecord = {
    type: "gridReady",
    api: GridApi,
    columnApi: ColumnApi,
  };

  constructor( private router: Router,
    private commonUtilService: CommonUtilService
    ) { }

  ngOnInit(): void {
  }

  select(){
    
  }

  onGridReady(params:any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
 

  // createColumnDefs() {
  //   this.columnDefs = [];
  //   let header: any;

  //   this.frameworkComponents = {
  //    // viewListComponent: ViewListComponentComponent,
  //     // cellRendererFramework: RouterLinkRendererComponentComponent
  //   };

  //   header = this.commonUtilService.getColumnHeader(
  //     "name",
  //     Constants.ROLE_NAME_LABEL
  //   );
  //   header.filterParams = this.commonUtilService.getFilterButtons();
  //   header.filterParams.suppressAndOrCondition = true;
  //   header.filterParams.filterOptions =
  //     this.commonUtilService.getCommaSeparatedFilter();

  //   header.cellRenderer = (params) => {
  //     var link = document.createElement("a");
  //     link.href = "#";
  //     link.innerText = params.value;
  //     if (params.data.id < 5) {
  //       link.style.color = "darkblue";
  //     }
  //     link.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       this.onEdit(params.data);
  //     });
  //     return link;
  //   };
  //   this.columnDefs.push(header);

  //   header = this.commonUtilService.getColumnHeader(
  //     "",
  //     Constants.NO_OF_MEMBER_LABEL
  //   );
  //   header.cellRenderer = "viewListComponent";
  //   header.filterParams = this.commonUtilService.getFilterButtons();
  //   header.cellRendererParams = { type: "ManageRoles" };
  //   header.filter = false;
  //   header.filterParams.suppressAndOrCondition = true;
  //   header.filterParams.filterOptions =
  //     this.commonUtilService.getCommaSeparatedFilter();
  //   this.columnDefs.push(header);

  //   header = this.commonUtilService.getColumnHeader(
  //     "updatedDate",
  //     Constants.UPDATED_ON_LABEL
  //   );
  //   header.filterParams = this.commonUtilService.getFilterButtons();
  //   header.filter = false;
  //   header.filterParams.suppressAndOrCondition = true;
  //   header.filterParams.filterOptions =
  //     this.commonUtilService.getCommaSeparatedFilter();
  //   this.columnDefs.push(header);

  //   header = this.commonUtilService.getColumnHeader(
  //     "updatedBy",
  //     Constants.UPDATED_BY_LABEL
  //   );
  //   header.filterParams = this.commonUtilService.getFilterButtons();
  //   header.filter = false;
  //   header.filterParams.suppressAndOrCondition = true;
  //   header.filterParams.filterOptions =
  //     this.commonUtilService.getCommaSeparatedFilter();
  //   this.columnDefs.push(header);

  //   header = this.commonUtilService.getColumnHeader(
  //     "active",
  //     Constants.ACTIVE_LABEL
  //   );
  //   // header.pinned = "right";
  //   header.filter = false;
  //   header.filterParams = this.commonUtilService.getFilterButtons();
  //   header.filterParams.suppressAndOrCondition = true;
  //   header.filterParams.filterOptions =
  //     this.commonUtilService.getCommaSeparatedFilter();
  //   this.columnDefs.push(header);
  // }

}
export const userRole=[
  { "id":1,"name":"Administration", "updatedOn":"2022-09-21","updatedBy":"Saurav Gawli"},
  { "id":1,"name":"Super Admin", "updatedOn":"2022-09-21","updatedBy":"Saurav Gawli"},
  { "id":1,"name":"Generic User", "updatedOn":"2022-09-21","updatedBy":"Saurav Gawli"}
]
