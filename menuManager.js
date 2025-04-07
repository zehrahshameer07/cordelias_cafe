const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileName = 'menu.txt';

function createMenu() {
    fs.writeFile(fileName, '', (err) => {
        if (err) {
            console.log('\n[Error] Failed to create the menu file.\n');
        } else {
            console.log('\n[Success] Menu file has been created/reset.\n');
        }
        showMenu();
    });
}

function openMenu() {
    fs.readFile(fileName, 'utf8', (err, data) => {
        console.log('\n==================== MENU ====================\n');
        if (err || !data.trim()) {
            console.log('No items found. The menu is currently empty.\n');
        } else {
            console.log(data);
        }
        console.log('=============================================\n');
        showMenu();
    });
}

function writeMenuItem() {
    console.log('\n[Enter the details of the new menu item]\n');

    rl.question('Item Name: ', (item) => {
        rl.question('Price (Rs): ', (price) => {
            const menuItem = `${item.padEnd(20, '.')} ₹${price}\n`;

            fs.appendFile(fileName, menuItem, (err) => {
                if (err) {
                    console.log('\n[Error] Failed to add the menu item.\n');
                } else {
                    console.log('\n[Success] Menu item added successfully.\n');
                }
                showMenu();
            });
        });
    });
}

function closeApp() {
    console.log('\n[Exiting] Thank you for using the menu manager.\n');
    rl.close();
}


function showMenu() {
    console.log('\n================ MENU MANAGEMENT =================');
    console.log('1. Create Menu ');
    console.log('2. Open and View Menu');
    console.log('3. Add Item to Menu');
    console.log('4. Close Application');
    console.log('=================================================');

    rl.question('\nEnter your choice (1-4): ', (choice) => {
        switch (choice) {
            case '1':
                createMenu();
                break;
            case '2':
                openMenu();
                break;
            case '3':
                writeMenuItem();
                break;
            case '4':
                closeApp();
                break;
            default:
                console.log('\n[Error] Invalid choice. Please enter a number between 1 and 4.\n');
                showMenu();
        }
    });
}


showMenu();
