// Enums for table data
const Audience = {
    FOUNDERS: 'FOUNDERS',
    ALL_ACCESS: 'ALL ACCESS',
    TBA: 'TBA'
};

const Platform = {
    PLATFORM: 'APP',
    TEMPLATE: 'template',
    SERVICE: 'SERVICE',
    CODE: 'GIT',
    IOS: 'IOS',
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
        date: '6-30',
        task: 'UNPARTY.APP',
        audience: Audience.FOUNDERS,
        platform: Platform.APP,
        status: Status.ACTIVE
    },
    {
        date: '6-30',
        task: 'THEUNPARTYCRAWLER',
        audience: Audience.FOUNDERS,
        platform: Platform.GIT,
        status: Status.ACTIVE
    },
    {
        date: '6-30',
        task: 'THEUNPARTYAPPRUNWAY',
        audience: Audience.FOUNDERS,
        platform: Platform.GIT,
        status: Status.ACTIVE
    },
    {
        date: 'TBA',
        task: 'UNPPP.',
        audience: Audience.FOUNDERS,
        platform: Platform.IOS,
        status: Status.COMPLETED
    },
    {
        date: 'TBA',
        task: 'UNCLOCK',
        audience: Audience.TBA,
        platform: Platform.IOS,
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