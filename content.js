// content.js

// Function to create the button
function createToggleButton() {
  const button = document.createElement('button');
  button.innerText = 'Toggle List View';
  button.classList.add('toggle-button'); // Add the class here

  button.onclick = toggleListView;
  document.body.appendChild(button);
}


// Function to toggle list view
function toggleListView() {
  const gridItems = document.querySelectorAll('.mx-1.my-1.grid > div'); 
  const listContainer = document.createElement('div');
  listContainer.classList.add('list-view');

  // Check if there are any grid items
  if (gridItems.length === 0) {
    console.error('No grid items found');
    return; 
  }

  // Create the list view
  gridItems.forEach(item => {
    const titleElement = item.querySelector('h2');
    const instantRdButton = item.querySelector('button.border-green-500'); 
    const dlButton = item.querySelector('button.border-blue-500'); 
    const watchButton = item.querySelector('button.haptic-sm:nth-of-type(2)');
    const castButton = item.querySelector('button.haptic-sm:nth-of-type(3)');
    const copyButton = item.querySelector('button.haptic-sm:nth-of-type(4)');

    if (titleElement) {
      const title = titleElement.innerText;

      // Create new buttons for each action
      const listItem = document.createElement('div');
      listItem.innerHTML = `<p>${title}</p>`;
      listContainer.appendChild(listItem);

      // Create and append the Instant RD or DL button
      if (instantRdButton) {
        const newInstantRdButton = document.createElement('button');
        newInstantRdButton.className = 'rd-btn border-2 border-green-500 bg-green-900/30 text-green-100 hover:bg-green-800/50 haptic-sm inline rounded px-1 text-xs transition-colors';
        newInstantRdButton.innerHTML = '⚡<b>Instant RD</b>';
        newInstantRdButton.onclick = () => instantRdButton.click();
        listItem.appendChild(newInstantRdButton);
      }
      
      if (dlButton) {
        const newDlButton = document.createElement('button');
        newDlButton.className = 'dl-btn border-2 border-blue-500 bg-blue-900/30 text-blue-100 hover:bg-blue-800/50 haptic-sm inline rounded px-1 text-xs transition-colors';
        newDlButton.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-2 inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>DL with RD';
        newDlButton.onclick = () => dlButton.click();
        listItem.appendChild(newDlButton);
      }

      // Create and append the Watch button
      if (watchButton) {
        const newWatchButton = document.createElement('button');
        newWatchButton.className = 'watch-btn haptic-sm inline rounded border-2 border-teal-500 bg-teal-900/30 px-1 text-xs text-teal-100 transition-colors hover:bg-teal-800/50';
        newWatchButton.innerText = '🧐Watch';
        newWatchButton.onclick = () => watchButton.click();
        listItem.appendChild(newWatchButton);
      }
      
      // Create and append the Cast button
      if (castButton) {
        const newCastButton = document.createElement('button');
        newCastButton.className = 'cast-btn haptic-sm inline rounded border-2 border-gray-500 bg-gray-900/30 px-1 text-xs text-gray-100 transition-colors hover:bg-gray-800/50';
        newCastButton.innerText = 'Cast✨';
        newCastButton.onclick = () => castButton.click();
        listItem.appendChild(newCastButton);
      }
      
      // Create and append the Copy button
      if (copyButton) {
        const newCopyButton = document.createElement('button');
        newCopyButton.className = 'copy-btn haptic-sm inline rounded border-2 border-pink-500 bg-pink-900/30 px-1 text-xs text-pink-100 transition-colors hover:bg-pink-800/50';
        newCopyButton.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M164.07 148.1H12a12 12 0 0 1-12-12v-80a36 36 0 0 1 36-36h104a36 36 0 0 1 36 36v80a11.89 11.89 0 0 1-11.93 12zm347.93-12V56a36 36 0 0 0-36-36H372a36 36 0 0 0-36 36v80a12 12 0 0 0 12 12h152a11.89 11.89 0 0 0 12-11.9zm-164 44a12 12 0 0 0-12 12v52c0 128.1-160 127.9-160 0v-52a12 12 0 0 0-12-12H12.1a12 12 0 0 0-12 12.1c.1 21.4.6 40.3 0 53.3 0 150.6 136.17 246.6 256.75 246.6s255-96 255-246.7c-.6-12.8-.2-33 0-53.2a12 12 0 0 0-12-12.1z"></path></svg>Copy';
        newCopyButton.onclick = () => copyButton.click();
        listItem.appendChild(newCopyButton);
      }
    } else {
      console.error('Title element not found in grid item:', item);
    }
  });

  const existingList = document.querySelector('.list-view');
  if (existingList) {
    existingList.remove(); // Remove the existing list view if it exists
  } else {
    document.body.appendChild(listContainer); // Append the new list view
  }
}



// Run on page load
createToggleButton();
