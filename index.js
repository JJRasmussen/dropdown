const addDropdownFunctionality = (targetButton, targetContent) => {

    //querySelection
    let button = document.querySelector(targetButton);
    let content = document.querySelector(targetContent);
      
    //add class "content-hidden" to content
    
    content.classList.add("dropdown-hidden");
    
    
  
    //adding functionality to panel button
    let dropDown = () => {
      content.className = content.className === "dropdown-shown" ? "dropdown-hidden" : "dropdown-shown";
    };
  
    button.addEventListener("click", () => {
          dropDown();
      }
    );
  };

export {addDropdownFunctionality};