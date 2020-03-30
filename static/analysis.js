document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('#country-new-confirmed').forEach(row => { 
        
        if (row.innerText > 50) { 
            row.className = "bg-danger"
        }   
    })

    document.querySelectorAll('#country-total-confirmed').forEach(row => {
        if (row.innerText > 500){
            row.className = "bg-danger"
        }
    })

    document.querySelectorAll('#country-new-deaths').forEach(row => {
        if(row.innerText > 3) {
            row.className = "bg-danger"
        }
    })

    document.querySelectorAll('#country-total-deaths').forEach(row => {
        if(row.innerText > 50) {
            row.className = "bg-danger"
        }
    })

    document.querySelectorAll('#country-new-recovered').forEach(row => {
        if(row.innerText > 3) {
            row.className = "bg-success"
        }
    })

    document.querySelectorAll('#country-total-recovered').forEach(row => {
        if(row.innerText > 50) {
            row.className = "bg-success"
        }
    })



})