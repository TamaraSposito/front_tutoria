import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from "pdfmake/build/vfs_fonts";

export function Report(students, records) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const reportTitle = [
        {
            text: 'Relatório de Tutoria',
            fontSize: 18,
            bold: true,
            margin: [200, 20, 0, 45],
            color:'#CA96E5',
        }
    ];


    const details = records.map(x => {
        const studentName = students.find(y => y.id == x.studentId).name;

        return { 
            ul: [ `Nome do aluno: ${studentName} - Registro de tutoria: ${x.description}.` ],
            fontSize: 10,
            margin: [20, 0, 0, 0]
             }
    })
    //[{ text: 'Tables', style: 'header' }]

    function Rodape(currentPage, pageCount) {
        return [
            {
                text: currentPage + ' / ' + pageCount,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 20, 0]
            }
        ]
    }


    const docDefinition = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],


        header: [reportTitle],
        content: [details],
        footer: Rodape,
    }

    pdfMake.createPdf(docDefinition).download();

    return
};