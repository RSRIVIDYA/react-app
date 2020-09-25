import React ,{ useState }from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import ReactDOM from 'react-dom';
import './index.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";


charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Timeline Details",
    plottooltext: "<b>$seriesName</b><hr>$label: <b>$dataValue</b>",
    xaxisname: "Year/Month",
    yaxisname: "No of Occurences",
    theme: "fusion",
    numvisibleplot: 5
  },
  categories: [
    {
      category: [
        {
          label: "12/01"
        },
        {
          label: "12/02"
        },
        {
          label: "12/03"
        },
        {
          label: "12/04"
        },  
        {
          label: "12/05"
        }
      
      ]
    }
  ],
  dataset: [
    {
      dataset: [
        {
          seriesname: "Data Exfiltration",
          data: [
            {
              value: "40"
            },
            {
              value: "51"
            },
            {
              value: "21"
            },
            {
              value: "78"
            },
            {
              value: "26"
            }

          ]
        },
        {
          seriesname: "Insider Threats",
          data: [
            {
              value: "23"
            },
            {
              value: "78"
            },
            {
              value: "43"
            },
            {
              value: "32"
            },
            {
              value: "10"
            }
          ]
        },
       
        {
          seriesname: "Compromised Users",
          data: [
            {
              value: "23"
            },
            {
              value: "25"
            },
            {
              value: "10"
            },
            {
              value: "14"
            },
            {
              value: "52"
            }
          ]
        },
        
        {
          seriesname: "Compromised Endpoints",
          data: [
            {
              value: "25"
            },
            {
              value: "47"
            },
            {
              value: "14"
            },
            {
              value: "25"
            },
            {
              value: "48"
            }
          ]
        }
      ]
    }
  ]
};

class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="scrollmsstackedcolumn2d"
        width="90%"
        height="50%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

const MyApp = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
      {RISK_CATEGORY: "Data Exfiltration", IMPACT: "56%", OCCURENCES: 80,HIGH: 50, MEDIUM:40, LOW: 20},
      {RISK_CATEGORY: "Insider Threats", IMPACT: "52%", OCCURENCES: 74,HIGH: 20, MEDIUM: 12, LOW: 15},
      {RISK_CATEGORY: "Compromised Users", IMPACT: "15%", OCCURENCES: 70,HIGH: 30, MEDIUM: 20, LOW: 10},
      {RISK_CATEGORY: "Compromised Endpoints", IMPACT: "8%", OCCURENCES: 60,HIGH: 59, MEDIUM: 50, LOW: 23}
  ]);

  return (
      <div className="ag-theme-alpine" style={ { height: 250, width: 1217 } }>
          <AgGridReact
              rowData={rowData} rowSelection="multiple"
              >
              <AgGridColumn field="RISK_CATEGORY" sortable={true} filter={true} ></AgGridColumn>
              <AgGridColumn field="IMPACT" sortable={true} filter={true}></AgGridColumn>
              <AgGridColumn field="OCCURENCES" sortable={true} filter={true}></AgGridColumn>
              <AgGridColumn field="HIGH" sortable={true} filter={true}></AgGridColumn>
              <AgGridColumn field="MEDIUM" sortable={true} filter={true}></AgGridColumn>
              <AgGridColumn field="LOW"  sortable={true} filter={true}></AgGridColumn>
          </AgGridReact>
      </div>
  );
};
ReactDOM.render(<MyComponent/>,document.getElementById('charts_fusionchart'));
ReactDOM.render(<MyApp/>,document.getElementById('datatable_data'));
