import { useState } from 'react';
import Card from '@mui/material/Card';
//import MaterialTable, { Column } from "material-table";
import CustomTable from 'components/Common/CustomTable';
export default function Table() {
    type IType =
        | "string"
        | "boolean"
        | "numeric"
        | "date"
        | "datetime"
        | "time"
        | "currency"
        | undefined;
    const string: IType = "string";

    interface IPerson {
        firstName: string;
        lastName: string;
        birthYear: number;
        availability: boolean;
    }
    interface IPersonAfterRowUpdate extends IPerson {
        tableData: any;
        oldData: { id: number };
    }
    const lookup = { true: "Available", false: "Unavailable" };
    const [columns, setColumns] = useState([
        { title: "firstName", field: "firstName", type: "string" as const },
        {
            title: "lastName",
            field: "lastName",
            initialEditValue: "initial edit value",
            type: "string" as const
        },
        { title: "Birth Year", field: "birthYear", type: "string" as const },
        {
            title: "Availablity",
            field: "availability",
            lookup: lookup,
            type: "string" as const
        }
    ]);


    const [data, setData] = useState<Array<IPerson>>([
        {
            firstName: "Tod",
            lastName: "Miles",
            birthYear: 1987,
            availability: true
        },
        {
            firstName: "Jess",
            lastName: "Smith",
            birthYear: 2000,
            availability: false
        }
    ]);


    return (
        // <Card style = {{padding:"20px"}}>
            <CustomTable
                title="Editable Preview"
                columns={columns}
                data={data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise<void>((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData]);

                                resolve();
                            }, 1000);

                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise<void>((resolve, reject) => {
                            //   let oldData = 
                            setTimeout(() => {
                                if (oldData) {
                                    const updatedData = [...data];
                                    const index = (oldData as IPersonAfterRowUpdate).tableData.id;
                                    updatedData[index] = newData;
                                    setData(updatedData);
                                    resolve();
                                }
                                reject(new Error('Could not find oldData'));
                            }, 1000);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise<void>((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = (oldData as IPersonAfterRowUpdate).tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve();
                            }, 1000);
                        })
                }}
            />
        // </Card>
    )
}

