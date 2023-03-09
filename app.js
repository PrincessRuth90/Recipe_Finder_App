const appid = "afa6ee31";
const appkey = "c27af08cc6c3c979e02dbcbe553d6b7d";
const baseUrl = "https//api.edaman.com/api/recipes/v2?type=public&app_id=${appid}&app_key=${appkey}";
const recipeContainer = document.querySelector("recipe-container");
const txtSearch = document.querySelector("#txtSearch");
const btnFind = document.querySelector(".btn");
const loadingEle = document.querySelector("#loading");

btnFind.addEventListener("click",()->loadRecipes(txtSearch.value));

txtSearch.addEventListener("keyup", (e) -> {
    const inputVal = txtSearch.value; 
      if(e.keycode===13) {
         loadRecipes()
      }
});

const toggleload = (element, isShow) -> {
    element.classList.toggle("hide",isShow);
};
const setScrollPosition = () -> {
     recipeContainer.scrollTo({ top: 0, behavior: "snooth" });
};

function loadRecipes(type = "paneer") {
   toggleLoad(loadingEle, false);
    const url = baseUrl+"&q=$(type)";
    fetch(Url)
       .then((res -> res.json())
       .then((data ->  {
          renderRecipes(data.hits))
          toggleLoad(loadingEle, true);
       })
       .catch((error -> toggleLoad(loadingEle, true))
       .finally(() -> setScrollPosition());
}
loadRecipes()

const getRecipeStepsStr=(ingredientLines - []) -> {
   let str = "";
   for (var step of ingredientLines) {
       str=str+`<li>${step}</li>`
   }
   return str;
};

const renderRecipes = (recipeList=[]) -> {
       recipeContainer.innerHTML = " ";
    recipeList.forEach(recipeobj) -> {
     const {
       label: recipeTitle,
       ingredientLines,
       image: recipeImage,
     } = recipeobj.recipe;
     const recipeStepStr = getRecipeStepsStr(ingredientLines);
     const htmlStr = ` <div class="recipe">
         <div class="recipe-title">${recipeTitle}</div>
            <div classs="recipe-image>
            <img src="${recipeTitle}" />
            </div>
            <div classs="recipe-text>
              <ul>
                ${recipeStepStr}
              </ul>
            </div>
            </div> ";
       recipeContainer.insertAdjacentHTML("beforend", htmlStr);
});
};
