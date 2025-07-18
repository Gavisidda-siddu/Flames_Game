function calculateFLAMES() {
    let name1 = document.getElementById('name1').value.toLowerCase().replace(/\s/g, '');
    let name2 = document.getElementById('name2').value.toLowerCase().replace(/\s/g, '');

  
    let name1Arr = name1.split('');
    let name2Arr = name2.split('');

    for (let i = 0; i < name1Arr.length; i++) {
        for (let j = 0; j < name2Arr.length; j++) {
            if (name1Arr[i] === name2Arr[j]) {
                name1Arr.splice(i, 1);
                name2Arr.splice(j, 1);
                i--; 
                break;
            }
        }
    }

    let remainingCount = name1Arr.length + name2Arr.length;
    
    let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
    let index = 0;

    while (flames.length > 1) {
    
        index = (index + remainingCount - 1) % flames.length;  
        flames.splice(index, 1);  
        index=0;
       

    let relationship = flames[0];

    
    let relationshipResult;
    switch (relationship) {
        case 'F':
            relationshipResult = "Friend";
            break;
        case 'L':
            relationshipResult = "Love";
            break;
        case 'A':
            relationshipResult = "Affection";
            break;
        case 'M':
            relationshipResult = "Marriage";
            break;
        case 'E':
            relationshipResult = "Enemies";
            break;
        case 'S':
            relationshipResult = "Sister (to Male)";
            break;
        default:
            relationshipResult = "Unknown";
    }

    document.getElementById('result').innerText = `Relationship: ${relationshipResult}`;
}
}
