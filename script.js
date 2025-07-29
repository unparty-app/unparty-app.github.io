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
        step: '1-30',
        task: 'theunpartyapp',
        audience: Audience.FOUNDERS,
        platform: Platform.PLATFORM,
        status: Status.ACTIVE
    },
    {
        step: '2-30',
        task: 'theunpartyapi',
        audience: Audience.FOUNDERS,
        platform: Platform.CODE,
        status: Status.ACTIVE
    },
    {
        step: '3-30',
        task: 'theunpartybot',
        audience: Audience.FOUNDERS,
        platform: Platform.CODE,
        status: Status.ACTIVE
    },
    {
        step: '4-30',
        task: 'theunpartybrand',
        audience: Audience.FOUNDERS,
        platform: Platform.IOS,
        status: Status.COMPLETED
    },
    {
        step: '5-30',
        task: 'theunpartybudget',
        audience: Audience.TBA,
        platform: Platform.IOS,
        status: Status.COMPLETED
    },
    {
        step: '5-30',
        task: 'theunpartychat',
        audience: Audience.TBA,
        platform: Platform.IOS,
        status: Status.COMPLETED
    },
    {
        step: '5-30',
        task: 'theunpartychatty',
        audience: Audience.TBA,
        platform: Platform.IOS,
        status: Status.COMPLETED
    },
    {
        step: '5-30',
        task: 'theunpartyclock',
        audience: Audience.TBA,
        platform: Platform.IOS,
        status: Status.COMPLETED
    },
    {
        step: '5-30',
        task: 'theunpartycloud',
        audience: Audience.TBA,
        platform: Platform.IOS,
        status: Status.COMPLETED
    },
      {
        step: '5-30',
        task: 'theunpartycore',
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
            <td>${row.step}</td>
            <td><span class="${row.status}">${row.task}</span></td>
            <td>${row.audience}</td>
            <td>${row.platform}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Initialize table when page loads
document.addEventListener('DOMContentLoaded', populateTable);
