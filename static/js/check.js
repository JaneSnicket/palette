/*
function countColors() {
    const preferredColors = 'input[name="preferred"]:checked';
    const selectedPreferredColors = document.querySelectorAll(preferredColors);
    
    // 선택된 목록의 갯수 세기
    const preferredColorsCnt = selectedPreferredColors.length;
    console(preferredColorsCnt);
}
*/

function checkColors() {
    
    str = "좋아하는 색상 : \n";

    /* 좋아하는 색상 유효성 검사 */
    /*
    flag = false;
    for(i=0; i < selectColors.preferred.length; i++){
        if(selectColors.preferred[i].checked){
            str += selectColors.preferred[i].value + "\n";
            flag = true;
        }
    }
    */

    flag = false;
    if(selectColors.preferred.length == 0) {
        alert("마음에 드는 색상을 선택해주세요." + selectColors.preferred.length);
    }
    else if(selectColors.preferred.length == 1) {
        alert("마음에 드는 색상을 2개 더 선택해주세요." + selectColors.preferred.length);
    }
    else if(selectColors.preferred.length == 2) {
        alert("마음에 드는 색상을 1개 더 선택해주세요." + selectColors.preferred.length);
    }
    else if(selectColors.preferred.length == 3) {
        for(i=0; i < selectColors.preferred.length; i++){
            if(selectColors.preferred[i].checked){
                str += selectColors.preferred[i].value + "\n";
            }
            flag = true;
        }
    }
    else {
        alert("마음에 드는 색상은 3개까지 선택 가능합니다.");
    }
    

    str += "안 좋아하는 색상 : \n";

    /* 안 좋아하는 색상 유효성 검사 */
    /*
    if(selectColors.disliked.length == 0) {
        alert("마음에 들지 않는 색상을 선택해주세요.");
        return false;
    }
    else if(selectColors.disliked.length == 1) {
        for(i=0; i < selectColors.disliked.length; i++){
            if(selectColors.disliked[i].checked){
                str += selectColors.disliked[i].value + "\n";
            }
        }
    }
    else {
        alert("마음에 들지 않는 색상은 1개까지 선택 가능합니다.");
        return false;
    }
    */
    
    flag = false;
    if(selectColors.disliked.checked){
        str += selectColors.disliked.value + "\n";
        flag = true;
    }
        
    if(flag == false){
        alert("마음에 들지 않는 색상을 선택해주세요.");
        return false;
    }
    
}