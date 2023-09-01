document.getElementById('openFolderButton').addEventListener('click', function() {
    // Replace 'folderPath' with the actual path to the folder you want to open.
    const folderPath = 'path/to/your/folder';
    
    // Open the folder using a new window or tab.
    window.open(folderPath, '_blank');
});