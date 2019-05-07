const template =`<form class="form-horizontal" name="structure">
<div class="form-group row">
  <label for="animal" class="col-3 offset-1 control-label">Choose the animal: </label>
  <div class="col-5">
    <select name="" id="animal" class="form-control" required>
      <option value="cat">CAT</option>
      <option value="dog">DOG</option>
      <option value="hamster">HAMSTER</option>
    </select>
  </div>
</div>
<div class="form-group row">
  <label for="anColor" class="col-3 offset-1 control-label">Write the color: </label>
  <div class="col-5">
    <input type="text" class="form-control" id="anColor" placeholder="color" required>
  </div>
</div>
<div class="form-group row">
  <label for="anCst" class="col-3 offset-1 control-label">Point the cost: </label>
  <div class="col-5">
    <input type="text" class="form-control" placeholder="price" required id="anCst">
  </div>
</div>
<div class="form-group row">
  <label for="anNm" class="col-3 offset-1 control-label">Point the name: </label>
  <div class="col-5">
    <input type="text" class="form-control" placeholder="name" id="anNm">
  </div>
</div>
<div class="form-group row">
    <label for="anNm" class="col-3 offset-1 control-label">Point the type of fur: </label>
    <div class="col-5">
        <select name="" id="animal" class="form-control" required>
            <option value="long">LONG</option>
            <option value="middle">MIDDLE</option>
            <option value="short">SHORT</option>
          </select>
    </div>
  </div>
<div class="row">
  <div class="col-9 d-flex justify-content-end">
      <input type="button" class="btn btn-primary mr-2 addAnimal" value="add animal" disabled>
      <input type="button" class="btn btn-success closeForm" value="close">
  </div>
</div>
</form>`;