// Enums for table data
const Audience = {
    FOUNDERS: 'FOUNDERS',
    ALL_ACCESS: 'ALL ACCESS',
    TBA: 'TBA'
};

const Platform = {
    PLATFORM: 'PLATFORM',
    TEMPLATE: 'template',
    SERVICE: 'SERVICE',
    FREE: 'free',
    TBA: 'TBA'
};

const Status = {
    ACTIVE: 'uncrossed-text',
    COMPLETED: 'crossed-text'
};

// CSV-like data structure
const tableData = [
    {
        date: 'TBA',
        task: 'UNPARTY FOUNDERS',
        audience: Audience.FOUNDERS,
        platform: Platform.PLATFORM,
        status: Status.COMPLETED
    },
    {
        date: 'TBA',
        task: 'UNPARTY NOTION',
        audience: Audience.FOUNDERS,
        platform: Platform.PLATFORM,
        status: Status.COMPLETED
    },
    {
        date: 'TBA',
        task: 'UNPARTY LANDING',
        audience: Audience.FOUNDERS,
        platform: Platform.PLATFORM,
        status: Status.COMPLETED
    },
    {
        date: 'TBA',
        task: 'VISION IS NOT PRODUCT',
        audience: Audience.FOUNDERS,
        platform: Platform.PLATFORM,
        status: Status.COMPLETED
    },
    {
        date: 'TBA',
        task: 'UNPARTY APP',
        audience: Audience.TBA,
        platform: Platform.TBA,
        status: Status.COMPLETED
    }
];

// Function to populate table
function populateTable() {
    const tableBody = document.querySelector('table');
    
    // Clear existing rows
    tableBody.innerHTML = '';
    
    // Add rows from data
    tableData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.date}</td>
            <td><span class="${row.status}">${row.task}</span></td>
            <td>${row.audience}</td>
            <td>${row.platform}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Initialize table when page loads
document.addEventListener('DOMContentLoaded', populateTable);