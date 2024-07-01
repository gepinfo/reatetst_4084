import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./getallvalues.scss";
import  {service}   from './getallvalues.service';

class Getallvalues extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'name', field: 'name' },{ headerName: 'email', field: 'email' },];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
    this.state={
    reatick : {
    name: '',
    email: '',
    },
    
    rowData :[]
    } }
    


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ reatick: { ...this.state.reatick, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.reatick.created_by = sessionStorage.getItem('email')||'{}';
    this.GpGetAllValues();
    }
    GetAllValues  () {
    this.test.GetAllValues().then((data:any) => {
    this.setState({rowData:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    onRowSelected(event:any)
    {
     this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">getallvalues</h2>
        <div id="i9pn">
    <div id="template-i9h9" onClick={()=>this.GetAllValues()}className="ag-theme-material" style={{height: '500px',
        width: '100%'}} >
        <AgGridReact columnDefs={this.columnDefs} pagination={true}
        onGridReady={this.onGridReady} paginationPageSize={5} domLayout={
        "autoHeight"} animateRows={true}defaultColDef={{sortable: true, filter: true }} rowData={this.state.rowData}
        rowSelection={ "single"} onRowSelected={this.onRowSelected }></AgGridReact>
    </div>
</div>
    </>
    );
    };
    };

    export default Getallvalues;