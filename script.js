let educationBtn = document.querySelector("#educationBtn");
    let submitBtn = document.querySelector("#submitBtn");
    let cancelBtn = document.querySelector("#cancelBtn");

    let getInfo = document.querySelector("#getInfo");
    let showInfo = document.querySelector('#showInfo');

    educationBtn.addEventListener('click', () => {
        getInfo.style.display = 'block';
        showInfo.style.display = 'block';
    })

    let table = document.querySelector('#infoTable');
    let srNum = 1;
    let deg = document.querySelector('#degree');
    let year = document.querySelector('#year');
    let regNo = document.querySelector('#regNo');
    let univ = document.querySelector('#university');

    let editRow = false;
    let index;

    submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
        if (deg.value.trim() != '' && year.value.trim() != '' && regNo.value.trim() != '' && univ.value.trim() != '') {
            if (editRow) {
                let rows = document.querySelectorAll("tr");
                rows.forEach((row) => {
                    if (row.cells[0].innerText == index) {
                        row.cells[1].innerText = deg.value;
                        row.cells[2].innerText = year.value;
                        row.cells[3].innerText = regNo.value;
                        row.cells[4].innerText = univ.value;
                    }
                })
                editRow = false;
            }
            else {

                let row = document.createElement('tr');
                let srData = document.createElement('td');
                srData.setAttribute('class', 'srNo');
                let degData = document.createElement('td');
                let yrData = document.createElement('td');
                let regData = document.createElement('td');
                let univData = document.createElement('td');
                let edit = document.createElement('td');
                let editData = document.createElement('a');
                editData.style.paddingRight = '10%';
                editData.innerText = 'Edit';
                let dltData = document.createElement('a');
                dltData.innerText = 'Delete';

                edit.append(editData, dltData);

                srData.innerText = srNum++;
                degData.innerText = deg.value;
                yrData.innerText = year.value;
                regData.innerText = regNo.value;
                univData.innerText = univ.value;

                row.append(srData, degData, yrData, regData, univData, edit);
                row.setAttribute('id', srData.innerText);
                table.append(row);


                editData.addEventListener('click', (event) => {
                    console.log("edit event occured..", srData.innerText);
                    index = event.target.parentElement.parentElement.cells[0].innerText;
                    deg.value = event.target.parentElement.parentElement.cells[1].innerText;
                    year.value = event.target.parentElement.parentElement.cells[2].innerText;
                    regNo.value = event.target.parentElement.parentElement.cells[3].innerText;
                    univ.value = event.target.parentElement.parentElement.cells[4].innerText;

                    getInfo.style.display = 'block';
                    editRow = true;
                })

                dltData.addEventListener('click', () => {
                    console.log("delete event occured..", srData.innerText);
                    dltData.parentElement.parentElement.remove();
                    let rows = document.querySelectorAll(" tr");
                    srNum = 1;
                    rows.forEach((item, idx) => {
                        if (idx > 0) {
                            item.cells[0].innerText = srNum++;
                            item.setAttribute('id', srNum);
                        }
                    })
                })
            }

        }
            deg.value = '';
            year.value = '';
            regNo.value = '';
            univ.value = '';
        
        getInfo.style.display = 'none';
        showInfo.style.display = 'block';
    })

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deg.value = '';
        year.value = '';
        regNo.value = '';
        univ.value = '';
        getInfo.style.display = 'none';
        showInfo.style.display = 'block';
    })
