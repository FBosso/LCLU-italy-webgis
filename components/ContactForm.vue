/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component will produce the form inserted in the contact-us.vue page (it represents one
of the possible way in wich the user can reach us). No parameters are needed to be passed. 
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
    <div class="container frame">
      <!-- This comment is only for dev and would be removed if code is public
      Form sends post to formSpree to be parsed and forwarded to locusgroup@libero.it, names are required to parse the form
      user: locusgroup
      psw: locusGroup+2022 
      NOTE: On paid plan the redirect can be costumized a different page-->
      <form action="https://formspree.io/f/xlezkdnn" method="POST">
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              class="form-control"
              placeholder="Nome"
              required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="surname">Cognome</label>
            <input
              id="surname"
              name="surname"
              type="text"
              class="form-control"
              placeholder="Cognome"
              required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="mail">Mail</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <span id="inputGroupPrepend" class="input-group-text"
                  ><img
                    style="height: 24px"
                    src="https://i.ibb.co/r60Qb0p/mail.png"
                    alt="mail-image"
                /></span>
              </div>
              <input
                id="mail"
                name="mail"
                type="email"
                class="form-control"
                placeholder="Mail"
                aria-describedby="inputGroupPrepend"
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="city">Città</label>
            <input
              id="city"
              name="city"
              type="text"
              class="form-control"
              placeholder="Città"
              required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">Stato</label>
            <input
              id="state"
              name="state"
              type="text"
              class="form-control"
              placeholder="Stato"
              required
            />
          </div>
          <div class="col-md-4 mb-3">
            <label for="CAP">Codice postale</label>
            <input
              id="CAP"
              name="CAP"
              type="number"
              class="form-control"
              placeholder="Codice postale"
              required
            />
          </div>
        </div>
        <textarea
          name="message"
          placeholder="Messaggio"
          class="form-control mt-3"
          rows="15"
        ></textarea>
        <div class="form-group">
          <br />
          <div class="form-check">
            <input
              id="invalidCheck"
              class="form-check-input"
              type="checkbox"
              value=""
              required
            />
            <label for="invalidCheck" class="form-check-label">
              Accetto termini e condizioni
            </label>
          </div>
        </div>
        <br />
        <button class="btn bottone" type="submit">Invia</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'ContactFormComponent',
}
</script>

<style scoped>
.frame {
  border: 2px solid rgb(182, 182, 182);
  border-radius: 10px;
  padding: 30px;
}
.bottone{
  border: solid 2px white;
  background: rgb(251, 237, 167);
  border-radius: 10px;
  transition: 0.25s linear;
}
.bottone:hover{
  background: transparent;
  border: solid 2px black;
}
</style>