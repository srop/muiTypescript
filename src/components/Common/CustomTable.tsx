import MaterialTable, { MaterialTableProps, Options, Icons,MTableToolbar } from "material-table";
import React, { forwardRef } from "react";
import { TableFooter, TableCell, TableRow } from "@mui/material/";
//import { makeStyles, useTheme } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TablePagination from "@mui/material/TablePagination";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from '@mui/styles';
import {
    AddBox,
    ArrowDownward,
    Check,
    ChevronLeft,
    ChevronRight,
    Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage,
    PortraitSharp,
    Remove,
    SaveAlt,
    Search,
    ViewColumn
} from "@mui/icons-material/";

export interface IMUITable {
    columns: any,
    title?: string,
    data: any,
    options?: any,
    editable?: any,
    actions?: any
    detailPanel?: any
    components?:any
    // isOpen:boolean,
    // handleClose: () => void,
    // handleConfirm:()=> void,
    // fullWidth:boolean,
    // cancelText:string,
    // confirmText?:string
}


const tableIcons: Icons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
const optionSet = {
    actionsColumnIndex: -1,
    sorting: true,
    addRowPosition: "first",
    showFirstLastPageButtons: true,
    exportButton: true,
    exportAllData: true,
    pageSize: 10,
    paging: true,
    pageSizeOptions: [10, 20, 100, 200, 500],
    doubleHorizontalScroll: true,
    headerStyle: {
        backgroundColor: "#ddd",
        color: "#000",
        zIndex: 99,
        //   font: "Athiti",
        position: "sticky",
        top: 0,
        // minWidth: "120%",

        textAlign: "center"
    },
    maxBodyHeight: "650px",
    rowStyle: {
        color: "#000",
        fontWeight: 400
    }
};

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(2),

      "& > .fa": {
        margin: theme.spacing(2)
      },
      "& td": {
        "& button.MuiIconButton-root": {
          marginTop: theme.spacing(1)
        },
        "& button.MuiIconButton-root:hover": {
          backgroundColor: "transparent"
        }
      }
    },
    // toolbar: {
    //   "& button.MuiButton-root": {
    //     marginLeft: "8px"
    //   },
    //   "& button.MuiIconButton-root:hover": {
    //     backgroundColor: "transparent"
    //   }
    // }
  }));


const CustomTable = (props: IMUITable) => {
    const classes = useStyles();

    const sumOption = Object.assign(optionSet, props.options);
    return (
        
   
        <MaterialTable
        
            icons={tableIcons}
        
            title={props.title || "หัวข้อ"}
            columns={props.columns}
            data={props.data || []}
            editable={props.editable || {}}
            actions={props.actions || []}
            options={sumOption}
            // localization={sumLocalization}
            detailPanel={props.detailPanel}
            components={props.components}
        // initialFormData={props.initialFormData}
        // tableRef={props.tableRef}a
        // onSelectionChange={props.onSelectionChange}
        />
       
    )
}

export default CustomTable